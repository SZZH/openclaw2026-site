import Link from "next/link";
import { topicCategories } from "@/data/categories";
import { posts } from "@/data/posts";

const keyProblems = [
  "服务能启动，但消息发不出去",
  "线上偶发报错，日志看不出根因",
  "Token 消耗过快，预算很快超限",
];

const serviceSteps = [
  "先打开实操手册，复制命令跑最小闭环",
  "按专题清单逐步扩展到你的真实场景",
  "每一步都做验收，失败就回到上一个稳定点",
  "把可复用流程沉淀到团队运维手册",
];

const quickValidationCommands = [
  "npm i -g @openclaw/cli",
  "openclaw doctor",
  "openclaw status",
];

export default function Home() {
  const totalGuides = posts.length;
  const totalTopics = topicCategories.length;
  const latestGuides = [...posts]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 8);

  return (
    <main className="site-main">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand-mark logo-link">
            <img src="/logo.png" alt="OpenClaw Logo" className="logo-img" />
          </Link>
          <nav className="topnav">
            <Link href="/playbooks">实操手册</Link>
            <a href="#topics">专题</a>
            <a href="#latest">教程</a>
            <a href="#workflow">流程</a>
            <Link href="/en">EN</Link>
          </nav>
        </div>
      </header>

      <section className="hero-v2">
        <div className="hero-copy">
          <p className="eyebrow">OpenClaw 免费安装与部署实战站</p>
          <h1>OpenClaw 免费安装教程：先跑通第一条链路</h1>
          <p className="lead">
            从安装命令到上线验收，全部按步骤写清楚。你可以直接复制命令执行，5 分钟完成首次自检。
          </p>
          <div className="cta-row">
            <Link
              className="btn btn-primary"
              href="/playbooks"
              data-track-event="conversion"
              data-track-action="home_cta"
              data-track-label="playbooks"
            >
              先看实操手册
            </Link>
            <a className="btn btn-secondary" href="#topics">
              再按专题处理
            </a>
          </div>
          <div className="stats-row">
            <div>
              <strong>{totalTopics}</strong>
              <span>个专题页</span>
            </div>
            <div>
              <strong>{totalGuides}</strong>
              <span>篇实战教程</span>
            </div>
            <div>
              <strong>SSG</strong>
              <span>静态 SEO 架构</span>
            </div>
          </div>
        </div>
        <aside className="hero-panel">
          <h2>你现在最可能卡在这里</h2>
          <ul>
            {keyProblems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>从专题页进入，会比直接翻全站更快定位答案。</p>
        </aside>
      </section>

      <section className="section-wrap">
        <div className="section-head">
          <h2>5 分钟快速验证（安装后先做这个）</h2>
          <p>按顺序执行：安装 CLI → 环境自检 → 服务状态检查。</p>
        </div>
        <pre className="cmd-block">
          <code>{quickValidationCommands.join("\n")}</code>
        </pre>
      </section>

      <section className="section-wrap route-wrap">
        <div className="section-head">
          <h2>按你的当前阶段直接进入</h2>
          <p>先解决眼前问题，再看进阶内容。</p>
        </div>
        <div className="route-grid">
          <Link href="/playbooks" className="route-card route-install">
            <h3>命令速用入口</h3>
            <p>安装、升级、回滚、Docker、云厂商对比，一页直达。</p>
          </Link>
          <Link href="/topics/installation" className="route-card route-install">
            <h3>新手安装路径</h3>
            <p>30 分钟内完成安装并跑通第一条消息链路。</p>
          </Link>
          <Link href="/topics/deployment" className="route-card route-deploy">
            <h3>线上部署路径</h3>
            <p>把本地可用版本上线，并保留回滚和监控。</p>
          </Link>
          <Link href="/topics/troubleshooting" className="route-card route-fix">
            <h3>报错排障路径</h3>
            <p>先恢复服务，再定位根因，最后固化处理步骤。</p>
          </Link>
        </div>
      </section>

      <section id="topics" className="section-wrap">
        <div className="section-head">
          <h2>按问题进入专题</h2>
          <p>每个专题只解决一类问题。</p>
        </div>
        <div className="topic-grid">
          {topicCategories.map((topic) => (
            <Link key={topic.slug} href={`/topics/${topic.slug}`} className="topic-card card-link">
              <span className="tag">{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <div className="meta-line">关键词：{topic.keywords.slice(0, 2).join(" / ")}</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="latest" className="section-wrap alt-bg">
        <div className="section-head">
          <h2>最新教程</h2>
          <p>先看最近更新的实战文章。</p>
        </div>
        <div className="guide-grid">
          {latestGuides.map((post) => (
            <Link key={post.slug} href={`/guides/${post.slug}`} className="guide-card card-link">
              <span className="tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="meta">
                <span>{post.updatedAt}</span>
                <span>{post.readingMinutes} 分钟</span>
              </div>
              <span className="text-link">阅读全文</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="workflow" className="section-wrap">
        <div className="section-head">
          <h2>从问题到上线的流程</h2>
          <p>照顺序做，避免返工。</p>
        </div>
        <ol className="workflow-list">
          {serviceSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section id="contact" className="section-wrap cta-block">
        <h2>先自助执行，再决定是否需要外部支持</h2>
        <p>
          全站内容按“命令、步骤、失败案例、验收”组织。你可以先照做拿结果，再补细化方案。
        </p>
        <div className="cta-row">
            <Link
              className="btn btn-secondary"
              href="/playbooks"
              data-track-event="conversion"
              data-track-action="home_bottom_cta"
              data-track-label="playbooks"
            >
              打开实操手册
            </Link>
            <Link
              className="btn btn-secondary"
              href="/topics/troubleshooting"
              data-track-event="conversion"
              data-track-action="home_bottom_cta"
              data-track-label="troubleshooting"
            >
              进入排障专题
            </Link>
        </div>
      </section>
    </main>
  );
}
