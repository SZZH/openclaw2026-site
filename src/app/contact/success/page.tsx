import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStripeClient } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "支付成功 | OpenClaw 有偿咨询",
  description: "支付成功后查看 OpenClaw 咨询微信二维码。",
  alternates: { canonical: "/contact/success" },
};

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function ContactSuccessPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    return (
      <main className="page-wrap">
        <article className="card post-card">
          <h1>未检测到支付会话</h1>
          <p className="lead">请返回支付页重新发起支付。</p>
          <Link href="/contact" className="btn btn-primary">
            返回支付页
          </Link>
        </article>
      </main>
    );
  }

  let verifyState: "paid" | "unpaid" | "error" = "error";

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid" || session.status === "complete";
    verifyState = paid ? "paid" : "unpaid";
  } catch {
    verifyState = "error";
  }

  if (verifyState === "paid") {
    return (
      <main className="page-wrap">
        <article className="card post-card">
          <h1>支付成功</h1>
          <p className="lead">请扫码添加微信并备注你的问题类型（安装 / 部署 / 排障 / 成本）。</p>
          <div className="paid-qr-wrap">
            <Image src="/assets/wechat-qr.png" alt="咨询微信二维码" width={320} height={320} />
          </div>
          <p className="form-tip">如二维码无法识别，请截图后在微信中“扫一扫”导入识别。</p>
        </article>
      </main>
    );
  }

  if (verifyState === "unpaid") {
    return (
      <main className="page-wrap">
        <article className="card post-card">
          <h1>支付未完成</h1>
          <p className="lead">请完成支付后再查看二维码。</p>
          <Link href="/contact" className="btn btn-primary">
            返回支付页
          </Link>
        </article>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <article className="card post-card">
        <h1>支付校验失败</h1>
        <p className="lead">系统暂时无法确认支付状态，请稍后重试。</p>
        <Link href="/contact" className="btn btn-primary">
          返回支付页
        </Link>
      </article>
    </main>
  );
}
