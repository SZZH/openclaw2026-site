import Link from "next/link";
import { enTopicCategories } from "@/data/categories-en";
import { enPosts } from "@/data/posts-en";

const keyProblems = [
  "Service starts but messages do not return",
  "Production errors appear but logs are unclear",
  "Token usage spikes and exceeds budget quickly",
];

export default function EnHomePage() {
  const totalGuides = enPosts.length;
  const totalTopics = enTopicCategories.length;
  const postsByTopic = enTopicCategories.map((topic) => ({
    topic,
    items: enPosts.filter((post) => post.category === topic.category).slice(0, 4),
  }));

  return (
    <main className="site-main">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/en" className="brand-mark logo-link">
            <img src="/logo.png" alt="OpenClaw Logo" className="logo-img" />
          </Link>
          <nav className="topnav">
            <Link href="/playbooks">Playbook (ZH)</Link>
            <a href="#topics">Topics</a>
            <Link href="/contact">Contact</Link>
            <Link href="/">中文</Link>
          </nav>
        </div>
      </header>

      <section className="hero-v2">
        <div className="hero-copy">
          <p className="eyebrow">OpenClaw Practical Playbooks</p>
          <h1>Ship Fast, Stay Stable, Control Cost</h1>
          <p className="lead">
            Each guide gives exact steps, risk checks, and acceptance criteria.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#topics">
              Browse Topics
            </a>
            <Link className="btn btn-secondary" href="/contact">
              Contact
            </Link>
          </div>
          <div className="stats-row">
            <div>
              <strong>{totalTopics}</strong>
              <span>topic pages</span>
            </div>
            <div>
              <strong>{totalGuides}</strong>
              <span>practical guides</span>
            </div>
            <div>
              <strong>SSG</strong>
              <span>SEO-first pages</span>
            </div>
          </div>
        </div>
        <aside className="hero-panel">
          <h2>Most common blockers</h2>
          <ul>
            {keyProblems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>Start from one topic instead of reading everything.</p>
        </aside>
      </section>

      <section id="topics" className="section-wrap">
        <div className="section-head">
          <h2>Topic Landing Pages</h2>
          <p>Each topic solves one concrete problem type.</p>
        </div>
        <div className="topic-grid">
          {postsByTopic.map(({ topic, items }) => (
            <Link key={topic.slug} href={`/en/topics/${topic.slug}`} className="topic-card card-link">
              <span className="tag">{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <div className="meta">
                <span>{topic.keywords[0]}</span>
                <span>{items.length} guides</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap cta-block">
        <h2>Need direct help?</h2>
        <p className="lead">
          Send your environment details and logs. You will get an executable path.
        </p>
        <p className="wechat">WeChat: openclaw-helper</p>
      </section>
    </main>
  );
}
