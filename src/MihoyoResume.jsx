import React from 'react';
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Wrench,
  Sparkles,
  Gamepad2,
} from 'lucide-react';

const highlightedTerms = [
  'DeepSeek R1',
  'Qwen2.5-VL',
  'IntuitionX',
  '抖音创变者赛道奖',
  'Unity / C#',
  '有限状态机',
  'AI',
  'Agent',
  'QAOA',
  'IoT',
  'Adventure X',
  'HTML5 Canvas',
  'Matter.js',
  'FPGA',
  'Florence-2',
  'SAM2',
  'ComfyUI',
  'Prompt',
  '微信小程序',
  '规则校验',
  '结构化',
  '可视化',
  '推理',
  '何以为人',
  '主题赛道大奖',
];

const awardLines = [
  '获 IntuitionX 抖音创变者赛道奖。',
  '获 Adventure X “何以为人”主题赛道大奖。',
];

const resume = {
  name: '姚雨 Yao Yu',
  title: 'AI Agent / Gameplay Tools Engineer',
  edition: 'Mihoyo Interview Edition',
  contact: {
    phone: '177 6928 7607',
    email: '39asdfghjkl39@gmail.com',
    github: 'github.com/ejhgdxq3p',
    location: 'Beijing, China',
  },
  summary: [
    '面向复杂交互系统做 AI 与工具链落地，关注生成能力如何进入可控、可调、可维护的工程结构。',
    '项目经验集中在 Agent 工作流、玩法原型系统和多模块协同，适合连接 AI 能力、研发工具与实际游戏开发流程。',
  ],
  strengths: [
    '将模型输出收束成可验证系统流程',
    '用规则与状态设计保证玩法行为稳定',
    '能快速做原型，也能补齐工程约束',
    '关注 AI 在游戏研发中的真实边界',
  ],
  projects: [
    {
      name: 'True Formula',
      subtitle: 'AI Agent 决策系统 / 独立开发',
      tags: ['Agent', 'Multimodal', 'Workflow'],
      bullets: [
        '基于多模态模型（DeepSeek R1 + Qwen2.5-VL）实现视频内容解析与补剂方案生成。',
        '将非结构化信息整理为结构化日程，完成从解析到决策输出的完整流程。',
        '通过规则校验优化结果稳定性，提高系统可用性。',
        '获 IntuitionX 抖音创变者赛道奖。',
      ],
    },
    {
      name: 'ChessFlow',
      subtitle: '规则驱动 Gameplay 原型系统 / Unity / C#',
      tags: ['Unity', 'Gameplay', 'FSM'],
      bullets: [
        '基于棋子移动规则（直线 / 对角 / L型）实现差异化角色行为。',
        '构建输入、移动与规则解耦的系统结构，支持玩家与 AI 统一逻辑。',
        '使用有限状态机管理角色状态，保证行为稳定与切换一致性。',
        '实现基础 AI 追踪与策略差异行为。',
      ],
    },
    {
      name: 'Adventure X',
      subtitle: 'Phygital 交互系统 / 2人团队',
      tags: ['WeChat', 'IoT', 'Interaction'],
      bullets: [
        '独立完成微信小程序与 IoT 交互逻辑开发。',
        '构建人与设备的实时反馈机制，实现线下互动玩法。',
        '获 Adventure X “何以为人”主题赛道大奖。',
      ],
    },
    {
      name: 'The Smiling Man',
      subtitle: '实验性游戏 / 独立开发',
      tags: ['Canvas', 'Matter.js', 'Narrative'],
      bullets: [
        '基于 HTML5 Canvas 与 Matter.js 实现交互逻辑。',
        '设计“窗口控制交互”的玩法机制。',
        '探索轻量级叙事与玩法结合方式。',
      ],
    },
    {
      name: '低场 MRI 系统',
      subtitle: '硬件与系统集成',
      tags: ['Hardware', 'FPGA', 'Pipeline'],
      bullets: [
        '参与桌面级 MRI 系统搭建，完成数据采集与处理流程联通。',
        '基于开源 FPGA 方案进行控制逻辑适配。',
        '实现从硬件采集到上位机处理的完整链路。',
      ],
    },
    {
      name: 'NeuroVoxel',
      subtitle: '医疗影像 AI / 独立开发',
      tags: ['Medical AI', 'Florence-2', 'SAM2'],
      bullets: [
        '基于 Florence-2 与 SAM2 构建医学图像处理流程，完成模型推理与效果验证。',
        '构建图像处理 pipeline，覆盖数据预处理 → 模型推理 → 结果输出，实现端到端流程。',
        '在本地环境完成模型部署与推理，支持实验与快速迭代。',
        '对不同模型在实际任务中的表现进行对比与分析，优化模型选择策略。',
        '结合 nnU-Net 等方法参与 ToothFairy3 医学影像分割竞赛，完成训练与推理流程搭建，并获得赛事奖项（Winner Prize）。',
      ],
    },
    {
      name: '量子进化兽',
      subtitle: 'Agent 投资策略模拟系统 / 独立开发',
      tags: ['Agent', 'QAOA', 'Simulation'],
      bullets: [
        '将不同 Agent 的投资偏好映射为组合优化策略（QAOA）。',
        '构建可视化交互界面，展示策略选择与结果变化过程。',
        '以游戏形式表达复杂决策逻辑，用于教学与探索。',
      ],
    },
  ],
  experience: [
    {
      company: '北京碳水晶硅科技有限公司',
      role: 'AI 绘图流程开发（实习）',
      bullets: [
        '参与科研绘图自动化流程搭建，实现数据到图表的生成流程。',
        '梳理常见图表结构并建立模板，提高生成一致性。',
        '优化 Prompt 设计，提升结果稳定性与可控性。',
        '对 ComfyUI 流程进行模块化整理，增强复用性。',
      ],
    },
    {
      company: '景磁医疗',
      role: '医疗 AI 应用（实习）',
      bullets: [
        '参与医学影像处理流程与模型应用。',
        '完成数据处理与推理结果分析。',
        '协助优化模型在实际数据中的使用流程。',
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
      label: 'Programming',
      items: ['Python', 'C#', 'C++ 基础'],
    },
    {
      label: 'Game & System',
      items: ['Unity', 'Gameplay Prototype', 'State Machine'],
    },
    {
      label: 'AI Workflow',
      items: ['Agent Workflow', 'Multimodal System', 'Local Deployment'],
    },
    {
      label: 'Engineering',
      items: ['Structured Output', 'Module Split', 'FastAPI'],
    },
  ],
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightPattern = new RegExp(
  `(${highlightedTerms.map((term) => escapeRegExp(term)).join('|')})`,
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

const BulletLine = ({ text }) => {
  if (awardLines.includes(text)) {
    return (
      <span className="inline-block rounded-md bg-slate-900 px-2 py-1 font-semibold text-white">
        {text}
      </span>
    );
  }

  return <HighlightText text={text} />;
};

const MihoyoResume = ({ onClose }) => {
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

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          <Download size={16} />
          Save PDF
        </button>
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
              <SectionTitle icon={Sparkles}>个人总结</SectionTitle>
              <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5">
                <div className="space-y-0.5 text-[10px] leading-[1.4] text-slate-700">
                  {resume.summary.map((line) => (
                    <p key={line}><HighlightText text={line} /></p>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={Gamepad2}>项目经历</SectionTitle>
              <div className="mt-1.5 space-y-2">
                {resume.projects.map((project) => (
                  <article key={project.name} className="relative border-l-2 border-slate-200 pl-2.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <h3 className="text-[13px] font-bold leading-[1.2] text-slate-900">{project.name}</h3>
                      <p className="text-[8.5px] font-semibold uppercase tracking-wide text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <TagList items={project.tags} />
                    <ul className="mt-1 list-disc space-y-0.5 pl-3 text-[10px] leading-[1.36] text-slate-700 marker:text-slate-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className={awardLines.includes(bullet) ? 'list-none pl-0' : ''}><BulletLine text={bullet} /></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Briefcase}>实习经历</SectionTitle>
              <div className="mt-1.5 space-y-1.5">
                {resume.experience.map((item) => (
                  <article key={item.company} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <h3 className="text-[12.5px] font-bold leading-[1.2] text-slate-900">{item.company}</h3>
                      <p className="text-[8.5px] font-semibold uppercase tracking-wide text-slate-400">
                        {item.role}
                      </p>
                    </div>
                    <ul className="mt-1 list-disc space-y-0.5 pl-3 text-[10px] leading-[1.36] text-slate-700 marker:text-slate-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}><BulletLine text={bullet} /></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="col-span-12 space-y-2.5 md:col-span-4 print:col-span-4">
            <section>
              <SectionTitle icon={Sparkles}>适配点</SectionTitle>
              <div className="mt-1 grid gap-1">
                {resume.strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[9px] font-semibold leading-[1.35] text-slate-700"
                  >
                    <HighlightText text={item} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>教育背景</SectionTitle>
              <div className="mt-1 space-y-1.5">
                {resume.education.map((item) => (
                  <div key={item.school} className="border-l-2 border-slate-200 pl-2">
                    <h3 className="text-[11px] font-bold leading-[1.2] text-slate-900">{item.school}</h3>
                    <p className="mt-0.5 text-[9.5px] leading-[1.25] text-slate-600">{item.degree}</p>
                    <p className="mt-0.5 text-[8.5px] font-mono text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Wrench}>技术能力</SectionTitle>
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
                          className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[8.5px] font-medium text-slate-600"
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
          Mihoyo Interview Edition / Yao Yu / 2026
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

export default MihoyoResume;