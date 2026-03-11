import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { enPosts, getEnPostBySlug } from "@/data/posts-en";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return enPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) return { title: "Guide not found | OpenClaw English Hub" };

  return {
    title: `${post.title} | OpenClaw English Hub`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/en/guides/${post.slug}`,
      languages: { "zh-CN": `/guides/${post.slug}`, en: `/en/guides/${post.slug}` },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://openclaw.cc/en/guides/${post.slug}`,
      title: `${post.title} | OpenClaw English Hub`,
      description: post.description,
      siteName: "OpenClaw English Hub",
    },
  };
}

export default async function EnGuidePage({ params }: Props) {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = enPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);
  const riskByCategory: Record<string, string[]> = {
    Security: ["Do not run unverified skills in production.", "Do not expose high-privilege credentials to shared channels."],
    Cost: ["Do not scale before budget thresholds are active.", "Do not track only total bill. Watch task-level spikes."],
    Deployment: ["Do not release without rollback validation.", "Do not change image, config, and model policy at once."],
    Channels: ["Do not enable broad group triggers by default.", "Do not reuse credentials across environments."],
  };
  const failureByCategory: Record<string, string[]> = {
    Installation: ["Skipping environment checks causes startup failures.", "Mixed runtime versions create inconsistent dependency behavior."],
    Deployment: ["Changing too many variables at once hides root cause.", "No rollback rehearsal extends outage recovery time."],
    Troubleshooting: ["Reading only the last stack line misses root cause.", "No fixed troubleshooting order doubles investigation time."],
    Cost: ["Scaling before budget limits causes sudden bill spikes.", "No fallback model routing causes cost loss at peak hours."],
  };
  const acceptanceByCategory: Record<string, string[]> = {
    Installation: ["Service starts successfully", "Core commands run", "First test task returns expected output"],
    Deployment: ["Production endpoint works", "Critical flow passes checks", "No persistent high-severity log error"],
    Channels: ["Inbound messages are received", "Outbound replies are sent", "Auth and isolation rules behave correctly"],
    Security: ["Least privilege is enforced", "High-risk actions are auditable", "Sensitive configs are traceable"],
    Cost: ["Budget thresholds trigger correctly", "Fallback model routing works", "Alert channel receives anomalies"],
  };
  const fitByCategory: Record<string, string> = {
    Installation: "You are setting up OpenClaw for the first time.",
    Deployment: "You already run locally and need production rollout.",
    Troubleshooting: "You need to restore service and isolate root cause quickly.",
    Channels: "Your channel integration is unstable or inconsistent.",
    Security: "You are preparing for long-term production usage.",
    Cost: "You need predictable budget control under continuous agent workloads.",
  };
  const outcomeByCategory: Record<string, string> = {
    Installation: "You finish with a working baseline environment.",
    Deployment: "You finish with a rollback-safe production release.",
    Troubleshooting: "You finish with a repeatable incident handling path.",
    Channels: "You finish with stable message loops.",
    Security: "You finish with an enforceable security baseline.",
    Cost: "You finish with controlled spend and fallback strategy.",
  };
  const riskList = riskByCategory[post.category] ?? [
    "Change one variable at a time to avoid mixed signals.",
    "Keep rollback evidence and logs for every change.",
  ];
  const failureList = failureByCategory[post.category] ?? [
    "Skipping acceptance checks delays issue discovery.",
    "Missing rollback path extends incident duration.",
  ];
  const acceptanceList = acceptanceByCategory[post.category] ?? ["Reproducible", "Rollback-safe", "Monitorable"];
  const fit = fitByCategory[post.category] ?? "You need a practical path to complete this task.";
  const outcome = outcomeByCategory[post.category] ?? "You get a clear and executable implementation path.";
  const commandByCategory: Record<string, string[]> = {
    Installation: ["npm install -g openclaw@latest", "openclaw onboard --install-daemon", "openclaw doctor"],
    Deployment: ["docker compose up -d", "docker ps | grep openclaw", "curl http://127.0.0.1:3000"],
    Troubleshooting: ["lsof -i :18789", "lsof -i :3000", "openclaw logs --tail 200"],
    Channels: ["openclaw channels list", "openclaw channels test <channel>", "openclaw logs --tail 200"],
    Security: ["openclaw skills list", "openclaw skills audit", "openclaw config validate"],
    Cost: ["openclaw usage report --daily", "openclaw usage report --monthly", "openclaw config validate"],
    Operations: ["openclaw --version", "openclaw doctor", "npm install -g openclaw@<old_version>"],
  };
  const officialLinksByCategory: Record<string, { name: string; href: string }[]> = {
    Channels: [{ name: "Feishu Open Platform", href: "https://open.feishu.cn/" }],
    Deployment: [
      { name: "Alibaba Cloud ECS", href: "https://www.aliyun.com/product/ecs" },
      { name: "Tencent Cloud CVM", href: "https://cloud.tencent.com/product/cvm" },
      { name: "Huawei Cloud ECS", href: "https://www.huaweicloud.com/product/ecs.html" },
    ],
    Cost: [
      { name: "AWS EC2 Pricing", href: "https://aws.amazon.com/ec2/pricing/" },
      { name: "DigitalOcean Droplet Pricing", href: "https://www.digitalocean.com/pricing/droplets" },
    ],
  };
  const commandList = commandByCategory[post.category] ?? ["openclaw doctor"];
  const officialLinks = officialLinksByCategory[post.category] ?? [];
  const pageUrl = `https://openclaw.cc/en/guides/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    dateModified: post.updatedAt,
    inLanguage: "en-US",
    keywords: post.keywords.join(", "),
    url: pageUrl,
    author: { "@type": "Organization", name: "OpenClaw English Hub" },
    publisher: { "@type": "Organization", name: "OpenClaw English Hub" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "English Hub", item: "https://openclaw.cc/en" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://openclaw.cc/en#topics" },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <main className="page-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="card post-card">
        <Link href="/en" className="text-link back-link">Back to English Hub</Link>
        <span className="tag">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
        <div className="meta">
          <span>Updated: {post.updatedAt}</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <section className="summary-grid">
          <div className="summary-item">
            <h3>Best for</h3>
            <p>{fit}</p>
          </div>
          <div className="summary-item">
            <h3>Reading time</h3>
            <p>{post.readingMinutes} minutes</p>
          </div>
          <div className="summary-item">
            <h3>Expected result</h3>
            <p>{outcome}</p>
          </div>
        </section>

        <section className="post-body">
          <h2>Execution Steps</h2>
          <ol className="step-list">
            {post.content.map((paragraph) => (
              <li key={paragraph}>{paragraph}</li>
            ))}
          </ol>
        </section>

        <section className="post-body">
          <h2>Key Commands</h2>
          <pre className="cmd-block">
            <code>{commandList.join("\n")}</code>
          </pre>
        </section>

        <section className="post-body">
          <h2>Common Risks</h2>
          <ul className="bullet-list">
            {riskList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="post-body">
          <h2>Frequent Failure Patterns</h2>
          <ul className="bullet-list">
            {failureList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="post-body">
          <h2>Acceptance Checks</h2>
          <ul className="bullet-list">
            {acceptanceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {officialLinks.length > 0 ? (
          <section className="post-body">
            <h2>Official Links</h2>
            <ul className="bullet-list">
              {officialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="text-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="post-body related-block">
            <h2>Related Guides</h2>
            <ul className="bullet-list">
              {relatedPosts.map((item) => (
                <li key={item.slug}><Link href={`/en/guides/${item.slug}`} className="text-link">{item.title}</Link></li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </main>
  );
}
