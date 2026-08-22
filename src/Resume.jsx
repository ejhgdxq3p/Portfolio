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
} from 'lucide-react';

const resume = {
  name: '姚雨 Yao Yu',
  title: 'AI Agent / Game Tools Engineer',
  contact: {
    phone: '177 6928 7607',
    email: '39asdfghjkl39@gmail.com',
    github: 'github.com/ejhgdxq3p',
    location: 'Beijing, China',
  },
  summary: [
    'AI developer focused on system design and production-ready implementation, with particular attention to controllability and practical boundaries in complex AI systems.',
    'I use models as generation tools, while concentrating on architecture, state control, and engineering stability to make outputs reliable in real workflows.',
  ],
  focus: [
    'Multimodal agent workflow design',
    'Gameplay and toolchain prototyping',
    'Structured output and state control',
    'Local deployment and system implementation',
  ],
  projects: [
    {
      name: 'True Formula',
      subtitle: 'AI Agent Decision System / Independent Project',
      tags: ['Agent Workflow', 'Multimodal', 'Control'],
      bullets: [
        'Built a full closed loop from video parsing and information extraction to conflict checking and schedule generation.',
        'Combined DeepSeek R1 and Qwen2.5-VL to process multimodal input and improve coordination between reasoning and recognition.',
        'Introduced structured constraints and rule-based validation to improve controllability when model outputs were unstable.',
        'The project was recognized in the Douyin Innovators competition track.',
      ],
    },
    {
      name: 'ChessFlow',
      subtitle: 'AI-Assisted Gameplay Prototyping System / Unity',
      tags: ['Unity', 'Gameplay', 'State Machine'],
      bullets: [
        'Separated gameplay logic into input, state, and physics layers to define responsibilities clearly across the system.',
        'Used an LLM to generate initial logic and module scaffolding, which accelerated prototype development.',
        'Stabilized system behavior by introducing state locks and priority control to prevent input conflicts during state transitions.',
      ],
    },
    {
      name: 'Quantum Evolution Beast',
      subtitle: 'Agent + QAOA Investment Simulation System / Independent Project',
      tags: ['Simulation', 'Interactive System', 'Explainability'],
      bullets: [
        'Mapped agent outputs to investment preferences and connected them to a QAOA portfolio optimization flow.',
        'Presented portfolio decisions through a game-like interface to emphasize educational interaction.',
        'Improved explainability and reduced output variance by constraining the input space and visualizing decision paths.',
      ],
    },
    {
      name: 'Adventure X / The Smiling Man / Low-Field MRI / NeuroVoxel',
      subtitle: 'Cross-Media Project Group',
      tags: ['Full-stack', 'Canvas', 'FPGA', 'Edge AI'],
      bullets: [
        'Adventure X: Independently delivered mini-program and IoT full-stack logic, built an offline interactive loop, and received a Hackathon award.',
        'The Smiling Man: Designed a window-as-controller mechanic with Canvas and Matter.js to explore playful interaction patterns.',
        'Low-Field MRI System: Adapted FPGA control logic and connected acquisition, signal processing, and host-side visualization into one pipeline.',
        'NeuroVoxel: Built a medical image processing workflow with Florence-2 and SAM2, completed local deployment and model comparison, and received the Winner Prize in the ToothFairy3 challenge with nnU-Net-based training and inference workflows.',
      ],
    },
  ],
  experience: [
    {
      company: 'Beijing Carbon Crystal Silicon Technology Co., Ltd.',
      role: 'AI Generation Workflow Engineering Intern',
      bullets: [
        'Contributed to an automated scientific plotting workflow covering the full path from data processing to chart generation.',
        'Abstracted reusable parameter templates for common chart types such as box plots and scatter plots.',
        'Improved consistency by designing structured prompts and parameter constraints to reduce randomness in generated results.',
        'Modularized ComfyUI node workflows to improve reuse and maintainability.',
      ],
    },
    {
      company: 'Jingci Medical',
      role: 'Medical Imaging AI Application Intern',
      bullets: [
        'Supported medical imaging processing and model application workflows, including inference and result analysis.',
        'Tested segmentation and annotation-assistance pipelines on real data to observe model stability.',
        'Reduced output variance in production-like scenarios by constraining input data and processing steps.',
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
      label: 'Languages',
      items: ['Python', 'C#', 'C++ (basic)'],
    },
    {
      label: 'Systems',
      items: ['Unity', 'FastAPI', 'Agent Workflow'],
    },
    {
      label: 'AI',
      items: ['Multimodal Systems', 'LLM Output Control', 'Local Deployment'],
    },
    {
      label: 'Engineering',
      items: ['State Machines', 'Structured Output', 'Modularization'],
    },
  ],
};

const SectionTitle = ({ icon: Icon, children }) => (
  <h2 className="flex items-center gap-2 border-b border-slate-200 pb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
    <Icon size={14} />
    {children}
  </h2>
);

const TagList = ({ items }) => (
  <div className="mt-2 flex flex-wrap gap-1.5">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
      >
        {item}
      </span>
    ))}
  </div>
);

const CleanResume = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-stone-100 print:overflow-visible print:bg-white animate-in slide-in-from-bottom duration-500">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/85 p-4 backdrop-blur-md print:hidden">
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

      <div className="relative mx-auto my-8 min-h-[297mm] w-full max-w-[210mm] bg-white px-[10mm] py-[11mm] shadow-2xl print:my-0 print:min-h-0 print:max-w-[210mm] print:shadow-none">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-slate-900 via-slate-600 to-stone-300" />

        <header className="mb-6 border-b-2 border-slate-900 pb-4 pt-3">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.45em] text-slate-400">
                Printable Resume
              </p>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                {resume.name}
              </h1>
              <p className="mt-1 text-sm font-bold tracking-[0.16em] text-slate-500 uppercase">
                {resume.title}
              </p>
            </div>

            <div className="space-y-1 text-right text-[11px] font-medium text-slate-600">
              <div className="flex items-center justify-end gap-3">
                <span className="flex items-center gap-1"><Phone size={12} className="text-slate-400" /> {resume.contact.phone}</span>
                <span className="flex items-center gap-1"><Mail size={12} className="text-slate-400" /> {resume.contact.email}</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="flex items-center gap-1"><Github size={12} className="text-slate-400" /> {resume.contact.github}</span>
                <span className="flex items-center gap-1"><MapPin size={12} className="text-slate-400" /> {resume.contact.location}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 print:gap-5">
          <main className="col-span-12 space-y-5 md:col-span-8 print:col-span-8">
            <section>
              <SectionTitle icon={Sparkles}>Summary</SectionTitle>
              <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="space-y-2 text-[13px] leading-6 text-slate-700">
                  {resume.summary.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <SectionTitle icon={Briefcase}>Projects</SectionTitle>
              <div className="mt-4 space-y-4">
                {resume.projects.map((project) => (
                  <article key={project.name} className="relative border-l-2 border-slate-200 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-[15px] font-bold text-slate-900">{project.name}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <TagList items={project.tags} />
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[12px] leading-5 text-slate-700 marker:text-slate-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Briefcase}>Experience</SectionTitle>
              <div className="mt-4 space-y-4">
                {resume.experience.map((item) => (
                  <article key={item.company} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-[15px] font-bold text-slate-900">{item.company}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {item.role}
                      </p>
                    </div>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[12px] leading-5 text-slate-700 marker:text-slate-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <aside className="col-span-12 space-y-5 md:col-span-4 print:col-span-4">
            <section>
              <SectionTitle icon={Sparkles}>Focus</SectionTitle>
              <div className="mt-3 grid gap-2">
                {resume.focus.map((item) => (
                  <div key={item} className="rounded-xl bg-slate-900 px-3 py-2 text-[11px] font-semibold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>Education</SectionTitle>
              <div className="mt-3 space-y-3">
                {resume.education.map((item) => (
                  <div key={item.school} className="border-l-2 border-slate-200 pl-3">
                    <h3 className="text-[13px] font-bold text-slate-900">{item.school}</h3>
                    <p className="mt-0.5 text-[12px] text-slate-600">{item.degree}</p>
                    <p className="mt-1 text-[10px] font-mono text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Wrench}>Skills</SectionTitle>
              <div className="mt-3 space-y-3">
                {resume.skills.map((skill) => (
                  <div key={skill.label}>
                    <h3 className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-900">
                      {skill.label}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
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

        <footer className="mt-6 border-t border-slate-100 pt-3 text-center text-[10px] uppercase tracking-[0.3em] text-slate-300 print:block">
          Resume / Yao Yu / 2026
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

export default CleanResume;