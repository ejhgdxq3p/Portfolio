import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  Globe,
  Mail,
  Phone,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Wrench,
  Sparkles,
  Cpu,
} from 'lucide-react';

const highlightedTerms = [
  'LLM',
  'AI Agent',
  'Agent workflow',
  'task decomposition',
  'tool calling',
  'Tool Calling',
  'JSON schema',
  'JSON Schema',
  'validation',
  'retry',
  'fallback',
  'retry/fallback',
  'context',
  'memory',
  'pipeline',
  'FastAPI',
  'LangGraph',
  'Langfuse',
  'music21',
  'Docker',
  'ABC notation',
  'ReAct',
  'Reasoning + Acting',
  'Supervisor + Specialist',
  'APScheduler',
  'Nacos',
  'ETL',
  'MCP',
  'MCP server',
  'NAS',
  'Cloudflare Tunnel',
  'Caddy',
  'Tailscale',
  'MCP instructions',
  'JSON-RPC over stdio',
  'SSE 状态同步',
  'SSE state sync',
  '单一数据源',
  '分层上下文管理',
  '语义化素材归档',
  '结构化引用标记',
  '跨项目风格库',
  '端到端自建部署',
  'layered context management',
  'single source of truth',
  'self-hosted deployment',
  'harness',
  'Agent harness',
  'context engineering',
  'Context Engineering',
  '检索即数据依赖',
  '上下文分层',
  '上下文工程',
  'JSON-RPC',
  'stdio',
  'SSE',
  'Node.js',
  'ComfyUI',
  'Seedance 2.0',
  'MiniMax-H3',
  'systemd',
  'SIGTERM',
  '单一事实源',
  '会话恢复',
  '权限边界',
  '前置校验',
  '多后端路由',
  'single source of truth',
  'session resume',
  'capability scoping',
  'pre-dispatch validation',
  'multi-backend routing',
  'DeepSeek R1',
  'Qwen2.5-VL',
  'multi-agent workflow',
  'FSM',
  'State Machine',
  'Florence-2',
  'SAM2',
  'FPGA',
  'Prompt Engineering',
  'RAG',
  'embedding',
  'OpenAI',
  'Qwen',
  'DeepSeek',
  'workflow',
  'tool-like',
  'Agent-like',
  'retry / fallback',
  'input → model → output',
  'parse → extract → validate → generate',
  'strategy → evaluate → update',
  'input → state → action',
  'acquisition → processing → host-side visualization',
  'data processing → chart generation',
  '多阶段 Agent workflow',
  '任务拆解',
  '工具调用',
  '结构化输出',
  '上下文管理',
  '模块化 pipeline',
  '多智能体协作框架',
  '显式 skill routing',
  '自动评测',
  '思考（plan）—行动（tool）—观察（observation）',
  '多轮反思式修复',
  '视频解析 → 信息抽取 → 决策生成',
  '数据处理 → 推理 → 输出',
];

const resumeContent = {
  zh: {
    name: '姚雨 Yao Yu',
    title: 'LLM 应用 / AI Agent 工程师',
    edition: 'Agent 求职版',
    contact: {
      phone: '177 6928 7607',
      email: '39asdfghjkl39@gmail.com',
      github: 'github.com/ejhgdxq3p',
      location: '北京, 中国',
    },
    sections: {
      summary: '个人总结',
      projects: '项目经历',
      experience: '实习经历',
      strengths: '适配点',
      education: '教育背景',
      skills: '技术能力',
    },
    summary: [
      '面向 LLM 应用与 AI Agent 系统开发，具备 Agent workflow 搭建经验，关注多阶段任务编排、工具调用与服务化落地。',
      '参与构建多智能体应用系统，实践任务路由、结构化输出、上下文管理等能力，熟悉通过 JSON Schema、validation 及 retry/fallback 提升调用稳定性。',
      '具备完整项目开发经验，能够独立完成从原型设计、后端实现到本地部署的全流程工程开发。',
    ],
    strengths: [
      '多阶段 Agent workflow 设计与任务拆解',
      '结构化输出、validation 与 retry / fallback',
      '轻量 memory、context 管理与模块化 pipeline',
      '把 AI 能力封装成可运行服务并完成落地',
    ],
    projects: [
      {
        name: 'Storyboard Flow',
        subtitle: '生成式视频 Agent 系统 / 独立架构',
        period: '2026.07 - 至今',
        tags: ['Context Engineering', 'MCP', 'Node.js'],
        bullets: [
          '基于 Node.js 自建 MCP server（JSON-RPC over stdio）与 SSE 状态同步，服务端图存储作为单一数据源，前端与 Agent 实时一致。',
          '设计分层上下文管理：prompt 模板与 Agent skill 分离存储，检索结果随工具返回值下发，规则统一在 MCP instructions 中声明。',
          '实现语义化素材归档、结构化引用标记注入与跨项目风格库，控制长任务的上下文信噪比。',
          '完成端到端自建部署：NAS 常驻服务，Cloudflare Tunnel 出站暴露、Caddy 认证、Tailscale 内网互联、systemd 托管，本机 GPU 跑 ComfyUI 推理。',
        ],
      },
      {
        name: 'TrueFormula',
        subtitle: 'AI Agent 决策系统 / 核心项目',
        period: '2026.01 - 2026.01',
        tags: ['LLM', 'Workflow', 'FastAPI'],
        bullets: [
          '构建基于 LLM 的 Agent 系统，实现视频解析 → 信息抽取 → 决策生成的自动化 workflow。',
          '设计多阶段 Agent workflow，parse → extract → validate → generate，实现复杂任务拆解与执行。',
          '构建结构化输出约束（JSON schema）与结果校验（validation），提升系统可控性与一致性。',
          '实现 retry / fallback 机制，应对模型输出不稳定问题。',
          '构建轻量 memory，支持历史上下文拼接与检索增强探索。',
          '封装 tool-like pipeline，实现信息提取与决策生成等模块解耦。',
          '基于 FastAPI 提供服务接口，完成端到端工程闭环。',
        ],
      },
      {
        name: 'NeuroVoxel',
        subtitle: '医疗 AI Agent 流程系统',
        period: '2025.11 - 2025.12',
        tags: ['Pipeline', 'Validation', 'Medical AI'],
        bullets: [
          '基于 Florence-2 与 SAM2 构建医学图像处理流程，完成模型推理与效果验证。',
          '构建图像处理 pipeline，覆盖数据预处理 → 模型推理 → 结果输出，实现端到端流程。',
          '在本地环境完成模型部署与推理，支持实验与快速迭代，并对不同模型效果进行对比分析。',
          '结合 nnU-Net 等方法参与 ToothFairy3 医学影像分割竞赛，完成训练与推理流程搭建，并获得赛事奖项（Winner Prize）。',
        ],
      },
    ],
    experience: [
      {
        company: '中数智汇',
        role: '智能体开发工程师',
        period: '2026.04 - 2026.06.13',
        bullets: [
          '基于 FastAPI、MySQL 与 Langfuse 开发生产级问答分析系统，构建对话 trace 拉取、LLM 自动标注、数据落库与分析接口暴露的完整链路。',
          '设计每日 ETL pipeline，使用 APScheduler + subprocess 实现定时任务调度，完成对话清洗、分类打标与幂等同步，并通过 Nacos 支持模型与 prompt 热更新。',
          '参与企业多智能体架构迭代，将业务能力拆分为 5 个领域专精 agent 和 27 个可复用 skill，设计显式 skill routing 机制，并引入 MCP 标准化工具接入层，实现跨 agent 工具调用统一化与带鉴权的安全访问能力。',
        ],
      },
      {
        company: '碳水晶硅',
        role: 'AI Workflow 开发',
        period: '2024.11 - 2025.3',
        bullets: [
          '参与 AI 自动化流程开发，构建数据处理 → 图表生成的 Agent-like workflow。',
          '设计结构化模板与规则约束，提升输出一致性。',
          '优化 Prompt 与生成流程，降低随机性。',
          '对 ComfyUI workflow 进行模块拆分，实现工具化复用。',
        ],
      },
      {
        company: '景磁医疗',
        role: 'AI 应用开发',
        period: '2025.11 - 2026.04',
        bullets: [
          '参与医疗 AI 应用开发，支持模型在真实场景中的落地与流程集成。',
          '构建数据处理与推理 pipeline，遵循 input → model → output 模式。',
          '分析模型输出并优化 validation 与后处理流程。',
          '提升模型在真实数据环境下的稳定性与可用性。',
        ],
      },
    ],
    education: [
      {
        school: '北京大学',
        degree: '电子信息 硕士',
        period: '2023 - 2026',
      },
      {
        school: '南京邮电大学',
        degree: '电子科学 本科',
        period: '2019 - 2023',
      },
    ],
    skills: [
      {
        label: '编程语言',
        items: ['Python', 'C#', 'C++ 基础'],
      },
      {
        label: 'AI / Agent',
        items: ['OpenAI / Qwen / DeepSeek', 'Agent Workflow', 'Prompt Engineering', 'JSON schema', '结构化输出', '基础 RAG'],
      },
      {
        label: '工程能力',
        items: ['FastAPI', '模块化设计', 'pipeline / workflow', 'retry / fallback', '本地模型部署'],
      },
      {
        label: '系统 / 游戏',
        items: ['Unity', 'FSM / Gameplay', '状态机', '行为逻辑设计'],
      },
    ],
  },
  en: {
    name: '姚雨 Yao Yu',
    title: 'LLM Application / AI Agent Engineer',
    edition: 'Agent Recruitment Edition',
    contact: {
      phone: '177 6928 7607',
      email: '39asdfghjkl39@gmail.com',
      github: 'github.com/ejhgdxq3p',
      location: 'Beijing, China',
    },
    sections: {
      summary: 'Summary',
      projects: 'Projects',
      experience: 'Experience',
      strengths: 'Strengths',
      education: 'Education',
      skills: 'Skills',
    },
    summary: [
      'Focused on LLM applications and AI Agent system development, with hands-on experience building Agent workflows around multi-stage task orchestration, tool calling, and service deployment.',
      'Participated in multi-agent application development, practicing task routing, structured output, and context management, and using JSON Schema, validation, and retry/fallback to improve call stability.',
      'Experienced in full-cycle project development, independently covering prototype design, backend implementation, and local deployment.',
    ],
    strengths: [
      'Multi-stage agent workflow design and task decomposition',
      'Structured output, validation, and retry / fallback patterns',
      'Lightweight memory, context management, and modular pipelines',
      'Packaging AI capabilities into deployable services and internal tools',
    ],
    projects: [
      {
        name: 'Storyboard Flow',
        subtitle: 'Generative-Video Agent System / Sole Architect',
        period: '2026.07 - Present',
        tags: ['Context Engineering', 'MCP', 'Node.js'],
        bullets: [
          'Built a custom MCP server (JSON-RPC over stdio) and SSE state sync in Node.js, with a server-side graph store as the single source of truth shared by the UI and the agent.',
          'Designed layered context management: prompt templates and agent skills stored separately, retrieval results returned inline with tool responses, rules declared once in the MCP instructions.',
          'Implemented semantic asset archiving, structured reference-marker injection, and a cross-project style library to control context signal-to-noise on long-running tasks.',
          'Delivered end-to-end self-hosted deployment: services on a NAS, outbound exposure via Cloudflare Tunnel, Caddy authentication, Tailscale mesh networking, systemd supervision, and local GPU inference through ComfyUI.',
        ],
      },
      {
        name: 'TrueFormula',
        subtitle: 'AI Agent Decision System / Core Project',
        period: '2026.01 - 2026.01',
        tags: ['LLM', 'Workflow', 'FastAPI'],
        bullets: [
          'Built an LLM-based agent system for video parsing, information extraction, and decision generation.',
          'Designed a multi-stage workflow, parse → extract → validate → generate, for complex task execution.',
          'Added JSON schema constraints and validation to improve controllability and consistency.',
          'Implemented retry / fallback and lightweight memory for continuous tasks.',
          'Packaged tool-like pipelines to separate extraction, validation, and generation modules.',
          'Exposed the system through FastAPI as an end-to-end service workflow.',
        ],
      },
      {
        name: 'NeuroVoxel',
        subtitle: 'Medical AI Agent Workflow System',
        period: '2025.11 - 2025.12',
        tags: ['Pipeline', 'Validation', 'Medical AI'],
        bullets: [
          'Built a medical image processing workflow with Florence-2 and SAM2, covering model inference and result validation.',
          'Designed an end-to-end pipeline from data preprocessing to model inference and result output.',
          'Deployed the models locally to support experimentation and rapid iteration, and compared model performance on real tasks to guide model selection.',
          'Participated in the ToothFairy3 medical image segmentation challenge with nnU-Net and related methods, built training and inference workflows, and received the Winner Prize.',
        ],
      },
    ],
    experience: [
      {
        company: 'Zhongshu Zhihui',
        role: 'Agent Development Engineer',
        period: '2026.04 - 2026.06.13',
        bullets: [
          'Built a production-ready Q&A analytics system with FastAPI, MySQL, and Langfuse, covering conversation trace retrieval, LLM-based auto-labeling, data persistence, and analytics APIs.',
          'Designed a daily ETL pipeline with APScheduler and subprocess-based scheduling for conversation cleaning, classification, labeling, and idempotent synchronization, with Nacos enabling hot updates for models and prompts.',
          'Contributed to enterprise multi-agent architecture iteration by decomposing business capabilities into 5 domain-specialized agents and 27 reusable skills, designed explicit skill routing, and introduced an MCP-based standardized tool access layer for unified cross-agent tool calls and authenticated secure access.',
        ],
      },
      {
        company: 'Carbon Crystal Silicon',
        role: 'AI Workflow Developer',
        period: '2024.11 - 2025.3',
        bullets: [
          'Built an agent-like workflow from data processing to chart generation.',
          'Designed structured templates and rule constraints to improve output consistency.',
          'Optimized prompts and generation settings to reduce randomness.',
          'Split ComfyUI workflows into reusable modules for better reuse and maintenance.',
        ],
      },
      {
        company: 'Jingci Medical',
        role: 'AI Application Developer',
        period: '2025.11 - 2026.04',
        bullets: [
          'Supported medical AI deployment and workflow integration in real-world scenarios.',
          'Built data-processing and inference pipelines in an input → model → output pattern.',
          'Analyzed model outputs and improved stability through validation and post-processing optimization.',
        ],
      },
    ],
    education: [
      {
        school: 'Peking University',
        degree: 'M.S. in Electronics and Information Engineering',
        period: '2023 - 2026',
      },
      {
        school: 'Nanjing University of Posts and Telecommunications',
        degree: 'B.S. in Electronic Science',
        period: '2019 - 2023',
      },
    ],
    skills: [
      {
        label: 'Programming',
        items: ['Python', 'C#', 'C++ (basic)'],
      },
      {
        label: 'AI / Agent',
        items: ['OpenAI / Qwen / DeepSeek', 'Agent Workflow', 'Prompt Engineering', 'JSON schema', 'Structured Output', 'Basic RAG'],
      },
      {
        label: 'Engineering',
        items: ['FastAPI', 'Modular Design', 'Pipeline / Workflow', 'Retry / Fallback', 'Local Deployment'],
      },
      {
        label: 'Systems / Games',
        items: ['Unity', 'FSM / Gameplay', 'State Machines', 'Behavior Logic Design'],
      },
    ],
  },
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// 长词优先：否则 'MCP' 会先匹配掉 'MCP server' 这类更长的词条
const highlightPattern = new RegExp(
  `(${[...highlightedTerms]
    .sort((a, b) => b.length - a.length)
    .map((term) => escapeRegExp(term))
    .join('|')})`,
  'g'
);

const SectionTitle = ({ icon: Icon, children }) => (
  <h2 className="flex items-center gap-1.5 border-b border-slate-200 pb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
    <Icon size={12} />
    {children}
  </h2>
);

const TagList = ({ items }) => (
  <div className="mt-1 flex flex-wrap gap-1">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0 text-[8px] font-semibold uppercase tracking-wide text-slate-500"
      >
        {item}
      </span>
    ))}
  </div>
);

const HighlightText = ({ text }) => {
  const parts = text.split(highlightPattern);

  return parts.map((part, index) => {
    if (highlightedTerms.includes(part)) {
      return (
        <strong key={`${part}-${index}`} className="font-extrabold text-slate-900">
          {part}
        </strong>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
};

const AgentResume = ({ onClose }) => {
  const [lang, setLang] = useState('zh');
  const resume = resumeContent[lang];
  const isEnglish = lang === 'en';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-amber-50 print:overflow-visible print:bg-white animate-in slide-in-from-bottom duration-500">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/90 p-4 backdrop-blur-md print:hidden">
        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            <Globe size={16} />
            {lang === 'zh' ? 'English' : '中文'}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <Download size={16} />
            Save PDF
          </button>
        </div>
      </div>

      <div className="relative mx-auto my-4 min-h-[297mm] w-full max-w-[210mm] overflow-hidden bg-white px-[6.5mm] py-[6.5mm] shadow-2xl print:my-0 print:min-h-0 print:max-w-[210mm] print:shadow-none">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-slate-900 via-slate-600 to-stone-300" />
        <div className="absolute right-[-44mm] top-[-56mm] h-[118mm] w-[118mm] rounded-full bg-slate-100/70" />
        <div className="absolute left-[-32mm] top-[112mm] h-[72mm] w-[72mm] rounded-full bg-slate-50" />

        <header className="relative mb-2.5 border-b-2 border-slate-900 pb-2 pt-1">
          <div className="flex flex-wrap items-end justify-between gap-2.5">
            <div>
              <p className="mb-0.5 text-[7px] font-bold uppercase tracking-[0.32em] text-slate-400">
                {resume.edition}
              </p>
              <h1 className="text-[26px] font-black leading-none tracking-tight text-slate-900">
                {resume.name}
              </h1>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
                {resume.title}
              </p>
            </div>

            <div className="space-y-0 text-right text-[8px] font-medium leading-[1.35] text-slate-600">
              <div className="flex items-center justify-end gap-2">
                <span className="flex items-center gap-1"><Phone size={10} className="text-slate-400" /> {resume.contact.phone}</span>
                <span className="flex items-center gap-1"><Mail size={10} className="text-slate-400" /> {resume.contact.email}</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="flex items-center gap-1"><Github size={10} className="text-slate-400" /> {resume.contact.github}</span>
                <span className="flex items-center gap-1"><MapPin size={10} className="text-slate-400" /> {resume.contact.location}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative grid grid-cols-12 gap-2.5 print:gap-2.5">
          <main className="col-span-12 space-y-2.5 md:col-span-8 print:col-span-8">
            <section>
              <SectionTitle icon={Sparkles}>{resume.sections.summary}</SectionTitle>
              <div className={`mt-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 ${isEnglish ? 'py-2' : 'py-2'}`}>
                <div className={`text-slate-700 ${isEnglish ? 'space-y-1 text-[9.7px] leading-[1.42]' : 'space-y-1 text-[10px] leading-[1.45]'}`}>
                  {resume.summary.map((line) => (
                    <p key={line}><HighlightText text={line} /></p>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={Cpu}>{resume.sections.projects}</SectionTitle>
              <div className={`mt-1 ${isEnglish ? 'space-y-2' : 'space-y-2'}`}>
                {resume.projects.map((project, index) => (
                  <article
                    key={project.name}
                    className={`relative rounded-lg border border-slate-200 pl-2.5 pr-2 ${isEnglish ? 'py-2' : 'py-2'} ${index % 2 === 0 ? 'bg-sky-50/55' : 'bg-white'}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <h3 className={`font-bold text-slate-900 ${isEnglish ? 'text-[12.5px] leading-[1.2]' : 'text-[12.5px] leading-[1.22]'}`}>{project.name}</h3>
                      <p className={`font-semibold uppercase tracking-wide text-slate-400 ${isEnglish ? 'text-[8.3px]' : 'text-[8.3px]'}`}>
                        {project.subtitle} / {project.period}
                      </p>
                    </div>
                    <TagList items={project.tags} />
                    <ul className={`mt-0.5 list-disc pl-3 text-slate-700 marker:text-slate-400 ${isEnglish ? 'space-y-1 text-[9.2px] leading-[1.34]' : 'space-y-1 text-[9.4px] leading-[1.38]'}`}>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}><HighlightText text={bullet} /></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Briefcase}>{resume.sections.experience}</SectionTitle>
              <div className={`mt-1 ${isEnglish ? 'space-y-1.5' : 'space-y-1.5'}`}>
                {resume.experience.map((item) => (
                  <article key={item.company} className={`rounded-lg border border-slate-200 bg-white px-2 ${isEnglish ? 'py-2' : 'py-2'}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <h3 className={`font-bold leading-[1.18] text-slate-900 ${isEnglish ? 'text-[11.3px]' : 'text-[11.2px]'}`}>{item.company}</h3>
                      <p className={`font-semibold uppercase tracking-wide text-slate-400 ${isEnglish ? 'text-[8.2px]' : 'text-[8.2px]'}`}>
                        {item.role} / {item.period}
                      </p>
                    </div>
                    <ul className={`mt-0.5 list-disc pl-3 text-slate-700 marker:text-slate-400 ${isEnglish ? 'space-y-0.5 text-[8.8px] leading-[1.3]' : 'space-y-1 text-[8.9px] leading-[1.3]'}`}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}><HighlightText text={bullet} /></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="col-span-12 space-y-2.5 md:col-span-4 print:col-span-4">
            <section>
              <SectionTitle icon={Sparkles}>{resume.sections.strengths}</SectionTitle>
              <div className="mt-1 grid gap-1">
                {resume.strengths.map((item) => (
                  <div
                    key={item}
                    className={`rounded-lg border border-slate-200 bg-slate-50 px-2 ${isEnglish ? 'py-1.5 text-[8.7px] leading-[1.3]' : 'py-1.5 text-[8.8px] leading-[1.32]'} font-semibold text-slate-700`}
                  >
                    <HighlightText text={item} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>{resume.sections.education}</SectionTitle>
              <div className="mt-1 space-y-1.5">
                {resume.education.map((item) => (
                  <div key={item.school} className="border-l-2 border-slate-200 pl-2">
                    <h3 className="text-[11px] font-bold leading-[1.2] text-slate-900">{item.school}</h3>
                    <p className={`mt-0.5 text-slate-600 ${isEnglish ? 'text-[9.3px] leading-[1.28]' : 'text-[9.3px] leading-[1.3]'}`}>{item.degree}</p>
                    <p className="mt-0.5 text-[8.5px] font-mono text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Wrench}>{resume.sections.skills}</SectionTitle>
              <div className="mt-1 space-y-1.5">
                {resume.skills.map((skill) => (
                  <div key={skill.label}>
                    <h3 className="mb-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-900">
                      {skill.label}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-md bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600 ${isEnglish ? 'text-[8.2px]' : 'text-[8.3px]'}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <footer className="relative mt-2.5 border-t border-slate-100 pt-1.5 text-center text-[7px] uppercase tracking-[0.2em] text-slate-300 print:block">
          Agent Recruitment Edition / Yao Yu / 2026
        </footer>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default AgentResume;