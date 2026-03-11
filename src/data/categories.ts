import type { GuideCategory } from "@/data/posts";

export type TopicCategory = {
  slug: string;
  category: GuideCategory;
  title: string;
  description: string;
  lead: string;
  keywords: string[];
  keywordVariants: string[];
  faqs: { question: string; answer: string }[];
};

export const topicCategories: TopicCategory[] = [
  {
    slug: "installation",
    category: "安装",
    title: "OpenClaw 安装专题",
    description: "告诉你安装前检查什么、安装后怎么验收。",
    lead: "适合第一次接触 OpenClaw，目标是快速跑通首条链路。",
    keywords: ["openclaw 安装", "openclaw 教程", "openclaw 初始化"],
    keywordVariants: ["openclaw 安装指南", "openclaw 安装教程 2026", "openclaw 新手安装步骤"],
    faqs: [
      { question: "安装 OpenClaw 前必须检查什么？", answer: "先确认 Node 版本、系统权限与端口占用，再开始安装。" },
      { question: "首次启动失败最常见原因是什么？", answer: "通常是端口冲突、依赖版本不一致或环境变量缺失。" },
    ],
  },
  {
    slug: "deployment",
    category: "部署",
    title: "OpenClaw 部署专题",
    description: "告诉你上线前准备、上线后检查、出问题怎么回滚。",
    lead: "适合要上生产环境的团队，目标是稳定上线。",
    keywords: ["openclaw 部署", "openclaw docker", "openclaw 云部署"],
    keywordVariants: ["openclaw docker 部署", "openclaw 线上部署", "openclaw 云服务器部署"],
    faqs: [
      { question: "部署前最关键的准备动作是什么？", answer: "准备可回滚版本和统一的上线检查清单。" },
      { question: "为什么部署后还要做验收？", answer: "验收能及时发现链路断点，避免线上长时间不可用。" },
    ],
  },
  {
    slug: "channels",
    category: "渠道",
    title: "OpenClaw 渠道接入专题",
    description: "告诉你渠道接入顺序和消息不回的排查路径。",
    lead: "适合接入飞书、钉钉、企微后回路不稳定的场景。",
    keywords: ["openclaw 飞书", "openclaw 钉钉", "openclaw 企业微信"],
    keywordVariants: ["openclaw 渠道接入", "openclaw 飞书机器人", "openclaw 钉钉机器人接入"],
    faqs: [
      { question: "接入成功但不回复怎么排查？", answer: "先检查鉴权和触发规则，再检查会话隔离与权限范围。" },
      { question: "群聊为什么建议 requireMention？", answer: "可以减少误触发，控制无关消息带来的成本消耗。" },
    ],
  },
  {
    slug: "security",
    category: "安全",
    title: "OpenClaw 安全专题",
    description: "告诉你上线前必须做的安全动作和权限边界。",
    lead: "适合生产环境，目标是降低高风险操作的影响面。",
    keywords: ["openclaw 安全", "openclaw skills 安全", "openclaw 加固"],
    keywordVariants: ["openclaw 安全加固", "openclaw skills 审计", "openclaw 权限隔离"],
    faqs: [
      { question: "安全治理应该先做哪一步？", answer: "先做最小权限和密钥隔离，再做技能审计与日志留存。" },
      { question: "能彻底避免 prompt injection 吗？", answer: "很难彻底避免，核心是限制影响半径和增强审计能力。" },
    ],
  },
  {
    slug: "cost",
    category: "成本",
    title: "OpenClaw 成本控制专题",
    description: "告诉你预算怎么设、超限怎么告警、成本怎么降。",
    lead: "适合长期运行 Agent，目标是把账单控制在预算内。",
    keywords: ["openclaw 成本", "openclaw token", "openclaw 预算"],
    keywordVariants: ["openclaw 成本控制", "openclaw token 预算", "openclaw API 账单优化"],
    faqs: [
      { question: "预算阈值怎么设置更稳妥？", answer: "建议同时设置日预算和月预算，并配置超阈值告警。" },
      { question: "为什么要准备降级模型？", answer: "在成本峰值或主模型异常时，降级模型能保证服务连续性。" },
    ],
  },
  {
    slug: "troubleshooting",
    category: "报错",
    title: "OpenClaw 报错排查专题",
    description: "告诉你报错先看哪里、按什么顺序排查。",
    lead: "适合线上故障处理，目标是先恢复再定位。",
    keywords: ["openclaw 报错", "openclaw 启动失败", "openclaw 排障"],
    keywordVariants: ["openclaw 常见报错", "openclaw 无法启动", "openclaw 故障排查"],
    faqs: [
      { question: "排错时第一步看什么？", answer: "优先看第一条关键错误日志，而不是最后一行报错。" },
      { question: "为什么要固定排错顺序？", answer: "固定顺序能减少无效尝试，显著缩短恢复时间。" },
    ],
  },
  {
    slug: "architecture",
    category: "架构",
    title: "OpenClaw 架构专题",
    description: "告诉你三层架构各自职责，以及问题如何分层定位。",
    lead: "适合做技术方案和排障分工时参考。",
    keywords: ["openclaw 架构", "gateway node channel", "openclaw websocket"],
    keywordVariants: ["openclaw 三层架构", "openclaw gateway node", "openclaw 架构原理"],
    faqs: [
      { question: "架构理解对运维有什么帮助？", answer: "能快速判断问题在控制面、执行面还是渠道层。" },
      { question: "为什么强调三层解耦？", answer: "解耦后新增渠道和扩展能力更可控，改动影响范围更小。" },
    ],
  },
  {
    slug: "models",
    category: "模型",
    title: "OpenClaw 模型配置专题",
    description: "告诉你不同任务该用什么模型，以及主备切换方式。",
    lead: "适合要平衡效果、速度和成本的团队。",
    keywords: ["openclaw 模型", "openclaw provider", "openclaw 本地模型"],
    keywordVariants: ["openclaw 模型配置", "openclaw 模型切换", "openclaw 本地模型接入"],
    faqs: [
      { question: "模型选择最常见误区是什么？", answer: "只看单次效果而忽略长期成本和可用性。" },
      { question: "本地模型适合什么场景？", answer: "适合隐私敏感和成本可预测场景，但需接受能力上限。" },
    ],
  },
  {
    slug: "memory",
    category: "记忆",
    title: "OpenClaw 记忆系统专题",
    description: "告诉你长期记忆与会话记忆怎么分，避免上下文混乱。",
    lead: "适合连续对话和长期任务场景。",
    keywords: ["openclaw memory", "openclaw MEMORY.md", "openclaw 会话记忆"],
    keywordVariants: ["openclaw 记忆系统", "openclaw MEMORY 使用", "openclaw 长期记忆"],
    faqs: [
      { question: "为什么要区分长期记忆和会话记忆？", answer: "这样能保证关键事实长期保留，同时避免上下文污染。" },
      { question: "记忆系统怎么避免越用越乱？", answer: "用结构化写入和定期清理策略，保持记忆可检索、可审计。" },
    ],
  },
  {
    slug: "session-auth",
    category: "会话",
    title: "OpenClaw 会话认证专题",
    description: "告诉你 DM 配对、白名单、群聊触发规则怎么配。",
    lead: "适合多人协作，目标是防滥用和防串上下文。",
    keywords: ["openclaw dm pairing", "openclaw allowFrom", "openclaw 会话隔离"],
    keywordVariants: ["openclaw dm 配对", "openclaw 白名单配置", "openclaw 群聊隔离"],
    faqs: [
      { question: "DM 配对有什么价值？", answer: "可以阻止陌生来源滥用你的 Agent 和 API 额度。" },
      { question: "会话隔离为什么重要？", answer: "能防止私聊上下文泄露到群聊等公共场景。" },
    ],
  },
  {
    slug: "operations",
    category: "运维",
    title: "OpenClaw 运维专题",
    description: "告诉你升级、回滚、远程运维的标准动作。",
    lead: "适合长期维护，目标是减少人为失误。",
    keywords: ["openclaw 运维", "openclaw 升级", "openclaw 回滚"],
    keywordVariants: ["openclaw 运维手册", "openclaw 升级回滚", "openclaw 远程运维"],
    faqs: [
      { question: "升级前为什么一定要备份？", answer: "备份是可回滚的前提，能显著降低变更风险。" },
      { question: "运维标准化能带来什么收益？", answer: "减少人为失误，提高交付一致性与交接效率。" },
    ],
  },
  {
    slug: "case-studies",
    category: "实战",
    title: "OpenClaw 实战案例专题",
    description: "告诉你从需求到交付的步骤和复盘要点。",
    lead: "适合做项目交付，目标是提高复用率和交付速度。",
    keywords: ["openclaw 实战", "openclaw 案例", "openclaw 交付"],
    keywordVariants: ["openclaw 实战案例", "openclaw 项目交付", "openclaw 上线复盘"],
    faqs: [
      { question: "实战复盘最该看什么？", answer: "优先看交付时长、故障类型与可复制流程。" },
      { question: "为什么要沉淀案例模板？", answer: "模板能复用成功经验，提高后续项目的交付效率。" },
    ],
  },
];

export function getTopicBySlug(slug: string) {
  return topicCategories.find((item) => item.slug === slug);
}
