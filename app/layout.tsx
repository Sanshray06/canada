import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octopus Tech — Smart Solutions for Modern Business",
  description: "We deliver cutting-edge technology solutions. Get in touch and let us transform your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
