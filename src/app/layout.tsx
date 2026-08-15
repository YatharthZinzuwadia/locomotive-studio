import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yoKi — Creative Developer",
  description:
    "Yatharth Zinzuwadia — Full-stack developer creating digital experiences, interactive websites, AI-integrated applications and creative technology.",
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
