import React, { useState } from 'react';
import { Download, Globe, ArrowLeft, Mail, Phone, Link as LinkIcon, Github, MapPin, Award, ExternalLink } from 'lucide-react';

const CleanResume = ({ onClose }) => {
  const [lang, setLang] = useState('en');

  // 内容数据
  const content = {
    en: {
      name: "Yu YAO",
      tagline: "Electronics Engineer & Creative Technologist",
      contact: {
        phone: "+86 177 6928 7607",
        email: "39asdfghjkl@gmail.com",
        portfolio: "Portfolio Link",
        github: "github.com/ejhgdxq3p",
        location: "Beijing, China"
      },
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
          period: "09/2023 – 06/2026",
          details: ""
        },
        {
          school: "Nanjing University of Posts & Telecomm",
          degree: "B.Eng. in Electronic Science",
          period: "09/2019 – 06/2023",
          details: "Core: FPGA Design, Circuits",
          gpa: "GPA: 4.11/5.0"
        }
      ],
      honors: [
        {
          title: "Winner, TikTok AI Changemaker Plan",
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
            "**Impact:** Validated by TikTok AI Changemaker Plan; transformed health management into a gamified quest."
          ]
        },
        {
          title: "Adventure X: \"What Makes Us Human\"",
          role: "Lead Software Engineer (2-Person Team)",
          tags: ["IoT", "WeChat Mini-app", "Full-stack"],
          items: [
            "Solely responsible for the **entire software stack** (Mini-program & IoT logic) in a compact 2-person team.",
            "Designed a 'Phygital' social interface to gamify ice-breaking interactions in physical spaces."
          ]
        },
        {
          title: "The Smiling Man",
          role: "Solo Game Developer",
          tags: ["Meta-Horror", "Matter.js", "Narrative"],
          items: [
            "Developed an experimental meta-horror puzzle game using **HTML5 Canvas** and **Matter.js**.",
            "Designed a 'Window-as-Controller' mechanic where players manipulate UI containers to interact with an eldritch entity.",
            "Explored the boundaries of web-based interactive storytelling."
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
          title: "Promptoshop: Semantic Signal Processor (Text-Photoshop)",
          role: "Solo Developer & Designer",
          tags: ["GenAI", "HCI", "Claude Code"],
          items: [
            "Won 2nd Place at Ship It Sunday Hackathon; delivered a fully functional MVP in just 6 hours leveraging **Claude Code** for agentic workflow.",
            "Pioneered a **Semantic Grading** interface, mapping Photoshop-style signal processing (Contrast/Saturation curves) directly to LLM inference parameters (Temperature/Top_P) via DeepSeek.",
            "Reframed text editing as high-dimensional signal manipulation, enabling non-linear control over logic density and emotional intensity."
          ]
        },
        {
          title: "NeuroVoxel: Edge-AI Medical Segmentation",
          role: "Solo Researcher",
          tags: ["Medical AI", "Privacy", "Edge Computing"],
          items: [
            "Built an offline, privacy-first medical 'Copilot' deploying **Florence-2** and **SAM 2** on consumer GPUs.",
            "Achieved **Zero-shot organ localization** with <3s latency, bypassing cloud API privacy risks."
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
        { category: "AI & Multimodal Systems", items: "Python, PyTorch, CUDA, Florence-2 (VLM), CLIP, DeepSeek (R1), Qwen2.5-VL, Gemini, Claude, NIfTI/DICOM (Nibabel), OpenCV, bitsandbytes" },
        { category: "Agent & AI Workflow Engineering", items: "Tool Calling, Multi-step Reasoning, First-Principles Prompting, Cursor, Claude Code, OpenAI Codex, Gemini CLI, ComfyUI, LangChain, LangGraph, Gradio, FastAPI, RESTful APIs" },
        { category: "Creative Technology & Interactive Systems", items: "Unity, Godot, TouchDesigner, HTML5 Canvas, Matter.js, GenAI Pipelines (Text/Image/3D), React, Vue" },
        { category: "Hardware & Physical Computing", items: "FPGA (Verilog), Signal Processing, PCB Design, Low-field MRI Systems, RF Coil Design, MRI Physics, Edge GPU Deployment" }
      ]
    },
    zh: {
      name: "姚 雨",
      tagline: "电子工程师 & 创意技术专家",
      contact: {
        phone: "+86 177 6928 7607",
        email: "39asdfghjkl@gmail.com",
        portfolio: "作品集链接",
        github: "github.com/ejhgdxq3p",
        location: "中国 北京"
      },
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
          period: "2023.09 – 2026.06",
          details: ""
        },
        {
          school: "南京邮电大学",
          degree: "电子科学与技术 学士",
          period: "2019.09 – 2023.06",
          details: "核心课程: FPGA设计, 电路系统",
          gpa: "GPA: 4.11/5.0"
        }
      ],
      honors: [
        {
          title: "优胜奖, TikTok AI创变者计划",
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
            "**影响：** 获TikTok AI创变者计划验证；将被动内容消费转化为游戏化健康任务。"
          ]
        },
        {
          title: "Adventure X: \"何以为人\"",
          role: "软件负责人 (2人团队)",
          tags: ["IoT", "微信小程序", "全栈开发"],
          items: [
            "在2人团队中独立负责**全部软件栈**（小程序前端+IoT逻辑）的设计与实现。",
            "设计了一套融合IoT与实时的'虚实结合'接口，解决线下社交破冰问题。"
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
          title: "Promptoshop: 语义信号处理引擎 (文字版 Photoshop)",
          role: "独立开发 & 设计",
          tags: ["生成式 AI", "人机交互", "Claude Code"],
          items: [
            "荣获 Ship It Sunday 黑客松 第二名 (2nd Place)；在 6小时 内利用 **Claude Code** 辅助编程完成全栈 (React + FastAPI) 落地。",
            "首创**语义调色**交互范式，将 Photoshop 的图像处理逻辑（如对比度、饱和度曲线）数学映射为 DeepSeek 模型的推理参数 (Temperature/Top_P)。",
            "实现了对文本逻辑密度与情绪色彩的**像素级**非线性编辑，将传统的 Chat 交互重构为可视化的信号控制台。"
          ]
        },
        {
          title: "NeuroVoxel: 边缘AI医疗分割",
          role: "独立研究员",
          tags: ["医疗 AI", "隐私计算", "边缘计算"],
          items: [
            "构建离线、隐私优先的医疗 Copilot，在消费级显卡上部署 **Florence-2** 和 **SAM 2**。",
            "实现**零样本(Zero-shot)器官定位**，延迟<3秒，解决医院数据隐私痛点。"
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
        { category: "AI & 多模态系统", items: "Python, PyTorch, CUDA, Florence-2 (VLM), CLIP, DeepSeek (R1), Qwen2.5-VL, Gemini, Claude, NIfTI/DICOM (Nibabel), OpenCV, bitsandbytes" },
        { category: "智能体 & AI工作流工程", items: "工具调用, 多步推理, 第一性原理提示, Cursor, Claude Code, OpenAI Codex, Gemini CLI, ComfyUI, LangChain, LangGraph, Gradio, FastAPI, RESTful APIs" },
        { category: "创意技术与交互系统", items: "Unity, Godot, TouchDesigner, HTML5 Canvas, Matter.js, GenAI管线 (文本/图像/3D), React, Vue" },
        { category: "硬件与物理计算", items: "FPGA (Verilog), 信号处理, PCB设计, 低场MRI系统, 射频线圈设计, MRI物理, 边缘GPU部署" }
      ]
    }
  };

  const t = content[lang];

  const handlePrint = () => {
    window.print();
  };

  // Helper to render bold text correctly
  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Helper to render skills text with label-style tags (simplified format)
  const renderSkillsText = (text) => {
    // Now format is simpler: just split by commas (English or Chinese) and create tags
    const tags = text.split(/[,，]/).map(tag => tag.trim()).filter(tag => tag.length > 0);
    
    return (
      <div className="flex flex-wrap gap-0.5">
        {tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="text-[9px] bg-slate-100 px-1 py-0.5 rounded text-slate-600">
            {tag}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 overflow-y-auto print:overflow-visible print:bg-white animate-in slide-in-from-bottom duration-500">
      
      {/* Control Bar */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white/80 backdrop-blur-md border-b border-slate-200 print:hidden">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 font-medium"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
        
        <div className="flex gap-3">
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
      </div>

      {/* A4 Paper Container */}
      <div className="max-w-[210mm] mx-auto my-8 bg-white shadow-2xl print:shadow-none print:m-0 min-h-[297mm] p-[10mm] md:p-[12mm] relative print:w-[210mm] print:max-w-[210mm]">
        
        {/* COMPACT HEADER */}
        <header className="border-b-2 border-slate-900 pb-4 mb-5 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900 leading-none mb-1">{t.name}</h1>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t.tagline}</p>
          </div>
          
          <div className="text-right text-xs text-slate-600 font-medium space-y-1">
             <div className="flex items-center justify-end gap-3">
               <span className="flex items-center gap-1"><Phone size={12} className="text-slate-400" /> {t.contact.phone}</span>
               <span className="flex items-center gap-1"><Mail size={12} className="text-slate-400" /> {t.contact.email}</span>
               <span className="flex items-center gap-1"><MapPin size={12} className="text-slate-400" /> {t.contact.location}</span>
             </div>
             <div className="flex items-center justify-end gap-3">
               <span className="flex items-center gap-1"><ExternalLink size={12} className="text-slate-400" /> {t.contact.portfolio}</span>
               <span className="flex items-center gap-1"><Github size={12} className="text-slate-400" /> {t.contact.github}</span>
             </div>
          </div>
        </header>

        {/* MAIN LAYOUT: 2 COLUMNS */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (MAIN CONTENT) - 8/12 */}
          <div className="col-span-12 md:col-span-8 print:col-span-8 space-y-5">
            
            {/* Honors */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-1 flex items-center gap-2">
                <Award size={14} /> {t.sectionTitles.honors}
              </h2>
              <div className="space-y-2">
                {t.honors.map((h, i) => (
                  <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 print:border-slate-200">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-slate-900">{h.title}</h3>
                      <span className="text-xs font-semibold text-slate-500 whitespace-nowrap ml-2">{h.event}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{h.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-1">
                {t.sectionTitles.projects}
              </h2>
              <div className="space-y-4">
                {t.projects.map((p, i) => (
                  <div key={i} className="group relative pl-4 border-l-2 border-slate-200 hover:border-slate-400 transition-colors">
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base text-slate-900">{p.title}</h3>
                      <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {p.role}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex gap-2 mb-1.5">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-outside ml-3 space-y-0.5">
                      {p.items.map((item, idx) => (
                        <li key={idx} className="text-xs leading-relaxed text-slate-700">
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
          <div className="col-span-12 md:col-span-4 print:col-span-4 space-y-6">
            
            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-1">
                {t.sectionTitles.education}
              </h2>
              <div className="space-y-3">
                {t.education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">{edu.school}</h3>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">{edu.degree}</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">{edu.period}</p>
                    {edu.gpa && (
                      <p className="text-[10px] text-slate-900 font-bold mt-0.5">{edu.gpa}</p>
                    )}
                    {edu.details && (
                      <p className="text-[10px] text-slate-500 mt-0.5 italic">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-1">
                {t.sectionTitles.skills}
              </h2>
              <div className="space-y-2">
                {t.skills.map((s, i) => (
                  <div key={i}>
                    <h3 className="text-[10px] font-bold uppercase text-slate-900 mb-1">{s.category}</h3>
                    <div className="border-l-2 border-slate-200 pl-2">
                      {renderSkillsText(s.items)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Creative Experiments */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-1">
                {t.sectionTitles.experiments}
              </h2>
              <div className="space-y-2">
                {t.experiments.map((exp, i) => (
                  <div key={i} className="bg-slate-50 p-2 rounded border border-slate-100">
                    <div className="flex justify-between items-center mb-0.5">
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
