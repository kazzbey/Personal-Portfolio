import nodemailer from "nodemailer";

interface ContactEmailOptions {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailOptions): Promise<{ success: boolean; message: string }> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_EMAIL || "khuzaimam335@gmail.com";

  // Check if SMTP credentials are provided
  if (!host || !user || !pass) {
    console.warn(
      "[Nodemailer] SMTP credentials are not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in your environment."
    );
    // In local development without configured SMTP, simulate successful intake
    return {
      success: true,
      message:
        "Message received (simulated mode: SMTP credentials are not configured in environment).",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const sanitizedSubject = subject.replace(/[\r\n]/g, " ").trim();
    const mailOptions = {
      from: `"${name} via Portfolio" <${user}>`,
      to,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${sanitizedSubject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; color: #1a202c;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">New Portfolio Contact Message</h2>
          <p style="margin: 12px 0;"><strong>Sender Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 12px 0;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #6366f1;">${escapeHtml(email)}</a></p>
          <p style="margin: 12px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #7c3aed; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 8px; color: #334155;">Message:</strong>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          <footer style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from Muhammad Khuzaima's Portfolio Website
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: unknown) {
    console.error("[Nodemailer Error]:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to deliver message.";
    return {
      success: false,
      message: `Unable to send email right now: ${errorMessage}`,
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
