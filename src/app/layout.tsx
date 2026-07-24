import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeRegistry } from "@/theme/ThemeRegistry";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Aakash | Financial Analyst Portfolio",
  description:
    "Portfolio of a Financial Analyst fresher -- financial modeling, valuation, and analysis projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeRegistry fontFamily={`${roboto.style.fontFamily}, Arial, sans-serif`}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
