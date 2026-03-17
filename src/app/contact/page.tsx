import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw 有偿咨询 | 19.9 元微信扫码咨询",
  description: "支持微信与支付宝支付，付款成功后展示 OpenClaw 咨询微信二维码。",
  alternates: { canonical: "/contact" },
};

type Props = {
  searchParams: Promise<{ canceled?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { canceled } = await searchParams;

  return (
    <main className="page-wrap">
      <article className="card post-card">
        <Link href="/" className="text-link back-link">
          返回首页
        </Link>
        <h1>OpenClaw 有偿咨询</h1>
        <p className="lead">咨询定价 19.9 元，支持微信与支付宝。支付成功后显示微信二维码。</p>
        {canceled ? <p className="form-tip">你已取消支付，可重新发起。</p> : null}

        <section className="contact-channel card">
          <h2>支付说明</h2>
          <ul className="bullet-list">
            <li>单次咨询：19.9 元人民币</li>
            <li>支付方式：微信支付、支付宝</li>
            <li>支付成功后自动跳转并展示咨询二维码</li>
          </ul>
          <form action="/api/checkout/create" method="post" className="payment-form">
            <button
              className="btn btn-primary"
              type="submit"
              data-track-event="conversion"
              data-track-action="contact_pay_click"
              data-track-label="pay_19_9"
            >
              立即支付 19.9 元
            </button>
          </form>
        </section>
      </article>
    </main>
  );
}
