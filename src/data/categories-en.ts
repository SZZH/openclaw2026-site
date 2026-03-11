export type EnTopicCategory = {
  slug: string;
  category: string;
  title: string;
  description: string;
  lead: string;
  keywords: string[];
  keywordVariants: string[];
  faqs: { question: string; answer: string }[];
};

export const enTopicCategories: EnTopicCategory[] = [
  {
    slug: "installation",
    category: "Installation",
    title: "OpenClaw Installation Hub",
    description: "Installation workflows from prerequisites to first successful run.",
    lead: "Built for first-time users who need a reliable setup path with fewer trial-and-error loops.",
    keywords: ["openclaw installation", "openclaw setup", "openclaw onboarding"],
    keywordVariants: ["openclaw install guide", "openclaw setup tutorial", "openclaw first run"],
    faqs: [
      { question: "What should I check before installation?", answer: "Validate runtime versions, permissions, and port availability." },
      { question: "What usually breaks first run?", answer: "Most failures come from version drift, missing env vars, or occupied ports." },
    ],
  },
  {
    slug: "deployment",
    category: "Deployment",
    title: "OpenClaw Deployment Hub",
    description: "Deployment guides for Docker and cloud environments with rollback safety.",
    lead: "Designed for teams shipping production workloads with predictable operations.",
    keywords: ["openclaw deployment", "openclaw docker deployment", "openclaw cloud deploy"],
    keywordVariants: ["openclaw production deploy", "openclaw release checklist", "openclaw rollback"],
    faqs: [
      { question: "Why is rollback planning mandatory?", answer: "It reduces outage time when upgrades introduce regressions." },
      { question: "What to verify after deployment?", answer: "Check health endpoints, callback loops, logs, and task execution." },
    ],
  },
  {
    slug: "channels",
    category: "Channels",
    title: "OpenClaw Channel Integration Hub",
    description: "Channel setup patterns for Feishu, DingTalk, and enterprise messaging platforms.",
    lead: "Focused on stable inbound and outbound message loops across business channels.",
    keywords: ["openclaw channels", "openclaw feishu", "openclaw dingtalk"],
    keywordVariants: ["openclaw channel setup", "openclaw bot integration", "openclaw callback validation"],
    faqs: [
      { question: "Messages arrive but no reply. What next?", answer: "Check auth pairing, trigger rules, and bot permissions first." },
      { question: "Why mention-only mode in groups?", answer: "It prevents accidental triggers and limits unnecessary token usage." },
    ],
  },
  {
    slug: "security",
    category: "Security",
    title: "OpenClaw Security Hub",
    description: "Security hardening playbooks for skills, prompts, credentials, and execution boundaries.",
    lead: "A production-focused security baseline to reduce exploit impact and operational risk.",
    keywords: ["openclaw security", "openclaw hardening", "openclaw skills security"],
    keywordVariants: ["openclaw prompt injection", "openclaw access control", "openclaw security checklist"],
    faqs: [
      { question: "Can I fully eliminate prompt injection risk?", answer: "No. The practical strategy is blast-radius reduction and auditing." },
      { question: "What is the first hardening step?", answer: "Apply least privilege and isolate sensitive credentials immediately." },
    ],
  },
  {
    slug: "cost",
    category: "Cost",
    title: "OpenClaw Cost Control Hub",
    description: "Budget thresholds, model fallback, and alerting strategy for cost-safe operation.",
    lead: "Built for teams running agents continuously and needing predictable API spending.",
    keywords: ["openclaw cost", "openclaw token budget", "openclaw billing"],
    keywordVariants: ["openclaw budget control", "openclaw token optimization", "openclaw cost alerts"],
    faqs: [
      { question: "How should I set budget limits?", answer: "Use both daily and monthly limits with automatic alerts." },
      { question: "Why configure fallback models?", answer: "Fallbacks preserve service continuity during spikes and outages." },
    ],
  },
  {
    slug: "troubleshooting",
    category: "Troubleshooting",
    title: "OpenClaw Troubleshooting Hub",
    description: "Faster root-cause workflows for startup failures and runtime errors.",
    lead: "Optimized for incident response speed and repeatable diagnostics.",
    keywords: ["openclaw troubleshooting", "openclaw startup error", "openclaw debug"],
    keywordVariants: ["openclaw common errors", "openclaw not starting", "openclaw incident playbook"],
    faqs: [
      { question: "What should I inspect first in errors?", answer: "Use the earliest critical error log line as your anchor." },
      { question: "Why follow a fixed troubleshooting order?", answer: "It avoids random retries and shortens recovery time." },
    ],
  },
  {
    slug: "architecture",
    category: "Architecture",
    title: "OpenClaw Architecture Hub",
    description: "Gateway-Node-Channel architecture patterns for scalable operations.",
    lead: "For teams making architecture decisions and planning extensibility.",
    keywords: ["openclaw architecture", "gateway node channel", "openclaw websocket"],
    keywordVariants: ["openclaw architecture overview", "openclaw gateway design", "openclaw system layers"],
    faqs: [
      { question: "Why does architecture matter for debugging?", answer: "It quickly isolates control-plane, execution, and channel-layer issues." },
      { question: "What is the value of layer decoupling?", answer: "It lowers change impact and makes channel expansion more manageable." },
    ],
  },
  {
    slug: "models",
    category: "Models",
    title: "OpenClaw Model Configuration Hub",
    description: "Provider selection, fallback strategy, and local model integration.",
    lead: "For balancing quality, latency, and long-term API cost.",
    keywords: ["openclaw models", "openclaw providers", "openclaw local model"],
    keywordVariants: ["openclaw model routing", "openclaw model fallback", "openclaw provider strategy"],
    faqs: [
      { question: "What is the common model selection mistake?", answer: "Optimizing only for output quality while ignoring stability and budget." },
      { question: "When should I use local models?", answer: "Use them for privacy-sensitive and cost-predictable workloads." },
    ],
  },
  {
    slug: "memory",
    category: "Memory",
    title: "OpenClaw Memory System Hub",
    description: "Practical usage of SOUL, USER, MEMORY, and session context.",
    lead: "For long-running agents that need continuity and traceable context.",
    keywords: ["openclaw memory", "openclaw MEMORY.md", "openclaw context"],
    keywordVariants: ["openclaw long-term memory", "openclaw memory retrieval", "openclaw session memory"],
    faqs: [
      { question: "Why separate long-term memory and session memory?", answer: "It preserves durable facts while reducing contextual noise." },
      { question: "How to keep memory quality stable?", answer: "Use structured writes and periodic cleanup with auditability." },
    ],
  },
  {
    slug: "session-auth",
    category: "Session",
    title: "OpenClaw Session & Auth Hub",
    description: "DM pairing, allow lists, and isolation policies for safer collaboration.",
    lead: "For controlling identity boundaries and preventing unauthorized usage.",
    keywords: ["openclaw dm pairing", "openclaw allowfrom", "openclaw session isolation"],
    keywordVariants: ["openclaw auth flow", "openclaw whitelist setup", "openclaw group isolation"],
    faqs: [
      { question: "Why keep DM pairing enabled?", answer: "It protects your API budget and blocks anonymous abuse." },
      { question: "Why isolate group sessions?", answer: "It prevents private context leakage into public channels." },
    ],
  },
  {
    slug: "operations",
    category: "Operations",
    title: "OpenClaw Operations Hub",
    description: "Upgrade, rollback, remote access, and day-2 operational routines.",
    lead: "For teams running OpenClaw continuously with reliability requirements.",
    keywords: ["openclaw operations", "openclaw upgrade", "openclaw rollback"],
    keywordVariants: ["openclaw runbook", "openclaw maintenance", "openclaw remote ops"],
    faqs: [
      { question: "Why must every upgrade include backup?", answer: "Backup is the foundation of fast and safe rollback." },
      { question: "What does operations standardization improve?", answer: "It reduces human error and improves handoff consistency." },
    ],
  },
  {
    slug: "case-studies",
    category: "Case Study",
    title: "OpenClaw Case Study Hub",
    description: "Delivery patterns from project kickoff to post-launch retrospective.",
    lead: "For service teams turning troubleshooting experience into reusable playbooks.",
    keywords: ["openclaw case study", "openclaw delivery", "openclaw implementation"],
    keywordVariants: ["openclaw project examples", "openclaw delivery workflow", "openclaw launch review"],
    faqs: [
      { question: "What should be reviewed after delivery?", answer: "Cycle time, failure classes, and reusable implementation blocks." },
      { question: "Why document reusable templates?", answer: "Templates shorten delivery time and improve repeatability." },
    ],
  },
];

export function getEnTopicBySlug(slug: string) {
  return enTopicCategories.find((item) => item.slug === slug);
}
