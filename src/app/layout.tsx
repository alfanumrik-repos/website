import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

// Primary heading font - Clean, geometric sans-serif
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Body text font - Legible sans-serif
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alfanumrik | The Cognitive Operating System for Future-Ready Schools",
    template: "%s | Alfanumrik",
  },
  description:
    "Alfanumrik is the cognitive operating system for modern schools. Unifying operations, academics, adaptive learning, finance, and stakeholder experience into one intelligent platform.",
  keywords: [
    "school management system",
    "school ERP",
    "learning management system",
    "adaptive learning",
    "school software India",
    "education technology",
  ],
  authors: [{ name: "Alfanumrik" }],
  openGraph: {
    title: "Alfanumrik | The Cognitive Operating System for Future-Ready Schools",
    description:
      "Not just ERP, not just LMS. An intelligence layer for modern schools.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfanumrik",
    description:
      "The Cognitive Operating System for Future-Ready Schools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
