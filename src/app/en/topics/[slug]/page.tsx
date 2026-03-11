import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { enTopicCategories, getEnTopicBySlug } from "@/data/categories-en";
import { enPosts } from "@/data/posts-en";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return enTopicCategories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getEnTopicBySlug(slug);
  if (!topic) return { title: "Topic not found | OpenClaw English Hub" };

  return {
    title: `${topic.title} | OpenClaw English Hub`,
    description: topic.description,
    keywords: topic.keywords,
    alternates: {
      canonical: `/en/topics/${topic.slug}`,
      languages: { "zh-CN": `/topics/${topic.slug}`, en: `/en/topics/${topic.slug}` },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://openclaw.cc/en/topics/${topic.slug}`,
      title: `${topic.title} | OpenClaw English Hub`,
      description: topic.description,
      siteName: "OpenClaw English Hub",
    },
  };
}

export default async function EnTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getEnTopicBySlug(slug);
  if (!topic) notFound();

  const relatedPosts = enPosts.filter((post) => post.category === topic.category);
  const quickStartByCategory: Record<string, string[]> = {
    Installation: ["Check runtime and port availability", "Run installation steps exactly", "Verify with first message flow"],
    Deployment: ["Prepare env vars and rollback version", "Release with checklist", "Run health and log checks"],
    Troubleshooting: ["Recover service first", "Find root cause in fixed order", "Record prevention action"],
    Channels: ["Validate auth and callback", "Test inbound/outbound messages", "Enable mention and allow-list rules"],
    Security: ["Apply least privilege", "Audit high-risk skills", "Run pre-release hardening checks"],
    Cost: ["Set daily and monthly limits", "Enable threshold alerts", "Configure fallback model routing"],
  };
  const quickStart = quickStartByCategory[topic.category] ?? [
    "Define your current blocker",
    "Execute one checklist at a time",
    "Confirm result with acceptance checks",
  ];
  const topicUrl = `https://openclaw.cc/en/topics/${topic.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "English Hub", item: "https://openclaw.cc/en" },
      { "@type": "ListItem", position: 2, name: "Topics", item: "https://openclaw.cc/en#topics" },
      { "@type": "ListItem", position: 3, name: topic.title, item: topicUrl },
    ],
  };

  return (
    <main className="page-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="card post-card topic-page">
        <div className="topic-hero">
          <div>
            <Link href="/en" className="text-link back-link">Back to English Hub</Link>
            <span className="tag">{topic.category}</span>
            <h1>{topic.title}</h1>
            <p className="lead">{topic.description}</p>
          </div>
          <div className="topic-hero-side">
            <h3>What you get from this topic</h3>
            <p>{topic.lead}</p>
            <p>You get execution steps, risk checks, and acceptance targets.</p>
            <Link href="/contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>

        <section className="post-body related-block">
          <h2>Start with these 3 steps</h2>
          <ol className="step-list">
            {quickStart.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="post-body related-block">
          <h2>Guides in This Topic</h2>
          <div className="topic-guide-grid">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/en/guides/${post.slug}`} className="guide-card card-link">
                <span className="tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="meta">
                  <span>{post.updatedAt}</span>
                  <span>{post.readingMinutes} min</span>
                </div>
                <span className="text-link">Open guide</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="post-body related-block">
          <h2>FAQ</h2>
          <ul className="bullet-list">
            {topic.faqs.map((faq) => (
              <li key={faq.question}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
