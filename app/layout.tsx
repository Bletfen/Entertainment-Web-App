import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const outFit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entertainment Web App",
  icons: {
    icon: "/assets/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outFit.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
