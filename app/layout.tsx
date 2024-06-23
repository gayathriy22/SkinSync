import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  
});

export const metadata: Metadata = {
  title: "SkinSync",
  description:
    "SkinSync is a skincare app that helps you track your skincare and find the best products for your skin type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
