import { Open_Sans } from "next/font/google";

import "./globals.css";
import Header from "@/components/header/Header";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
