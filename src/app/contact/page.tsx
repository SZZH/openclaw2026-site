import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "联系顾问 | OpenClaw 中文站",
  description: "提交 OpenClaw 安装、部署、报错、安全与成本问题，获取可执行方案。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="page-wrap">
      <article className="card post-card">
        <Link href="/" className="text-link back-link">
          返回首页
        </Link>
        <h1>联系顾问</h1>
        <p className="lead">提交问题后会尽快联系你，优先处理可复现和可上线的问题。</p>

        <section className="contact-grid">
          <div className="contact-channel card">
            <h2>微信咨询</h2>
            <p>
              微信号：<strong>openclaw-helper</strong>
            </p>
            <Image src="/assets/wechat-qr-placeholder.svg" alt="微信二维码" width={220} height={220} />
            <p className="form-tip">扫码后备注你的问题类型，例如：安装 / 部署 / 排障。</p>
          </div>

          <div className="contact-channel card">
            <h2>提交问题表单</h2>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
