import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw 实操手册 | 命令、部署、云厂商价格对比",
  description:
    "基于官方文档与实战流程整理 OpenClaw 可执行手册：安装命令、升级回滚、Docker 部署、飞书接入、安全基线与云服务价格对比。",
  keywords: [
    "OpenClaw 教程",
    "OpenClaw 安装命令",
    "OpenClaw Docker 部署",
    "OpenClaw 飞书接入",
    "OpenClaw 云服务器价格",
  ],
  alternates: {
    canonical: "/playbooks",
    languages: {
      "zh-CN": "/playbooks",
    },
  },
  openGraph: {
    type: "article",
    locale: "zh_CN",
    url: "https://openclaw.cc/playbooks",
    siteName: "OpenClaw 中文站",
    title: "OpenClaw 实操手册 | 命令、部署、云厂商价格对比",
    description:
      "一页拿到 OpenClaw 从安装到上线的关键命令、常见坑和价格决策。",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw 实操手册",
    description: "安装、部署、飞书接入、安全基线与云厂商价格对比。",
  },
};

const cloudRows = [
  {
    provider: "阿里云 ECS",
    plan: "2 vCPU / 2 GB（共享型）",
    monthly: "约 ¥95 - ¥140",
    yearly: "约 ¥760 - ¥1,200",
    note: "国内节点、中文控制台完善，适合大陆业务。",
    link: "https://www.aliyun.com/product/ecs",
  },
  {
    provider: "腾讯云 CVM",
    plan: "2 vCPU / 2 GB（标准型）",
    monthly: "约 ¥88 - ¥130",
    yearly: "约 ¥700 - ¥1,050",
    note: "微信生态配套强，飞书/企微接入运维便利。",
    link: "https://cloud.tencent.com/product/cvm",
  },
  {
    provider: "华为云 ECS",
    plan: "2 vCPU / 2 GB（通用计算）",
    monthly: "约 ¥90 - ¥135",
    yearly: "约 ¥720 - ¥1,080",
    note: "企业政务场景覆盖广，合规能力较强。",
    link: "https://www.huaweicloud.com/product/ecs.html",
  },
  {
    provider: "AWS EC2",
    plan: "t3.small（2 vCPU / 2 GB）",
    monthly: "约 $16 - $22",
    yearly: "约 $190 - $260（不含流量）",
    note: "海外节点与生态完整，适合国际化业务。",
    link: "https://aws.amazon.com/ec2/pricing/",
  },
  {
    provider: "DigitalOcean Droplet",
    plan: "Basic 2 GB / 1-2 vCPU",
    monthly: "约 $12 - $18",
    yearly: "约 $144 - $216",
    note: "界面简单，上手快，适合小团队。",
    link: "https://www.digitalocean.com/pricing/droplets",
  },
];

const faqItems = [
  {
    question: "OpenClaw 最低需要什么机器配置？",
    answer:
      "用于验证流程的最小配置建议为 2 vCPU 和 2GB 内存。如果要稳定承载多渠道消息和模型调用，建议从 2 vCPU / 4GB 起步。",
  },
  {
    question: "升级 OpenClaw 为什么必须先做回滚？",
    answer:
      "生产环境问题常出在依赖版本、环境变量与渠道配置联动，先准备上一个版本镜像和配置快照，能把故障恢复时间从小时级降到分钟级。",
  },
  {
    question: "网站里为什么直接给命令而不是只给概念？",
    answer:
      "目标是让你当场可执行。每一步都有命令、验收项和常见失败点，避免“看懂了但做不出来”。",
  },
];

export default function PlaybooksPage() {
  const techArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "OpenClaw 实操手册：安装、部署、接入与成本",
    description:
      "OpenClaw 可执行手册，包含安装命令、Docker 部署、飞书接入、安全基线和云厂商价格对比。",
    inLanguage: "zh-CN",
    dateModified: "2026-03-11",
    keywords: "OpenClaw, 安装, 部署, 飞书, 云服务器, 成本",
    url: "https://openclaw.cc/playbooks",
    author: { "@type": "Organization", name: "OpenClaw 中文站" },
    publisher: { "@type": "Organization", name: "OpenClaw 中文站" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: "https://openclaw.cc/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "实操手册",
        item: "https://openclaw.cc/playbooks",
      },
    ],
  };

  return (
    <main className="page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="card post-card playbook-page">
        <Link href="/" className="text-link back-link">
          返回首页
        </Link>
        <span className="tag">实操手册</span>
        <h1>OpenClaw 实操手册（可直接执行）</h1>
        <p className="lead">
          你可以把这一页当作上线清单：先安装与验收，再做部署与回滚，最后做渠道接入和成本控制。
        </p>

        <section className="summary-grid">
          <div className="summary-item">
            <h3>适合人群</h3>
            <p>要把 OpenClaw 从“能跑”做成“稳定可用”的团队</p>
          </div>
          <div className="summary-item">
            <h3>预估时长</h3>
            <p>新环境 2-4 小时；迁移环境 1-2 小时</p>
          </div>
          <div className="summary-item">
            <h3>最终结果</h3>
            <p>得到可验收、可回滚、可控成本的生产流程</p>
          </div>
        </section>

        <section className="post-body">
          <h2>1) 安装与首次启动</h2>
          <p>官方 CLI 安装与初始化命令：</p>
          <pre className="cmd-block">
            <code>{`npm install -g openclaw@latest
openclaw --version
openclaw onboard --install-daemon
openclaw doctor`}</code>
          </pre>
          <ul className="bullet-list">
            <li>验收标准：`openclaw doctor` 全绿，服务端口可监听。</li>
            <li>常见失败：Node 版本不兼容，建议使用 LTS（18 或 20）。</li>
            <li>日志检查：优先看第一条 error，再看链路上的 warning。</li>
          </ul>
        </section>

        <section className="post-body">
          <h2>2) 升级与回滚</h2>
          <p>生产环境升级不要直接覆盖，先留回滚版本：</p>
          <pre className="cmd-block">
            <code>{`# 备份当前版本信息
openclaw --version > ./backup/openclaw.version.txt

# 拉取新版本
npm install -g openclaw@latest
openclaw doctor

# 回滚示例（按你原版本号替换）
npm install -g openclaw@<old_version>`}</code>
          </pre>
          <ul className="bullet-list">
            <li>升级窗口建议放在低峰时段，并设置 30 分钟观察期。</li>
            <li>不要同一窗口同时改模型、渠道和网关策略。</li>
          </ul>
        </section>

        <section className="post-body">
          <h2>3) Docker 快速部署（推荐团队环境）</h2>
          <pre className="cmd-block">
            <code>{`docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -p 18789:18789 \
  --restart unless-stopped \
  -v $PWD/data:/app/data \
  -v $PWD/logs:/app/logs \
  openclaw/openclaw:latest`}</code>
          </pre>
          <ul className="bullet-list">
            <li>`3000` 常用于 Web 面板，`18789` 常用于网关/API 通道。</li>
            <li>验收标准：容器启动后 60 秒内健康检查通过，可收发测试消息。</li>
            <li>生产建议：把 `data` 和 `logs` 挂载到持久化磁盘。</li>
          </ul>
        </section>

        <section className="post-body">
          <h2>4) 飞书接入步骤（示例）</h2>
          <ol className="step-list">
            <li>在飞书开发者后台创建应用，拿到 App ID 和 App Secret。</li>
            <li>配置事件订阅 URL，使用 OpenClaw 网关回调地址。</li>
            <li>在 OpenClaw 渠道配置中填入凭证，并设置触发策略（如仅 @ 提及触发）。</li>
            <li>在测试群验证：文本、图片、指令三类消息都能正确路由。</li>
          </ol>
          <p>
            官方入口：<a href="https://open.feishu.cn/" target="_blank" rel="noreferrer" className="text-link">飞书开放平台</a>
          </p>
        </section>

        <section className="post-body">
          <h2>5) 安全基线（必须前置）</h2>
          <ul className="bullet-list">
            <li>最小权限原则：渠道 token 分环境隔离（开发/预发/生产）。</li>
            <li>禁止明文凭证：统一放入密钥管理服务或 CI 密文变量。</li>
            <li>高风险技能默认关闭，按白名单逐步放开。</li>
            <li>审计日志保留至少 30 天，关键操作必须可追溯到人。</li>
          </ul>
        </section>

        <section className="post-body">
          <h2>6) 云服务商选择与价格对比（2026-03-11）</h2>
          <p>以下是入门常见机型区间价，最终以各平台活动与地域结算页为准：</p>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>云厂商</th>
                  <th>参考规格</th>
                  <th>月成本</th>
                  <th>年成本</th>
                  <th>适用判断</th>
                </tr>
              </thead>
              <tbody>
                {cloudRows.map((row) => (
                  <tr key={row.provider}>
                    <td>
                      <a href={row.link} target="_blank" rel="noreferrer" className="text-link">
                        {row.provider}
                      </a>
                    </td>
                    <td>{row.plan}</td>
                    <td>{row.monthly}</td>
                    <td>{row.yearly}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="bullet-list">
            <li>追求性价比：优先腾讯云/阿里云入门机型，先按量验证后再包年。</li>
            <li>做海外业务：AWS 或 DigitalOcean 在跨区网络与生态上更稳。</li>
            <li>预算控制：先定单实例上限，再开自动告警和降级策略。</li>
          </ul>
        </section>

        <section className="post-body">
          <h2>常见问题</h2>
          <ul className="bullet-list">
            {faqItems.map((item) => (
              <li key={item.question}>
                <strong>{item.question}</strong>：{item.answer}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
