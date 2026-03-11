export type GuideCategory =
  | "安装"
  | "部署"
  | "报错"
  | "实战"
  | "架构"
  | "安全"
  | "成本"
  | "模型"
  | "渠道"
  | "记忆"
  | "会话"
  | "运维";

export type GuidePost = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  category: GuideCategory;
  updatedAt: string;
  readingMinutes: number;
  keywords: string[];
  content: string[];
};

export const posts: GuidePost[] = [
  {
    slug: "openclaw-installation-2026",
    title: "OpenClaw 安装完整教程（2026）",
    description: "从环境检查到首次运行，按命令逐步安装 OpenClaw。",
    intent: "openclaw 安装",
    category: "安装",
    updatedAt: "2026-03-11",
    readingMinutes: 8,
    keywords: ["openclaw", "openclaw安装", "openclaw教程"],
    content: [
      "系统要求先过线：Node.js >= 22，macOS 需 Command Line Tools，Windows 建议 WSL2。",
      "推荐安装路径：`npm install -g openclaw@latest` 后执行 `openclaw onboard --install-daemon`。",
      "首次配置至少完成三项：模型 API Key、默认消息渠道、基础身份认证策略。",
      "若启动失败，先查端口冲突与权限：Gateway 默认 `18789`，Web UI 默认 `3000`。",
      "初始化完成后，发一条最小测试消息，确认“收消息 -> 执行 -> 回消息”闭环。",
      "最后再进入渠道接入和技能安装，避免把问题叠加到同一阶段。",
    ],
  },
  {
    slug: "openclaw-docker-deployment-checklist",
    title: "OpenClaw Docker 部署清单（含首次配置）",
    description: "基于橙皮书部署章节，整理成可直接照抄的上线流程。",
    intent: "openclaw docker 部署",
    category: "部署",
    updatedAt: "2026-03-11",
    readingMinutes: 10,
    keywords: ["openclaw docker", "openclaw compose", "openclaw部署清单"],
    content: [
      "先用官方 `docker-compose.yml` 启动，避免首版自定义编排导致排障复杂化。",
      "上线前固定四项检查：容器健康、`ws://127.0.0.1:18789` 连通、Web UI 可访问、渠道回消息正常。",
      "日志与配置必须落盘，确保升级失败时可回放与回滚。",
      "每次升级保留可回滚镜像标签，不要直接覆盖 `latest`。",
      "部署变更遵循单变量原则：一次只改镜像、配置或模型中的一项。",
      "发布后跑 smoke checklist：消息收发、技能调用、关键任务执行、告警通道。",
    ],
  },
  {
    slug: "openclaw-channel-integration-feishu-dingtalk",
    title: "OpenClaw 渠道接入实操：飞书/钉钉/企业微信",
    description: "把橙皮书的渠道接入模型改写成国内团队可执行步骤。",
    intent: "openclaw 飞书 钉钉 接入",
    category: "渠道",
    updatedAt: "2026-03-11",
    readingMinutes: 9,
    keywords: ["openclaw飞书", "openclaw钉钉", "openclaw企业微信"],
    content: [
      "渠道接入顺序固定：创建凭证 -> 配置回调 -> 验证签名 -> 回显测试。",
      "群聊默认使用 `requireMention`，只响应 @ 指令，先控成本再扩开放策略。",
      "未知私聊用户启用 DM 配对码流程，防止陌生来源直接消耗 API 额度。",
      "固定成员使用 `allowFrom` 预授权，减少重复配对成本。",
      "开发与生产渠道凭证分开管理，不共用同一机器人权限。",
      "验收用三条指令完成：收消息、回消息、执行一个只读任务。",
    ],
  },
  {
    slug: "openclaw-architecture-gateway-node-channel",
    title: "OpenClaw 架构速读：Gateway-Node-Channel 怎么落地",
    description: "理解三层架构后，部署和排障会快很多。",
    intent: "openclaw 架构",
    category: "架构",
    updatedAt: "2026-03-11",
    readingMinutes: 7,
    keywords: ["openclaw架构", "gateway node channel", "openclaw websocket"],
    content: [
      "OpenClaw 是三层结构：Gateway（控制面）/ Node（执行面）/ Channel（入口层）。",
      "默认是 loopback-first：Gateway 只监听 `127.0.0.1`，减少公网暴露面。",
      "排障时先分层定位：是渠道收不到、Gateway 路由失败，还是 Node 执行失败。",
      "同一主机建议只跑一个 Gateway，避免渠道会话抢占冲突。",
      "远程访问优先走零信任隧道，不建议直接暴露核心端口。",
      "按层拆问题后，新增渠道和新增技能都能复用同一套回归流程。",
    ],
  },
  {
    slug: "openclaw-model-provider-selection",
    title: "OpenClaw 模型配置指南：国际/国产/本地怎么选",
    description: "按任务类型与预算选择模型，不再靠感觉切换。",
    intent: "openclaw 模型 配置",
    category: "模型",
    updatedAt: "2026-03-11",
    readingMinutes: 8,
    keywords: ["openclaw模型", "openclaw provider", "openclaw本地模型"],
    content: [
      "先按任务分层：复杂推理用高能力模型，批量任务用高性价比模型。",
      "至少配置主模型 + 降级模型两组路由，防止单供应商故障。",
      "本地模型可用于隐私敏感任务，但要预留性能与能力冗余。",
      "模型切换后复跑同一组样本任务，记录成功率、时延、Token 成本。",
      "把模型配置集中在统一配置文件，避免分散写死导致排查困难。",
      "设置预算触发策略：超阈值后自动降级到低成本模型。",
    ],
  },
  {
    slug: "openclaw-skill-security-checklist",
    title: "OpenClaw Skills 安全清单：安装前先做这 6 步",
    description: "橙皮书里最容易被忽略的一章：技能安全与供应链风险。",
    intent: "openclaw skills 安全",
    category: "安全",
    updatedAt: "2026-03-11",
    readingMinutes: 8,
    keywords: ["openclaw skills", "openclaw安全", "openclaw供应链"],
    content: [
      "技能来源优先级固定：私有技能 > 团队审计技能 > 市场技能。",
      "安装前先看权限与命令范围，默认按“不信任”策略处理。",
      "高风险技能单独隔离运行并限制系统权限，避免越权执行。",
      "技能版本必须锁定并记录变更，异常时能快速回退到上一版。",
      "对 Shell、文件写入、浏览器自动化类技能开启审计日志。",
      "每次新增技能后跑一次最小回归，不要直接放生产流量。",
    ],
  },
  {
    slug: "openclaw-cost-control-budget-setup",
    title: "OpenClaw 成本控制实战：预算上限与告警怎么配",
    description: "避免一夜高额账单，先把预算和降级策略做起来。",
    intent: "openclaw 成本 控制",
    category: "成本",
    updatedAt: "2026-03-11",
    readingMinutes: 7,
    keywords: ["openclaw成本", "openclaw token", "openclaw预算"],
    content: [
      "先设预算再放量：至少配置日预算 + 月预算两个阈值。",
      "接入告警通道（飞书/钉钉/邮箱），超阈值实时提醒。",
      "预算超限时自动启用降级模型并收紧高消耗任务频率。",
      "按任务类型统计 Token 成本，找出异常峰值来源。",
      "每周复盘三项：成功率、平均 Token、峰值时段。",
      "把成本规则写成固定策略，不要靠人工临时处理。",
    ],
  },
  {
    slug: "openclaw-memory-system-practical-guide",
    title: "OpenClaw 记忆系统实操：SOUL/USER/MEMORY/Session",
    description: "把橙皮书里的四层记忆模型落到可执行配置与排障动作。",
    intent: "openclaw 记忆系统",
    category: "记忆",
    updatedAt: "2026-03-11",
    readingMinutes: 9,
    keywords: ["openclaw memory", "openclaw MEMORY.md", "openclaw session"],
    content: [
      "记忆分四层：SOUL（身份）/ TOOLS（能力）/ USER&MEMORY（长期事实）/ Session（实时上下文）。",
      "Daily Log 按日期 append-only 写入，便于审计和问题回放。",
      "上下文接近上限时触发 pre-compaction，把关键事实写入 MEMORY。",
      "检索建议双通道：语义检索找相似问题，关键词检索找命令和文件名。",
      "私聊主会话可读长期记忆，群聊隔离会话默认不加载私聊记忆。",
      "记忆文件保持可读可改，避免只依赖不可见内部状态。",
    ],
  },
  {
    slug: "openclaw-session-auth-dm-pairing",
    title: "OpenClaw 会话与认证：DM 配对、白名单、群聊隔离",
    description: "避免陌生人滥用与上下文泄露的最小安全配置。",
    intent: "openclaw dm pairing",
    category: "会话",
    updatedAt: "2026-03-11",
    readingMinutes: 8,
    keywords: ["openclaw 配对码", "openclaw allowFrom", "openclaw requireMention"],
    content: [
      "默认启用 DM 配对码：未认证用户消息先挂起，不直接执行。",
      "固定协作者使用 `allowFrom` 白名单，减少重复验证流程。",
      "群聊保持 `requireMention`，只处理 @ 消息。",
      "私聊和群聊会话隔离，防止私密上下文外泄。",
      "跨渠道同一用户可映射主会话，但需明确授权边界。",
      "关闭认证前先评估 API 额度与滥用风险。",
    ],
  },
  {
    slug: "openclaw-remote-access-tailscale-guide",
    title: "OpenClaw 远程访问指南：不裸露端口的安全做法",
    description: "从本地回环到外网访问，如何兼顾可用性与安全性。",
    intent: "openclaw 远程访问",
    category: "运维",
    updatedAt: "2026-03-11",
    readingMinutes: 7,
    keywords: ["openclaw tailscale", "openclaw 18789", "openclaw web ui 3000"],
    content: [
      "默认保持 loopback-first，不直接暴露 Gateway 核心端口。",
      "远程访问优先用零信任隧道方案，不建议开放裸公网端口。",
      "上线后验证三段：认证、WebSocket 稳定性、重连恢复能力。",
      "跨公网必须配访问日志和失败告警。",
      "先在低流量下压测，再放开生产使用。",
      "把远程策略写入运维手册，避免临时改动失控。",
    ],
  },
  {
    slug: "openclaw-cloud-deployment-china-comparison",
    title: "OpenClaw 国内云部署对比：怎么按预算选平台",
    description: "把橙皮书平台对比转成可执行的选型策略。",
    intent: "openclaw 国内 部署",
    category: "部署",
    updatedAt: "2026-03-11",
    readingMinutes: 8,
    keywords: ["openclaw 阿里云", "openclaw 腾讯云", "openclaw 火山引擎"],
    content: [
      "选型先看模型费用，不要只看云主机月费。",
      "新手优先一键部署，先跑通链路再做迁移优化。",
      "企业场景先确认合规、网络边界和审计要求。",
      "保留统一的环境变量模板和初始化脚本，降低迁移成本。",
      "上线后按同一清单验收，确保不同云厂商结果一致。",
      "每月复盘“服务器费 vs 模型费”占比，优化成本重心。",
    ],
  },
  {
    slug: "openclaw-security-hardening-from-incidents",
    title: "OpenClaw 安全加固：从历史安全事件反推防护清单",
    description: "把“知道风险”变成“上线前必做”的具体动作。",
    intent: "openclaw 安全 加固",
    category: "安全",
    updatedAt: "2026-03-11",
    readingMinutes: 9,
    keywords: ["openclaw rce", "openclaw 安全事件", "openclaw prompt injection"],
    content: [
      "上线前四件事：最小权限、网络收敛、技能审计、密钥隔离。",
      "执行型能力（Shell/文件写入/浏览器）必须设边界和审计。",
      "prompt injection 采用减灾策略：隔离环境、限制高危命令、保留日志。",
      "安全清单纳入发布流程，每次升级自动复验。",
      "高风险改动先在隔离环境验证，再进入生产。",
      "安全事件要有固定复盘模板，沉淀成后续防护规则。",
    ],
  },
  {
    slug: "openclaw-faq-startup-failures",
    title: "OpenClaw FAQ：启动失败时先查哪 5 项",
    description: "高频启动问题的快速定位顺序，减少盲目重装。",
    intent: "openclaw 启动失败",
    category: "报错",
    updatedAt: "2026-03-11",
    readingMinutes: 6,
    keywords: ["openclaw 启动失败", "openclaw 端口占用", "openclaw faq"],
    content: [
      "第一步看端口：Gateway `18789`、Web UI `3000` 是否被占用。",
      "第二步看版本：Node、包管理器、锁文件是否一致。",
      "第三步看配置：环境变量是否缺失，配置键名是否拼错。",
      "第四步看日志：先看第一条关键错误，再追后续堆栈。",
      "每改一项就重试一次，记录结果，避免混改。",
      "问题定位后把处理步骤写进团队排障手册。",
    ],
  },
  {
    slug: "openclaw-faq-no-reply-in-channel",
    title: "OpenClaw FAQ：渠道收得到消息但不回复怎么办",
    description: "从鉴权、触发规则到会话隔离，快速定位“已读不回”。",
    intent: "openclaw 不回复",
    category: "渠道",
    updatedAt: "2026-03-11",
    readingMinutes: 6,
    keywords: ["openclaw 渠道不回复", "openclaw requireMention", "openclaw allowFrom"],
    content: [
      "优先检查 DM 配对是否完成，未授权用户消息会被挂起。",
      "群聊场景确认 requireMention 策略，未 @ 机器人通常不会触发。",
      "核对渠道回调地址、签名校验与机器人权限是否在有效期内。",
      "用最小测试消息回归验证，不要在复杂业务指令上直接排障。",
    ],
  },
  {
    slug: "openclaw-command-cheatsheet-ops",
    title: "OpenClaw 运维命令速查表（安装/升级/回滚）",
    description: "把高频命令整理成一页，减少现场交付时翻文档成本。",
    intent: "openclaw 命令",
    category: "运维",
    updatedAt: "2026-03-11",
    readingMinutes: 5,
    keywords: ["openclaw 命令速查", "openclaw 升级", "openclaw 回滚"],
    content: [
      "先建立固定操作序列：备份配置 -> 升级版本 -> 健康检查 -> 观察日志。",
      "生产升级遵循小步快跑，单次只改一类变量，便于回滚定位。",
      "回滚必须包含镜像/依赖/配置三件套，不要只回滚代码。",
      "把常用命令收敛成团队统一手册，降低交接风险。",
    ],
  },
  {
    slug: "openclaw-common-errors-fix",
    title: "OpenClaw 常见报错排查清单",
    description: "按错误现象分类，快速定位 OpenClaw 报错根因。",
    intent: "openclaw 报错",
    category: "报错",
    updatedAt: "2026-03-11",
    readingMinutes: 6,
    keywords: ["openclaw报错", "openclaw依赖冲突", "openclaw无法启动"],
    content: [
      "报错排查顺序建议固定：先看启动日志，再看依赖树，最后看配置项。",
      "依赖冲突问题通常来自版本不一致，先清缓存再重装依赖。",
      "权限相关问题优先检查目录可写、端口占用和系统策略。",
      "每解决一个问题就做一次最小验证，避免多个变量同时变化。",
    ],
  },
  {
    slug: "openclaw-production-case-study",
    title: "OpenClaw 实战案例：从0到可交付",
    description: "一个真实上线路径：需求、部署、排错、交付复盘。",
    intent: "openclaw 实战",
    category: "实战",
    updatedAt: "2026-03-11",
    readingMinutes: 9,
    keywords: ["openclaw案例", "openclaw项目", "openclaw实战教程"],
    content: [
      "先把首版目标写成 3 条可验收指标：可收消息、可回消息、可执行 1 条只读任务。",
      "交付当天把高频报错整理成 `runbook.md`：报错信号、定位命令、恢复动作各一行。",
      "每次发布前固定执行回滚演练：回到上一个版本并验证 3 条核心链路。",
      "复盘按模板记录四项：上线耗时、故障时长、触发原因、下次可复用脚本。",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
