import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chatting with Friends",
  description: "Connect and chat with your friends in real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
