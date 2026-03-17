import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "内容不存在 | OpenClaw 中文站",
    };
  }

  return {
    title: `${post.title} | OpenClaw 中文站`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      locale: "zh_CN",
      url: `https://openclaw2026.cc/guides/${post.slug}`,
      siteName: "OpenClaw 中文站",
      title: `${post.title} | OpenClaw 中文站`,
      description: post.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | OpenClaw 中文站`,
      description: post.description,
    },
    alternates: {
      canonical: `/guides/${post.slug}`,
      languages: {
        "zh-CN": `/guides/${post.slug}`,
        en: `/en/guides/${post.slug}`,
      },
    },
  };
}

export default async function GuidePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const risksByCategory: Partial<Record<(typeof post.category), string[]>> = {
    安全: [
      "不要在生产环境直接试验未审计技能。",
      "不要把高权限密钥明文放到公开仓库或群聊。",
    ],
    成本: [
      "不要先放量再监控，预算阈值必须前置。",
      "不要只看总账单，要看任务级别异常峰值。",
    ],
    部署: [
      "升级前不要跳过备份与回滚验证。",
      "不要同时修改镜像、配置和模型策略。",
    ],
    渠道: [
      "多人群聊默认开启 @ 提及触发，避免误触发。",
      "跨渠道复用凭证前先确认权限边界一致。",
    ],
  };

  const acceptanceByCategory: Partial<Record<(typeof post.category), string[]>> = {
    安装: ["服务可正常启动", "基础命令可执行", "首个测试任务可完成"],
    部署: ["线上可访问", "关键链路可调用", "日志无持续高危报错"],
    渠道: ["收消息正常", "回消息正常", "鉴权与会话隔离符合预期"],
    安全: ["关键权限最小化", "高风险操作有审计", "敏感配置可追溯"],
    成本: ["预算阈值生效", "降级策略生效", "异常告警链路可达"],
  };

  const defaultRisks = [
    "同一时间只改一类变量，避免问题互相覆盖。",
    "所有变更都保留可回滚路径与日志证据。",
  ];
  const defaultAcceptance = ["可复现", "可回滚", "可监控"];
  const failureCasesByCategory: Partial<Record<(typeof post.category), string[]>> = {
    安装: ["直接跳过环境检查，安装后启动失败。", "多版本 Node 共存未切换，依赖行为异常。"],
    部署: ["一次性改动过多变量，出问题后无法定位。", "上线前没做回滚演练，故障恢复时间过长。"],
    报错: ["只看最后一行报错，忽略第一条关键错误。", "没固定排查顺序，重复尝试导致耗时翻倍。"],
    成本: ["先放量后设预算，短时间触发高额账单。", "没有降级模型，峰值时段成本失控。"],
  };
  const riskList = risksByCategory[post.category] ?? defaultRisks;
  const acceptanceList = acceptanceByCategory[post.category] ?? defaultAcceptance;
  const failureCases = failureCasesByCategory[post.category] ?? [
    "变更后不做验收，问题延迟暴露。",
    "缺少回滚路径，导致故障持续时间拉长。",
  ];
  const audienceByCategory: Partial<Record<(typeof post.category), string>> = {
    安装: "第一次接触 OpenClaw，需要快速跑通",
    部署: "本地已可用，准备上线到生产环境",
    报错: "线上出现故障，需要快速恢复服务",
    渠道: "已接入渠道，但消息链路不稳定",
    安全: "准备在生产环境长期运行",
    成本: "需要控制 Token 与模型调用预算",
  };
  const outcomeByCategory: Partial<Record<(typeof post.category), string>> = {
    安装: "你会得到一个可正常收发消息的基础环境",
    部署: "你会得到一个可回滚、可监控的上线版本",
    报错: "你会得到一条可复用的排障路径",
    渠道: "你会得到稳定的消息收发回路",
    安全: "你会得到可执行的安全基线配置",
    成本: "你会得到可控预算和降级策略",
  };
  const audience = audienceByCategory[post.category] ?? "希望快速解决当前问题的 OpenClaw 用户";
  const expectedOutcome = outcomeByCategory[post.category] ?? "你会得到一套可执行、可复现的处理步骤";
  const commandMapByCategory: Partial<Record<(typeof post.category), string[]>> = {
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
      "openclaw logs --tail 200",
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
    运维: [
      "openclaw --version",
      "openclaw doctor",
      "npm install -g openclaw@<old_version>",
    ],
  };
  const sourceLinksByCategory: Partial<Record<(typeof post.category), { name: string; href: string }[]>> = {
    渠道: [{ name: "飞书开放平台", href: "https://open.feishu.cn/" }],
    部署: [
      { name: "阿里云 ECS", href: "https://www.aliyun.com/product/ecs" },
      { name: "腾讯云 CVM", href: "https://cloud.tencent.com/product/cvm" },
      { name: "华为云 ECS", href: "https://www.huaweicloud.com/product/ecs.html" },
    ],
    成本: [
      { name: "AWS EC2 Pricing", href: "https://aws.amazon.com/ec2/pricing/" },
      { name: "DigitalOcean Pricing", href: "https://www.digitalocean.com/pricing/droplets" },
    ],
  };
  const commandList = commandMapByCategory[post.category] ?? ["openclaw doctor"];
  const sourceLinks = sourceLinksByCategory[post.category] ?? [];
  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    dateModified: post.updatedAt,
    inLanguage: "zh-CN",
    keywords: post.keywords.join(", "),
    about: post.intent,
    url: `https://openclaw2026.cc/guides/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "OpenClaw 中文站",
    },
    publisher: {
      "@type": "Organization",
      name: "OpenClaw 中文站",
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://openclaw2026.cc/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "教程",
        item: "https://openclaw2026.cc/#guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://openclaw2026.cc/guides/${post.slug}`,
      },
    ],
  };

  return (
    <main className="page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="card post-card">
        <Link href="/" className="text-link back-link">
          返回首页
        </Link>
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
        <div className="meta">
          <span>更新日期：{post.updatedAt}</span>
          <span>关键词：{post.intent}</span>
        </div>
        <section className="summary-grid">
          <div className="summary-item">
            <h3>适用场景</h3>
            <p>{audience}</p>
          </div>
          <div className="summary-item">
            <h3>预计阅读</h3>
            <p>{post.readingMinutes} 分钟</p>
          </div>
          <div className="summary-item">
            <h3>完成结果</h3>
            <p>{expectedOutcome}</p>
          </div>
        </section>

        <section className="post-body">
          <h2>执行步骤</h2>
          <ol className="step-list">
          {post.content.map((paragraph) => (
              <li key={paragraph}>{paragraph}</li>
          ))}
          </ol>
        </section>

        <section className="post-body">
          <h2>关键命令</h2>
          <pre className="cmd-block">
            <code>{commandList.join("\n")}</code>
          </pre>
        </section>

        <section className="post-body">
          <h2>常见风险</h2>
          <ul className="bullet-list">
            {riskList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="post-body">
          <h2>高频失败案例</h2>
          <ul className="bullet-list">
            {failureCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="post-body">
          <h2>完成验收</h2>
          <ul className="bullet-list">
            {acceptanceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {sourceLinks.length > 0 ? (
          <section className="post-body">
            <h2>官方入口</h2>
            <ul className="bullet-list">
              {sourceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="text-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="card cta-inner">
          <h2>继续深入</h2>
          <p>先完成本页验收项，再看同分类文章，把流程串成完整闭环。</p>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="post-body related-block">
            <h2>同分类相关文章</h2>
            <ul className="bullet-list">
              {relatedPosts.map((item) => (
                <li key={item.slug}>
                  <Link href={`/guides/${item.slug}`} className="text-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </main>
  );
}
