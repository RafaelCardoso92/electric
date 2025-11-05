import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Electrician Services | Licensed & Certified",
  description: "Expert electrical services for residential and commercial properties. Licensed electrician offering emergency repairs, installations, rewiring, and safety inspections. Available 24/7 for emergencies.",
  keywords: ["electrician", "electrical services", "emergency electrician", "electrical repairs", "rewiring", "electrical installation", "licensed electrician"],
  authors: [{ name: "Professional Electrician" }],
  openGraph: {
    title: "Professional Electrician Services",
    description: "Licensed electrician offering expert electrical services for homes and businesses",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
