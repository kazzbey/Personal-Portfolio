import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // Honeypot spam check: bots will fill out the invisible "website" input
    if (website && website.trim().length > 0) {
      console.warn("[Contact API] Honeypot triggered. Silently dropping spam submission.");
      return NextResponse.json(
        { success: true, message: "Your message has been processed." },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Message is too long (maximum 5000 characters)." },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: result.message },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
