import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "孙博文 | Project & Product Assistant Portfolio",
  description:
    "软件工程专业应届生，PMP，求职方向为项目管理助理、产品经理助理、项目实施助理。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth dark">
      <body className="min-h-full overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
