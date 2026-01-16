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
    default: "Alfanumrik | School Management Intelligence Platform",
    template: "%s | Alfanumrik",
  },
  description:
    "Alfanumrik is an AI-powered school management intelligence platform combining ERP, LMS, finance, and adaptive learning for Indian K-12 schools. Reduce admin workload, improve teacher efficiency, and boost student outcomes.",
  keywords: [
    "school management intelligence platform",
    "school management system India",
    "school ERP software",
    "learning management system K-12",
    "adaptive learning platform",
    "school software India",
    "education technology India",
    "AI school management",
    "school operating system",
    "School OS",
  ],
  authors: [{ name: "Alfanumrik" }],
  // No favicon - using text title only as per branding guidelines
  openGraph: {
    title: "Alfanumrik | School Management Intelligence Platform",
    description:
      "An AI-powered operating system for Indian K-12 schools—integrating ERP, LMS, finance, and adaptive learning in one intelligent platform.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfanumrik | India's First School Intelligence OS",
    description:
      "An AI-powered operating system for Indian K-12 schools—integrating ERP, LMS, finance, and adaptive learning.",
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
