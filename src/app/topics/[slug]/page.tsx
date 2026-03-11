import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug, topicCategories } from "@/data/categories";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteName = "OpenClaw 中文站";

export async function generateStaticParams() {
  return topicCategories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return { title: `专题不存在 | ${siteName}` };
  }

  return {
    title: `${topic.title} | ${siteName}`,
    description: topic.description,
    keywords: topic.keywords,
    openGraph: {
      type: "article",
      locale: "zh_CN",
      url: `https://openclaw.cc/topics/${topic.slug}`,
      siteName,
      title: `${topic.title} | ${siteName}`,
      description: topic.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.title} | ${siteName}`,
      description: topic.description,
    },
    alternates: {
      canonical: `/topics/${topic.slug}`,
      languages: {
        "zh-CN": `/topics/${topic.slug}`,
        en: `/en/topics/${topic.slug}`,
      },
    },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const relatedPosts = posts.filter((post) => post.category === topic.category);
  const quickStartByCategory: Partial<Record<(typeof topic.category), string[]>> = {
    安装: ["检查 Node 版本和端口占用", "按安装步骤执行并启动", "发送首条测试消息完成验收"],
    部署: ["准备环境变量与回滚版本", "按部署清单上线", "跑完健康检查和日志检查"],
    报错: ["先恢复关键服务", "按固定顺序定位根因", "记录复盘并补上防复发措施"],
    渠道: ["确认鉴权与回调地址", "验证收发消息链路", "开启群聊触发规则和白名单"],
    安全: ["收敛权限边界", "审计高风险技能", "上线前跑一遍安全清单"],
    成本: ["设置日/月预算阈值", "配置超限告警", "配置降级模型策略"],
  };
  const quickStart = quickStartByCategory[topic.category] ?? [
    "先明确当前问题场景",
    "按专题步骤执行",
    "用验收项确认结果",
  ];
  const commandsByCategory: Partial<Record<(typeof topic.category), string[]>> = {
    安装: [
      "npm install -g openclaw@latest",
      "openclaw onboard --install-daemon",
      "openclaw doctor",
    ],
    部署: [
      "docker compose up -d",
      "docker ps | grep openclaw",
      "curl http://127.0.0.1:3000",
    ],
    报错: [
      "lsof -i :18789",
      "lsof -i :3000",
      "openclaw doctor",
    ],
    渠道: [
      "openclaw channels list",
      "openclaw channels test <channel>",
      "openclaw logs --tail 200",
    ],
    安全: [
      "openclaw skills list",
      "openclaw skills audit",
      "openclaw config validate",
    ],
    成本: [
      "openclaw usage report --daily",
      "openclaw usage report --monthly",
      "openclaw config validate",
    ],
  };
  const acceptanceByCategory: Partial<Record<(typeof topic.category), string[]>> = {
    安装: ["`openclaw doctor` 无高危项", "首条测试消息可收可回", "关键端口可监听"],
    部署: ["容器持续健康", "Web UI 可访问", "升级后可回滚验证通过"],
    报错: ["30 分钟内恢复关键链路", "根因可定位到单一变量", "修复步骤可复现"],
    渠道: ["签名和鉴权均通过", "私聊/群聊触发符合预期", "会话隔离无串线"],
    安全: ["高危能力默认关闭", "密钥分环境隔离", "审计日志可追溯"],
    成本: ["日/月预算阈值生效", "超限告警可达", "降级模型自动切换有效"],
  };
  const commandList = commandsByCategory[topic.category] ?? ["openclaw doctor"];
  const acceptanceList = acceptanceByCategory[topic.category] ?? ["可执行", "可验收", "可回滚"];
  const topicUrl = `https://openclaw.cc/topics/${topic.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic.title,
    description: topic.description,
    url: topicUrl,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://openclaw.cc/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "专题",
        item: "https://openclaw.cc/#guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: topic.title,
        item: topicUrl,
      },
    ],
  };

  return (
    <main className="page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="card post-card topic-page">
        <div className="topic-hero">
          <div>
            <Link href="/" className="text-link back-link">
              返回首页
            </Link>
            <span className="tag">{topic.category}</span>
            <h1>{topic.title}</h1>
            <p className="lead">{topic.description}</p>
          </div>
          <div className="topic-hero-side">
            <h3>这个专题能帮你什么</h3>
            <p>{topic.lead}</p>
            <p>你将拿到：执行步骤、常见风险、验收清单和可复制命令。</p>
            <Link href="/playbooks" className="btn btn-primary">
              先看实操手册
            </Link>
          </div>
        </div>

        <section className="post-body related-block">
          <h2>先做这三步</h2>
          <ol className="step-list">
            {quickStart.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="post-body related-block">
          <h2>可直接复制的命令</h2>
          <pre className="cmd-block">
            <code>{commandList.join("\n")}</code>
          </pre>
        </section>

        <section className="post-body related-block">
          <h2>完成验收</h2>
          <ul className="bullet-list">
            {acceptanceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="post-body related-block">
          <h2>专题文章</h2>
          <div className="topic-guide-grid">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/guides/${post.slug}`} className="guide-card card-link">
                <span className="tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="meta">
                  <span>{post.updatedAt}</span>
                  <span>{post.readingMinutes} 分钟</span>
                </div>
                <span className="text-link">查看教程</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="post-body related-block">
          <h2>专题 FAQ</h2>
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
