import React, { useState } from 'react';
import { Download, Globe, ArrowLeft, Mail, Phone, Link as LinkIcon, Github } from 'lucide-react';

const Resume = ({ onClose }) => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      name: "Yu YAO",
      tagline: "Electronics Engineer & Creative Technologist",
      contact: {
        phone: "+86 177 6928 7607",
        email: "39asdfghjkl39@gmail.com",
        portfolio: "Portfolio",
        github: "GitHub"
      },
      summary: "An electronics engineer and creative technologist bridging the chasm between hardware precision and AI creativity. From building low-field MRI systems to deploying bio-hacking agents, I develop full-stack solutions to **gamify reality**. I am dedicated to defining a future where Game dynamics and AI dissolve the boundaries of human interaction.",
      sections: {
        education: "Education",
        honors: "Honors & Awards",
        projects: "Selected Projects",
        experiments: "Creative Experiments",
        skills: "Technical Skills"
      },
      education: [
        {
          school: "Peking University",
          degree: "M.Sc. in Electronics & Information",
          period: "09/2023 – 06/2026 (Expected)"
        },
        {
          school: "Nanjing University of Posts & Telecomm",
          degree: "B.Eng. in Electronic Science",
          period: "09/2019 – 06/2023"
        }
      ],
      honors: [
        {
          title: "Winner, Douyin AI Changemaker Plan (Software Track)",
          event: "IntuitionX Hackathon 2026",
          desc: "Awarded for the \"True Formula\" AI Agent, recognized for innovative application of Multi-modal LLMs in health gamification."
        },
        {
          title: "Grand Prize, Adventure X 2025",
          event: "China's Largest Hackathon",
          desc: "Theme: \"What Makes Us Human\". Designed a phygital social breaking-ice system."
        }
      ],
      projects: [
        {
          title: "True Formula: AI Bio-Hacking Agent",
          role: "Solo Developer & Designer",
          items: [
            "**Concept:** Created a \"Digital Pharmacist\" agent that parses unstructured short videos into scientific nutrition schedules using **First Principles Reasoning**.",
            "**Tech:** Integrated **DeepSeek R1** (Reasoning) and **Qwen2.5-VL** (Vision) to detect pharmacological conflicts.",
            "**Impact:** Validated by the Douyin AI Changemaker Plan; transformed passive content consumption into actionable health quests."
          ]
        },
        {
          title: "NeuroVoxel: Edge-AI Medical Segmentation",
          role: "Solo Researcher",
          items: [
            "**Innovation:** Built an offline, privacy-first medical \"Copilot\" deploying **Florence-2** and **SAM 2** on consumer GPUs (RTX 4090).",
            "**Performance:** Achieved Zero-shot organ localization with <3s latency, solving the privacy bottleneck for hospital data.",
            "Open Source: Apache 2.0 Licensed."
          ]
        },
        {
          title: "Portable Low-Field MRI System",
          role: "Hardware Lead",
          items: [
            "**Engineering:** Constructed a desktop MRI scanner from scratch, featuring custom **FPGA** signal scheduling and RF coil fabrication.",
            "**Research:** Developed AI reconstruction algorithms to enhance image quality under low-field conditions."
          ]
        },
        {
          title: "Adventure X: \"What Makes Us Human\"",
          role: "Lead Interaction Designer",
          items: [
            "**System:** Designed a \"Phygital\" social interface using IoT sensors and WeChat Mini-programs to facilitate real-time connection between strangers without disrupting social flow."
          ]
        }
      ],
      experiments: [
        {
          title: "OddBites (AIGC 3D Game)",
          desc: "A strategy game integrating **Tripo AI API** and **Godot 4.4** to generate real-time 3D food assets based on a dynamic in-game economy.",
          tag: "Solo Project"
        },
        {
          title: "The Smiling Man (Indie Game)",
          desc: "A meta-horror puzzle game built with **Matter.js** and HTML5 Canvas, exploring narrative boundaries via a \"Window-as-Controller\" mechanic.",
          tag: "Solo Project"
        }
      ],
      skills: [
        { category: "AI & Software", items: "Python, PyTorch, DeepSeek/LLM Integration, ComfyUI, React/Vue." },
        { category: "Game & Creative", items: "Unity, Godot, TouchDesigner, GenAI Workflows." },
        { category: "Hardware", items: "FPGA (Verilog), PCB Design, Signal Processing, MRI Physics." }
      ]
    },
    zh: {
      name: "姚 雨",
      tagline: "电子工程师 & 创意技术专家",
      contact: {
        phone: "+86 177 6928 7607",
        email: "39asdfghjkl39@gmail.com",
        portfolio: "Portfolio",
        github: "GitHub"
      },
      summary: "一位致力于弥合硬件精度与AI创造力之间鸿沟的电子工程师和创意技术专家。从构建低场磁共振成像系统到部署生物黑客代理，我开发全栈解决方案以**游戏化现实**。我致力于定义一个游戏动力学和AI消融人类交互边界的未来。",
      sections: {
        education: "教育经历",
        honors: "荣誉奖项",
        projects: "精选项目",
        experiments: "创意实验",
        skills: "技术技能"
      },
      education: [
        {
          school: "北京大学",
          degree: "电子信息 硕士",
          period: "2023.09 – 2026.06 (预计)"
        },
        {
          school: "南京邮电大学",
          degree: "电子科学与技术 学士",
          period: "2019.09 – 2023.06"
        }
      ],
      honors: [
        {
          title: "优胜奖, 抖音AI创新者计划 (软件赛道)",
          event: "IntuitionX 极客马拉松 2026",
          desc: "凭借\"真成分\" AI代理获奖，因在健康游戏化中创新应用多模态大模型而受到认可。"
        },
        {
          title: "特等奖, Adventure X 2025",
          event: "中国最大规模极客马拉松",
          desc: "主题：\"何以为人\"。设计了一个物理+数字(Phygital)的社交破冰系统。"
        }
      ],
      projects: [
        {
          title: "真成分：AI生物黑客代理",
          role: "独立开发 & 设计",
          items: [
            "**概念：** 创建了一个\"数字药剂师\"代理，利用**第一性原理推理**将非结构化短视频解析为科学的营养计划。",
            "**技术：** 集成了 **DeepSeek R1** (推理) 和 **Qwen2.5-VL** (视觉) 以检测药理冲突。",
            "**影响：** 获得抖音AI创新者计划验证；将被动的内容消费转化为可执行的健康任务。"
          ]
        },
        {
          title: "NeuroVoxel：边缘AI医疗分割",
          role: "独立研究员",
          items: [
            "**创新：** 构建了一个离线、隐私优先的医疗\"Copilot\"，在消费级GPU (RTX 4090) 上部署 **Florence-2** 和 **SAM 2**。",
            "**性能：** 实现了零样本器官定位，延迟<3秒，解决了医院数据的隐私瓶颈。",
            "开源：Apache 2.0 许可。"
          ]
        },
        {
          title: "便携式低场磁共振系统",
          role: "硬件负责人",
          items: [
            "**工程：** 从零构建台式MRI扫描仪，具有定制的 **FPGA** 信号调度和RF线圈制造。",
            "**研究：** 开发AI重建算法以提高低场条件下的图像质量。"
          ]
        },
        {
          title: "Adventure X：\"何以为人\"",
          role: "首席交互设计",
          items: [
            "**系统：** 设计了一个使用IoT传感器和微信小程序的\"Phygital\"社交接口，在不打断社交流的情况下促进陌生人之间的实时连接。"
          ]
        }
      ],
      experiments: [
        {
          title: "OddBites (AIGC 3D 游戏)",
          desc: "一款策略游戏，集成 **Tripo AI API** 和 **Godot 4.4**，基于动态游戏内经济生成实时3D食物资产。",
          tag: "独立项目"
        },
        {
          title: "The Smiling Man (独立游戏)",
          desc: "使用 **Matter.js** 和 HTML5 Canvas 构建的元恐怖解谜游戏，通过\"窗口作为控制器\"机制探索叙事边界。",
          tag: "独立项目"
        }
      ],
      skills: [
        { category: "AI & 软件", items: "Python, PyTorch, DeepSeek/LLM Integration, ComfyUI, React/Vue." },
        { category: "游戏 & 创意", items: "Unity, Godot, TouchDesigner, GenAI Workflows." },
        { category: "硬件", items: "FPGA (Verilog), PCB Design, Signal Processing, MRI Physics." }
      ]
    }
  };

  const t = content[lang];

  const handlePrint = () => {
    window.print();
  };

  const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-zinc-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-100 overflow-y-auto print:overflow-visible print:bg-white animate-in slide-in-from-bottom duration-500">
      {/* Control Bar - Hidden when printing */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white/80 backdrop-blur-md border-b border-zinc-200 print:hidden">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-600 font-medium"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-700 text-sm font-medium"
          >
            <Globe size={16} />
            {lang === 'en' ? '中文' : 'English'}
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm font-medium shadow-lg shadow-zinc-900/10"
          >
            <Download size={16} />
            Save as PDF
          </button>
        </div>
      </div>

      {/* A4 Resume Page */}
      <div className="max-w-[210mm] mx-auto my-8 bg-white shadow-2xl print:shadow-none print:m-0 min-h-[297mm] p-[10mm] md:p-[15mm] text-zinc-800 font-sans leading-relaxed selection:bg-zinc-900 selection:text-white">
        {/* Header */}
        <header className="border-b-2 border-zinc-900 pb-6 mb-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-2 text-zinc-900">
                {t.name}
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide text-zinc-600">
                {t.tagline}
              </p>
            </div>
            <div className="text-right text-sm space-y-1 text-zinc-600 font-medium">
              <div className="flex items-center justify-end gap-2">
                {t.contact.phone} <Phone size={14} />
              </div>
              <div className="flex items-center justify-end gap-2">
                {t.contact.email} <Mail size={14} />
              </div>
              <div className="flex items-center justify-end gap-3 mt-2">
                <a href="#" className="hover:text-zinc-900 underline underline-offset-2 flex items-center gap-1">
                  {t.contact.portfolio} <LinkIcon size={12} />
                </a>
                <a href="#" className="hover:text-zinc-900 underline underline-offset-2 flex items-center gap-1">
                  {t.contact.github} <Github size={12} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-8">
          <p className="text-base text-zinc-700 leading-7 text-justify">
            {renderTextWithBold(t.summary)}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column (Main Content) */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Honors */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">
                {t.sections.honors}
              </h2>
              <div className="space-y-4">
                {t.honors.map((honor, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-zinc-900">{honor.title}</h3>
                      <span className="text-xs font-bold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600 whitespace-nowrap ml-2">
                        {honor.event}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 italic">
                      {honor.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">
                {t.sections.projects}
              </h2>
              <div className="space-y-6">
                {t.projects.map((proj, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-bold text-lg text-zinc-900 group-hover:text-blue-700 transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono border border-zinc-200 px-2 py-0.5 text-zinc-500 rounded-full">
                        {proj.role}
                      </span>
                    </div>
                    <ul className="list-none space-y-1.5">
                      {proj.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-zinc-700 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-zinc-300">
                          {renderTextWithBold(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="md:col-span-4 space-y-8">
            
            {/* Education */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">
                {t.sections.education}
              </h2>
              <div className="space-y-4">
                {t.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-base text-zinc-900 leading-tight mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-zinc-700 mb-0.5">{edu.degree}</p>
                    <p className="text-xs text-zinc-500 font-mono">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">
                {t.sections.skills}
              </h2>
              <div className="space-y-4">
                {t.skills.map((skill, i) => (
                  <div key={i}>
                    <h3 className="text-xs font-bold uppercase text-zinc-500 mb-1">
                      {skill.category}
                    </h3>
                    <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Creative Experiments */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 border-b border-zinc-100 pb-2">
                {t.sections.experiments}
              </h2>
              <div className="space-y-4">
                {t.experiments.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm text-zinc-900">{exp.title}</h3>
                      <span className="text-[10px] uppercase border border-zinc-200 px-1.5 text-zinc-400">
                        {exp.tag}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {renderTextWithBold(exp.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer for print */}
        <div className="hidden print:block mt-12 pt-8 border-t border-zinc-100 text-center text-xs text-zinc-400">
          Generated by Yu YAO's Portfolio System | {new Date().getFullYear()}
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            background: white;
            color: black;
          }
          /* Hide scrollbars and UI elements */
          ::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
