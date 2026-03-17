import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Footer from "@/components/footer";
import "./globals.css";

const baiduTongjiId = process.env.NEXT_PUBLIC_BAIDU_TONGJI_ID;
const baiduSiteVerification =
  process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION || "codeva-UJmZUjBinB";

export const metadata: Metadata = {
  metadataBase: new URL("https://openclaw2026.cc"),
  title: "OpenClaw 中文教程与部署站",
  description:
    "OpenClaw 中文内容站：安装、部署、报错排查、实战案例与远程协助。",
  keywords: [
    "openclaw",
    "openclaw 安装",
    "openclaw 免费安装",
    "openclaw 免费安装教程",
    "openclaw 教程",
    "openclaw 部署",
    "openclaw skill 安装",
    "openclaw 飞书接入",
    "openclaw 钉钉接入",
    "openclaw 使用技巧",
    "openclaw 报错",
    "openclaw 安全",
    "openclaw 成本控制",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
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
    url: "https://openclaw2026.cc",
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
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {baiduSiteVerification ? (
          <meta name="baidu-site-verification" content={baiduSiteVerification} />
        ) : null}
      </head>
      <body>
        {baiduTongjiId ? (
          <>
            <Script id="baidu-tongji-loader" strategy="afterInteractive">
              {`var _hmt = _hmt || [];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?${baiduTongjiId}";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();`}
            </Script>
          </>
        ) : null}
        <div className="page-container">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
