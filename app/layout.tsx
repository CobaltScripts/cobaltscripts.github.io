import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppinsMono = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Cobalt",
  description: "Experience the next level of Skyblock and maximize your grinding potential with Cobalt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${poppinsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
