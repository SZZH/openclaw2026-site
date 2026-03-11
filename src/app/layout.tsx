import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://openclaw.cc"),
  title: "OpenClaw 中文教程与部署站",
  description:
    "OpenClaw 中文内容站：安装、部署、报错排查、实战案例与远程协助。",
  keywords: [
    "openclaw",
    "openclaw 安装",
    "openclaw 教程",
    "openclaw 部署",
    "openclaw 报错",
    "openclaw 安全",
    "openclaw 成本控制",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://openclaw.cc",
    siteName: "OpenClaw 中文站",
    title: "OpenClaw 中文教程与部署站",
    description:
      "OpenClaw 中文内容站：安装、部署、报错排查、实战案例与远程协助。",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw 中文教程与部署站",
    description:
      "OpenClaw 中文内容站：安装、部署、报错排查、实战案例与远程协助。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
