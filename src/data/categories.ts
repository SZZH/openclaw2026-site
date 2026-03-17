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
    title: "OpenClaw 安装教程专题（免费安装 + Docker）",
    description: "覆盖 OpenClaw 免费安装、Docker 安装和首次验收命令，按步骤执行即可跑通。",
    lead: "适合第一次接触 OpenClaw，目标是 30 分钟内完成安装并通过 doctor/status 验收。",
    keywords: ["openclaw 免费安装", "openclaw 安装教程", "openclaw docker 安装"],
    keywordVariants: ["openclaw 安装命令", "openclaw 免费安装教程 2026", "openclaw 新手安装步骤"],
    faqs: [
      {
        question: "OpenClaw 免费安装的最小命令是什么？",
        answer:
          "先执行 `npm i -g @openclaw/cli`，再跑 `openclaw doctor` 与 `openclaw status`。这三步能确认 CLI、环境和服务状态是否正常。",
      },
      {
        question: "首次安装失败最常见原因是什么？",
        answer:
          "优先检查 Node 版本、端口占用和权限问题；若仍失败，先看 `openclaw doctor` 的第一条关键报错再处理。",
      },
    ],
  },
  {
    slug: "skills",
    category: "技能",
    title: "OpenClaw Skills 安装专题（怎么装 / 装哪些）",
    description: "覆盖 ClawHub 安装、本地 skills 目录与优先级冲突处理，避免装完不能用。",
    lead: "适合准备扩展能力的团队，目标是让 skill 可控安装、可回滚、可审计。",
    keywords: ["openclaw skill 安装", "openclaw clawhub", "openclaw skills 目录"],
    keywordVariants: ["openclaw 怎么装 skill", "openclaw 装哪些 skill", "openclaw skills 优先级"],
    faqs: [
      {
        question: "OpenClaw skill 怎么安装最快？",
        answer:
          "先用 `openclaw skills list` 确认可用项，再按 ClawHub 或本地目录安装。安装后用 `openclaw skills list --verbose` 验证版本和路径。",
      },
      {
        question: "同名 skill 冲突时该怎么处理？",
        answer:
          "按优先级检查：`./skills` > `~/.openclaw/skills` > 内置技能。保留一份目标版本，删除重复项后重启再测。",
      },
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
    title: "OpenClaw 渠道接入专题（飞书 / 钉钉 / Telegram）",
    description: "提供“消息不回复”四步排查树：鉴权 -> 触发规则 -> 会话权限 -> 日志定位。",
    lead: "适合接入飞书、钉钉、Telegram 后不稳定或已读不回的场景。",
    keywords: ["openclaw 飞书接入", "openclaw 钉钉接入", "openclaw 渠道不回复"],
    keywordVariants: ["openclaw telegram 接入", "openclaw 飞书机器人", "openclaw 钉钉机器人接入"],
    faqs: [
      {
        question: "接入成功但不回复怎么排查？",
        answer:
          "按顺序排查：1) 鉴权签名和回调地址；2) 触发规则（是否 @ 或命中关键词）；3) 会话权限（DM 配对/allowFrom）；4) 查看 `openclaw logs --tail 200` 定位失败点。",
      },
      {
        question: "群聊为什么建议 requireMention？",
        answer: "可以减少误触发和无效消耗，先稳定核心链路，再逐步放开触发策略。",
      },
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
    title: "OpenClaw 成本控制专题（预算 + 降级 + 告警）",
    description: "讲清楚日/月预算、超限告警和主备模型降级策略，避免账单失控。",
    lead: "适合长期运行 Agent，目标是稳定效果前提下把 token 成本锁在预算区间。",
    keywords: ["openclaw 成本控制", "openclaw token 预算", "openclaw 账单优化"],
    keywordVariants: ["openclaw API 账单优化", "openclaw 模型降级策略", "openclaw 成本告警"],
    faqs: [
      {
        question: "预算阈值怎么设置更稳妥？",
        answer: "建议同时设置日预算和月预算，并在 70%/90% 两个阈值触发告警，预留处理窗口。",
      },
      {
        question: "为什么要准备降级模型？",
        answer: "在成本峰值或主模型不可用时，降级模型可保住核心流程，避免服务直接中断。",
      },
    ],
  },
  {
    slug: "troubleshooting",
    category: "报错",
    title: "OpenClaw 报错排查专题（先恢复，再定位）",
    description: "标准化故障处理路径：先恢复服务，再定位根因，最后沉淀复盘与防复发动作。",
    lead: "适合线上故障处理，目标是缩短恢复时间并减少重复事故。",
    keywords: ["openclaw 报错排查", "openclaw 启动失败", "openclaw 故障修复"],
    keywordVariants: ["openclaw 常见报错", "openclaw 无法启动", "openclaw 日志定位"],
    faqs: [
      {
        question: "排错时第一步看什么？",
        answer: "先执行端口与健康检查命令，确认能否快速恢复；再看第一条关键错误日志定位根因。",
      },
      {
        question: "为什么要固定排错顺序？",
        answer: "固定顺序可减少混改带来的干扰，通常能更快恢复并留下可复现记录。",
      },
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
