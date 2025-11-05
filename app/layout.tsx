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
  title: "HSES Electrical Contractors | Wombwell, Barnsley | Licensed Electrician",
  description: "Expert electrical services in Wombwell, Barnsley and surrounding areas. Over 10 years experience. Licensed electrician offering emergency repairs, installations, rewiring, and safety inspections. Available 24/7 for emergencies.",
  keywords: ["electrician Wombwell", "electrician Barnsley", "electrical services", "emergency electrician", "electrical repairs", "rewiring", "electrical installation", "licensed electrician", "HSES Electrical"],
  authors: [{ name: "HSES Electrical Contractors" }],
  openGraph: {
    title: "HSES Electrical Contractors | Wombwell, Barnsley",
    description: "Licensed electrician offering expert electrical services for homes and businesses in Wombwell, Barnsley",
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
