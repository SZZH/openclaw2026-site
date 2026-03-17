import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";

const CONSULT_PRICE_CNY = 1990;

export async function POST() {
  try {
    const stripe = getStripeClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["alipay", "wechat_pay"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cny",
            unit_amount: CONSULT_PRICE_CNY,
            product_data: {
              name: "OpenClaw 有偿咨询",
              description: "支付成功后显示微信二维码（单次咨询）",
            },
          },
        },
      ],
      success_url: `${siteUrl}/contact/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/contact?canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to create checkout url." }, { status: 500 });
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Payment is not configured yet.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
