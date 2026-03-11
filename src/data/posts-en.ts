import { posts } from "@/data/posts";

export type EnGuidePost = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  category: string;
  updatedAt: string;
  readingMinutes: number;
  keywords: string[];
  content: string[];
};

const categoryMap: Record<string, string> = {
  安装: "Installation",
  部署: "Deployment",
  报错: "Troubleshooting",
  实战: "Case Study",
  架构: "Architecture",
  安全: "Security",
  成本: "Cost",
  模型: "Models",
  渠道: "Channels",
  记忆: "Memory",
  会话: "Session",
  运维: "Operations",
};

const categorySteps: Record<string, string[]> = {
  Installation: [
    "Check runtime baseline first: Node.js LTS, shell permissions, and available ports.",
    "Install and bootstrap with `npm install -g openclaw@latest` and `openclaw onboard --install-daemon`.",
    "Verify with `openclaw doctor` and confirm ports 3000 and 18789 are reachable.",
    "Run one minimal end-to-end message test before adding channels or skills.",
  ],
  Deployment: [
    "Prepare rollback first: keep previous image tag and last known-good config snapshot.",
    "Deploy with stable tags and one-variable changes per release window.",
    "Run post-release checks: service health, callback loop, and a real task execution.",
    "If checks fail, rollback immediately and capture logs before re-attempting.",
  ],
  Troubleshooting: [
    "Read the first critical error line before looking at downstream stack traces.",
    "Validate runtime, lockfile, and port ownership with explicit commands.",
    "Change one variable per attempt to isolate root cause quickly.",
    "Retest with a minimal reproducible scenario after every fix.",
  ],
  Security: [
    "Treat prompts and third-party skills as untrusted by default.",
    "Use least privilege for tokens and separate credentials by environment.",
    "Restrict high-risk tools (shell, file write, browser automation) and keep audit logs.",
    "Re-run hardening checks on each release and keep evidence for review.",
  ],
  Cost: [
    "Set both daily and monthly budget thresholds before increasing traffic.",
    "Wire alerts to on-call channels so overspend is visible in minutes.",
    "Switch to fallback models automatically when thresholds are exceeded.",
    "Review token spikes weekly and optimize highest-cost task flows first.",
  ],
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export const enPosts: EnGuidePost[] = posts.map((post) => {
  const enCategory = categoryMap[post.category] ?? "Guides";
  const genericSteps = categorySteps[enCategory] ?? [
    "Define the execution scope and expected output.",
    "Implement with controlled changes and clear boundaries.",
    "Validate with reproducible checks and logs.",
    "Document follow-up actions and rollback options.",
  ];

  return {
    slug: post.slug,
    title: `OpenClaw ${titleFromSlug(post.slug)}`,
    description: `Practical OpenClaw ${enCategory.toLowerCase()} guide with commands, checks, and rollback-safe steps.`,
    intent: `openclaw ${enCategory.toLowerCase()}`,
    category: enCategory,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    keywords: [
      "openclaw",
      `openclaw ${enCategory.toLowerCase()}`,
      `openclaw ${post.slug.replaceAll("-", " ")}`,
    ],
    content: genericSteps,
  };
});

export function getEnPostBySlug(slug: string) {
  return enPosts.find((post) => post.slug === slug);
}
