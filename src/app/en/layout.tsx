import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw English Guides & Deployment Hub",
  description:
    "English OpenClaw resource hub for installation, deployment, troubleshooting, security, and cost control.",
  keywords: [
    "openclaw",
    "openclaw installation",
    "openclaw deployment",
    "openclaw troubleshooting",
    "openclaw security",
    "openclaw cost control",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openclaw.cc/en",
    siteName: "OpenClaw English Hub",
    title: "OpenClaw English Guides & Deployment Hub",
    description:
      "English OpenClaw resource hub for installation, deployment, troubleshooting, security, and cost control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw English Guides & Deployment Hub",
    description:
      "English OpenClaw resource hub for installation, deployment, troubleshooting, security, and cost control.",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
