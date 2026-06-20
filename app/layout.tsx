import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CargoSync - Smart Solutions for Modern Business",
  description: "We deliver cutting-edge technology solutions. Get in touch and let us transform your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
