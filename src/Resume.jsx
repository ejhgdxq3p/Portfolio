import React, { useState } from 'react';
import { Download, Globe, ArrowLeft, Mail, Phone, Link as LinkIcon, Github, MapPin, Award, ExternalLink } from 'lucide-react';

const CleanResume = () => {
  const [lang, setLang] = useState('en');

  // 内容数据
  const content = {
    en: {
      name: "Yu YAO",
      tagline: "Electronics Engineer & Creative Technologist",
      contact: {
        phone: "+86 177 6928 7607",
        email: "2717177316@qq.com", // Updated based on uploaded file
        portfolio: "Portfolio Link",
        github: "github.com/ejhgdxq3p",
        location: "Beijing, China"
      },
      summary: "An electronics engineer and creative technologist bridging the chasm between hardware precision and AI creativity. From building low-field MRI systems to deploying bio-hacking agents, I develop full-stack solutions to **gamify reality**. I am dedicated to defining a future where Game dynamics and AI dissolve the boundaries of human interaction.",
      sectionTitles: {
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
          period: "09/2023 – 06/2026 (Expected)",
          details: "GPA: Top 10% | Core: Digital Signal Processing, Deep Learning"
        },
        {
          school: "Nanjing University of Posts & Telecomm",
          degree: "B.Eng. in Electronic Science",
          period: "09/2019 – 06/2023",
          details: "Core: FPGA Design, Circuits"
        }
      ],
      honors: [
        {
          title: "Winner, Douyin AI Changemaker Plan",
          event: "IntuitionX Hackathon 2026",
          desc: "Awarded for 'True Formula' AI Agent (Software Track)."
        },
        {
          title: "Grand Prize, Adventure X 2025",
          event: "China's Largest Hackathon",
          desc: "Theme: 'What Makes Us Human' (Phygital Social System)."
        }
      ],
      projects: [
        {
          title: "True Formula: AI Bio-Hacking Agent",
          role: "Solo Developer & Designer",
          tags: ["Multi-modal AI", "DeepSeek R1", "Full-stack"],
          items: [
            "Created a 'Digital Pharmacist' agent parsing unstructured videos into scientific schedules using **First Principles Reasoning**.",
            "Integrated **DeepSeek R1** (Logic) and **Qwen2.5-VL** (Vision) to detect pharmacological conflicts.",
            "**Impact:** Validated by Douyin AI Changemaker Plan; transformed health management into a gamified quest."
          ]
        },
        {
          title: "Adventure X: \"What Makes Us Human\"",
          role: "Lead Interaction Designer",
          tags: ["IoT", "WeChat Mini-app", "Social Design"],
          items: [
            "Designed a 'Phygital' social interface utilizing **IoT sensors** and **real-time synchronization**.",
            "Solved the 'social friction' problem by gamifying ice-breaking interactions in physical spaces."
          ]
        },
        {
          title: "NeuroVoxel: Edge-AI Medical Segmentation",
          role: "Solo Researcher",
          tags: ["Medical AI", "Privacy", "Edge Computing"],
          items: [
            "Built an offline, privacy-first medical 'Copilot' deploying **Florence-2** and **SAM 2** on consumer GPUs (RTX 4090).",
            "Achieved **Zero-shot organ localization** with <3s latency, bypassing cloud API privacy risks."
          ]
        },
        {
          title: "Portable Low-Field MRI System",
          role: "Hardware Lead",
          tags: ["FPGA", "Signal Processing", "Hardware"],
          items: [
            "Constructed a desktop MRI scanner from scratch, featuring custom **FPGA** scheduling and RF coil fabrication.",
            "Demonstrated deep understanding of physical sensing layers essential for future BCI interfaces."
          ]
        },
        {
          title: "The Smiling Man",
          role: "Solo Game Developer",
          tags: ["Meta-Horror", "Matter.js", "Narrative"],
          items: [
            "Developed an experimental meta-horror puzzle game using **HTML5 Canvas** and **Matter.js**.",
            "Designed a 'Window-as-Controller' mechanic to explore narrative boundaries and player agency."
          ]
        }
      ],
      experiments: [
        {
          title: "OddBites (AIGC Game)",
          desc: "Strategy game integrating **Tripo 3D API** & **Godot** for generative assets.",
          tag: "Solo"
        }
      ],
      skills: [
        { category: "AI & Software", items: "Python, PyTorch, DeepSeek/LLM Integration, ComfyUI, React/Vue, Cursor (AI Workflow)." },
        { category: "Creative Tech", items: "Unity, Godot, TouchDesigner, GenAI Pipeline." },
        { category: "Hardware", items: "FPGA (Verilog), PCB Design, Signal Processing, MRI Physics." }
      ]
    },
    zh: {
      name: "姚 雨",
      tagline: "电子工程师 & 创意技术专家",
      contact: {
        phone: "+86 177 6928 7607",
        email: "2717177316@qq.com",
        portfolio: "作品集链接",
        github: "github.com/ejhgdxq3p",
        location: "中国 北京"
      },
      summary: "一位致力于弥合硬件精度与AI创造力鸿沟的电子工程师。从构建核磁共振系统到部署AI智能体，我开发全栈解决方案以**游戏化现实**。我致力于探索游戏动力学与人工智能如何消融人机交互的边界。",
      sectionTitles: {
        education: "教育背景",
        honors: "荣誉奖项",
        projects: "核心项目",
        experiments: "创意实验",
        skills: "技术技能"
      },
      education: [
        {
          school: "北京大学",
          degree: "电子信息 硕士",
          period: "2023.09 – 2026.06 (预计)",
          details: "GPA: 前10% | 核心课程: 数字信号处理, 深度学习"
        },
        {
          school: "南京邮电大学",
          degree: "电子科学与技术 学士",
          period: "2019.09 – 2023.06",
          details: "核心课程: FPGA设计, 电路系统"
        }
      ],
      honors: [
        {
          title: "优胜奖, 抖音AI创变者计划",
          event: "IntuitionX 2026",
          desc: "凭借'真成分'AI智能体获奖 (软件赛道)。"
        },
        {
          title: "特等奖 (Grand Prize), Adventure X",
          event: "2025 中国最大黑客松",
          desc: "主题：'何以为人' (物理数字融合社交系统)。"
        }
      ],
      projects: [
        {
          title: "真成分 (True Formula)",
          role: "独立开发 & 设计",
          tags: ["多模态 AI", "DeepSeek R1", "全栈"],
          items: [
            "开发'数字药剂师'智能体，利用**第一性原理推理**将短视频解析为科学营养计划。",
            "集成 **DeepSeek R1** (推理) 和 **Qwen2.5-VL** (视觉) 检测药理冲突。",
            "**影响：** 获抖音AI创变者计划验证；将被动内容消费转化为游戏化健康任务。"
          ]
        },
        {
          title: "Adventure X: \"何以为人\"",
          role: "首席交互设计",
          tags: ["IoT", "微信小程序", "社交设计"],
          items: [
            "设计了一套融合 **IoT传感器** 与 **实时同步** 技术的'虚实结合'社交接口。",
            "通过游戏化机制解决线下空间的'社交摩擦'问题，获黑客松全场大奖。"
          ]
        },
        {
          title: "NeuroVoxel: 边缘AI医疗分割",
          role: "独立研究员",
          tags: ["医疗 AI", "隐私计算", "边缘计算"],
          items: [
            "构建离线、隐私优先的医疗 Copilot，在消费级显卡(4090)上部署 **Florence-2** 和 **SAM 2**。",
            "实现**零样本(Zero-shot)器官定位**，延迟<3秒，解决医院数据隐私痛点。"
          ]
        },
        {
          title: "便携式低场磁共振系统",
          role: "硬件负责人",
          tags: ["FPGA", "信号处理", "硬件架构"],
          items: [
            "从零构建台式MRI扫描仪，负责定制 **FPGA** 信号调度与射频线圈制作。",
            "展现了对底层物理感知层的深度理解，为未来BCI接口打下基础。"
          ]
        },
        {
          title: "笑面人 (The Smiling Man)",
          role: "独立游戏开发",
          tags: ["元恐怖", "Matter.js", "叙事"],
          items: [
            "使用 **HTML5 Canvas** 和 **Matter.js** 开发的实验性元恐怖解谜游戏。",
            "设计了'窗口即控制器'的机制，探索网页端叙事边界与玩家能动性。"
          ]
        }
      ],
      experiments: [
        {
          title: "OddBites (AIGC 3D游戏)",
          desc: "结合 **Tripo API** 与 **Godot** 的策略游戏，生成实时3D资产。",
          tag: "独立"
        }
      ],
      skills: [
        { category: "AI & 软件", items: "Python, PyTorch, DeepSeek/LLM, ComfyUI, React/Vue, Cursor (AI流)." },
        { category: "创意技术", items: "Unity, Godot, TouchDesigner, GenAI Pipeline." },
        { category: "硬件工程", items: "FPGA (Verilog), PCB Design, Signal Processing, MRI Physics." }
      ]
    }
  };

  const t = content[lang];

  const handlePrint = () => {
    window.print();
  };

  // Helper to render bold text correctly
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans print:p-0 print:bg-white text-slate-800">
      
      {/* Control Bar */}
      <div className="fixed top-6 right-6 flex gap-3 print:hidden z-50">
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-all text-sm font-medium"
        >
          <Globe size={16} />
          {lang === 'en' ? '中文' : 'English'}
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all text-sm font-medium"
        >
          <Download size={16} />
          Save PDF
        </button>
      </div>

      {/* A4 Paper Container */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-[12mm] md:p-[15mm] relative">
        
        {/* HEADER */}
        <header className="border-b-2 border-slate-900 pb-5 mb-6">
          <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 mb-2">{t.name}</h1>
          <p className="text-xl font-light text-slate-600 mb-4">{t.tagline}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
             <div className="flex items-center gap-1.5">
               <Phone size={14} className="text-slate-400" /> {t.contact.phone}
             </div>
             <div className="flex items-center gap-1.5">
               <Mail size={14} className="text-slate-400" /> {t.contact.email}
             </div>
             <div className="flex items-center gap-1.5">
               <MapPin size={14} className="text-slate-400" /> {t.contact.location}
             </div>
             <div className="flex items-center gap-1.5">
               <ExternalLink size={14} className="text-slate-400" /> {t.contact.portfolio}
             </div>
             <div className="flex items-center gap-1.5">
               <Github size={14} className="text-slate-400" /> {t.contact.github}
             </div>
          </div>
        </header>

        {/* PROFILE SUMMARY */}
        <section className="mb-8">
          <p className="text-sm leading-relaxed text-justify text-slate-700">
            {renderText(t.summary)}
          </p>
        </section>

        {/* MAIN LAYOUT: 2 COLUMNS */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (MAIN CONTENT) - 8/12 */}
          <div className="col-span-12 md:col-span-8 space-y-7">
            
            {/* Honors */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-1 flex items-center gap-2">
                <Award size={14} /> {t.sectionTitles.honors}
              </h2>
              <div className="space-y-3">
                {t.honors.map((h, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-100 print:border-slate-200">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-slate-900">{h.title}</h3>
                      <span className="text-xs font-semibold text-slate-500 whitespace-nowrap ml-2">{h.event}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{h.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-1">
                {t.sectionTitles.projects}
              </h2>
              <div className="space-y-5">
                {t.projects.map((p, i) => (
                  <div key={i} className="group relative pl-4 border-l-2 border-slate-200 hover:border-slate-400 transition-colors">
                    <div className="flex flex-wrap justify-between items-baseline mb-1.5">
                      <h3 className="font-bold text-base text-slate-900">{p.title}</h3>
                      <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {p.role}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex gap-2 mb-2">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-outside ml-3 space-y-1">
                      {p.items.map((item, idx) => (
                        <li key={idx} className="text-xs leading-5 text-slate-700">
                          {renderText(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (SIDEBAR) - 4/12 */}
          <div className="col-span-12 md:col-span-4 space-y-8">
            
            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-1">
                {t.sectionTitles.education}
              </h2>
              <div className="space-y-4">
                {t.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">{edu.school}</h3>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">{edu.degree}</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{edu.period}</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-1">
                {t.sectionTitles.skills}
              </h2>
              <div className="space-y-3">
                {t.skills.map((s, i) => (
                  <div key={i}>
                    <h3 className="text-[10px] font-bold uppercase text-slate-400 mb-1">{s.category}</h3>
                    <p className="text-xs font-medium text-slate-800 leading-normal border-l-2 border-slate-200 pl-2">
                      {s.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Creative Experiments */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-1">
                {t.sectionTitles.experiments}
              </h2>
              <div className="space-y-3">
                {t.experiments.map((exp, i) => (
                  <div key={i} className="bg-slate-50 p-2 rounded border border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-xs text-slate-900">{exp.title}</h3>
                      <span className="text-[10px] border border-slate-200 px-1 rounded text-slate-400">{exp.tag}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      {renderText(exp.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 w-full text-center print:block hidden">
          <p className="text-[10px] text-slate-300 uppercase tracking-widest">
            Portfolio & CV - Yu YAO - 2026
          </p>
        </div>

      </div>
    </div>
  );
};

export default CleanResume;