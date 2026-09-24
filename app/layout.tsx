import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Khuzaima | Full Stack Developer",
  description:
    "Full Stack Developer and BSCS student building responsive web experiences and practical data-driven solutions with modern technologies.",
  keywords: [
    "Muhammad Khuzaima",
    "Full Stack Developer",
    "Web Developer",
    "Data Analytics",
    "Power BI",
    "JavaScript",
    "Portfolio",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Khuzaima", url: "https://muhammadkhuzaima.dev" }],
  creator: "Muhammad Khuzaima",
  metadataBase: new URL("https://muhammadkhuzaima.dev"),
  alternates: {
    canonical: "https://muhammadkhuzaima.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadkhuzaima.dev",
    siteName: "Muhammad Khuzaima Portfolio",
    title: "Muhammad Khuzaima | Full Stack Developer",
    description:
      "Full Stack Developer and BSCS student building responsive web experiences and practical data-driven solutions.",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Muhammad Khuzaima — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Khuzaima | Full Stack Developer",
    description:
      "Full Stack Developer and BSCS student building responsive web experiences and practical data-driven solutions.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#030712] text-[#f8fafc] min-h-screen selection:bg-purple-600/30 selection:text-purple-200 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
