import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monolith Pitch Deck",
  description: "Professional pitch deck presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
