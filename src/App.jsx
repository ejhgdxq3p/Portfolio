import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Github, Twitter, Mail, ArrowRight, Zap, Waves, Plus } from 'lucide-react';
import Resume from './Resume';

/**
 * 缓动函数
 */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t) => t * t * t;

// 预设图案
const PATTERNS = [
  [
    { x1: -0.15, y1: -0.15, x2: 0.15, y2: 0.15, angle: Math.PI / 4, color: '#002FA7' },
    { x1: 0.15, y1: -0.15, x2: -0.15, y2: 0.15, angle: -Math.PI / 4, color: '#FF007F' },
  ],
  [
    { x1: -0.12, y1: -0.2, x2: 0, y2: 0.15, angle: Math.PI / 2.8, color: '#39FF14' },
    { x1: 0.12, y1: -0.2, x2: 0, y2: 0.15, angle: -Math.PI / 2.8, color: '#002FA7' },
    { x1: -0.2, y1: 0, x2: 0.2, y2: 0, angle: 0, color: '#FFD300' },
  ]
];

class Tape {
  constructor(canvasWidth, canvasHeight, isDarkMode, rhythmMode, targetData = null) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.isDarkMode = isDarkMode;
    this.rhythmMode = rhythmMode;
    this.reset(targetData);
  }

  reset(targetData = null) {
    this.isPatternPart = !!targetData;
    const scale = Math.min(this.canvasWidth, this.canvasHeight);
    
    const lightPalette = ['#002FA7', '#FF007F', '#39FF14', '#FFD300', '#00FFFF', '#FF5F15', '#FF0000'];
    const darkPalette = ['#00FFFF', '#FF00FF', '#CCFF00', '#FFFFFF', '#FF3300', '#7000FF', '#00FF00'];
    const palette = this.isDarkMode ? darkPalette : lightPalette;

    if (this.isPatternPart) {
      this.centerX = this.canvasWidth / 2 + targetData.x1 * scale + (targetData.x2 - targetData.x1) * scale / 2;
      this.centerY = this.canvasHeight / 2 + targetData.y1 * scale + (targetData.y2 - targetData.y1) * scale / 2;
      this.angle = targetData.angle;
      this.maxLength = Math.sqrt(((targetData.x2 - targetData.x1) * scale)**2 + ((targetData.y2 - targetData.y1) * scale)**2) * 1.6;
      this.color = targetData.color || palette[Math.floor(Math.random() * palette.length)];
      this.thickness = 80;
    } else {
      this.centerX = Math.random() * this.canvasWidth;
      this.centerY = Math.random() * this.canvasHeight;
      this.angle = Math.random() * Math.PI;
      this.maxLength = Math.max(this.canvasWidth, this.canvasHeight) * (this.rhythmMode === 'TIDE' ? 1.0 : 0.8);
      this.color = palette[Math.floor(Math.random() * palette.length)];
      this.thickness = Math.random() * 80 + 40;
    }

    this.progress = 0;
    this.state = 'growing';
    
    if (this.rhythmMode === 'TIDE') {
      this.growthSpeed = 0.005 + Math.random() * 0.006; 
      this.shrinkSpeed = 0.012;
      this.stableFrames = this.isPatternPart ? 120 : 150 + Math.random() * 100;
    } else {
      this.growthSpeed = 0.025 + Math.random() * 0.025;
      this.shrinkSpeed = 0.05;
      this.stableFrames = this.isPatternPart ? 100 : 30 + Math.random() * 30;
    }

    this.age = 0;
    this.edgeNoise = Array.from({length: 12}, () => Math.random() * 10 - 5);
  }

  update() {
    if (this.state === 'growing') {
      this.progress += this.growthSpeed;
      if (this.progress >= 1) {
        this.progress = 1;
        this.state = 'stable';
      }
    } else if (this.state === 'stable') {
      this.age++;
      if (this.age > this.stableFrames) {
        this.state = 'shrinking';
        this.progress = 0;
      }
    } else if (this.state === 'shrinking') {
      this.progress += this.shrinkSpeed;
      if (this.progress >= 1) return true;
    }
    return false;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.angle);
    ctx.globalCompositeOperation = this.isDarkMode ? 'screen' : 'multiply';
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.isDarkMode ? 0.85 : 0.75;

    let startX, endX;
    if (this.state === 'growing') {
      const eased = easeOutCubic(this.progress);
      startX = -this.maxLength / 2;
      endX = startX + this.maxLength * eased;
    } else if (this.state === 'stable') {
      startX = -this.maxLength / 2;
      endX = this.maxLength / 2;
    } else {
      const eased = easeInCubic(this.progress);
      startX = -this.maxLength / 2 + this.maxLength * eased;
      endX = this.maxLength / 2;
    }

    const width = endX - startX;
    if (width > 0) {
      ctx.fillRect(startX, -this.thickness / 2, width, this.thickness);
      this.drawTornEdge(ctx, startX, -this.thickness / 2, this.thickness, true);
      this.drawTornEdge(ctx, endX, -this.thickness / 2, this.thickness, false);
    }
    ctx.restore();
  }

  drawTornEdge(ctx, x, y, height, isLeft) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    const steps = 8;
    const stepSize = height / steps;
    for (let i = 0; i <= steps; i++) {
      const offsetX = isLeft ? -this.edgeNoise[i] : this.edgeNoise[i];
      ctx.lineTo(x + offsetX, y + i * stepSize);
    }
    ctx.fill();
  }
}

const ProjectItem = ({ id, title, tags, darkMode, onHover, onClick }) => (
  <div 
    className="group relative border-b border-current py-6 md:py-8 cursor-pointer overflow-hidden"
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
    onClick={onClick}
  >
    <div className="flex justify-between items-end relative z-10">
      <div className="flex items-start gap-4">
        <span className="text-xl font-black opacity-30 italic leading-none">{id}</span>
        <div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:italic transition-all duration-300">
            {title}
          </h3>
          <div className="flex gap-2 mt-2">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest opacity-50 border border-current px-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="transform translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
        <Plus size={40} strokeWidth={3} />
      </div>
    </div>
    {/* Hover时的色块装饰（像胶带贴上去） */}
    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20 -z-0 ${darkMode ? 'bg-white' : 'bg-blue-600'}`}></div>
  </div>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [rhythm, setRhythm] = useState('BURST');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const canvasRef = useRef(null);
  const tapes = useRef([]);
  const patternIndex = useRef(0);

  const projects = [
    { id: '01', title: 'Resume / CV', tags: ['Identity', 'System'], img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800' },
    { id: '02', title: 'Cyber Mesh', tags: ['WebGL', 'Branding'], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
    { id: '03', title: 'Tape Lab', tags: ['Interactive', 'UI'], img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800' },
    { id: '04', title: 'Acid Type', tags: ['Typography'], img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800' },
    { id: '05', title: 'Raw Grid', tags: ['System Design'], img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRhythm(prev => prev === 'BURST' ? 'TIDE' : 'BURST');
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const spawnPattern = () => {
      const pattern = PATTERNS[patternIndex.current % PATTERNS.length];
      pattern.forEach(p => tapes.current.push(new Tape(canvas.width, canvas.height, darkMode, rhythm, p)));
      patternIndex.current++;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      tapes.current = [];
    };

    window.addEventListener('resize', resize);
    resize();

    const patternTimer = setInterval(spawnPattern, rhythm === 'BURST' ? 4000 : 7000);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const targetCount = rhythm === 'TIDE' ? 13 : 5;
      if (tapes.current.filter(t => !t.isPatternPart).length < targetCount) {
        tapes.current.push(new Tape(canvas.width, canvas.height, darkMode, rhythm));
      }
      tapes.current = tapes.current.filter(tape => {
        const shouldDestroy = tape.update();
        tape.draw(ctx);
        return !shouldDestroy;
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(patternTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode, rhythm]);

  return (
    <div className={`min-h-screen transition-colors duration-1000 font-sans overflow-hidden ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      
      {activeProject === '01' && (
        <Resume onClose={() => setActiveProject(null)} />
      )}

      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* 动态悬浮缩略图 (洋气核心) */}
      {hoveredProject && !activeProject && (
        <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center p-20 animate-in fade-in zoom-in duration-500">
           <div className="relative w-full max-w-2xl aspect-video rotate-3 overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src={projects.find(p => p.id === hoveredProject)?.img} 
                className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                alt="preview"
              />
              <div className="absolute inset-0 mix-blend-multiply bg-blue-600/30"></div>
           </div>
        </div>
      )}

      {/* Rhythmic Nav */}
      <nav className="fixed top-0 w-full p-8 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-white">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            {rhythm === 'BURST' ? <Zap size={16} className="text-yellow-400 fill-yellow-400" /> : <Waves size={16} className="text-cyan-400" />}
            <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-70">
               MODE: {rhythm} // FLOW: ACTIVE
            </span>
          </div>
          <span className="text-5xl font-black tracking-tighter leading-none">ARCHIVE.</span>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${darkMode ? 'border-white bg-white text-black' : 'border-zinc-900 bg-zinc-900 text-white'}`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <main className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* 左侧：宣言与标题 */}
          <div className="lg:col-span-5 space-y-12">
            <h1 className="text-[12vw] lg:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase italic">
              New<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: darkMode ? '2px white' : '2px black' }}>Order.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.1] max-w-sm opacity-80">
              捕捉高饱和度下的视觉节奏，让随机性重塑秩序。
            </p>
            <div className="flex gap-4 pt-10">
               <div className="w-12 h-12 border-2 border-current flex items-center justify-center"><Github size={20} /></div>
               <div className="w-12 h-12 border-2 border-current flex items-center justify-center"><Twitter size={20} /></div>
            </div>
          </div>

          {/* 右侧：项目列表（错落排版） */}
          <div className="lg:col-span-7 flex flex-col space-y-4 lg:pt-20">
             <div className="text-xs font-black tracking-[0.5em] uppercase opacity-40 mb-6 flex items-center gap-4">
               <div className="h-[1px] flex-1 bg-current opacity-20"></div>
               Selected Work (2024-2026)
             </div>
             
             {projects.map((proj, index) => (
               <div key={proj.id} style={{ paddingLeft: `${index * 10}%` }}>
                 <ProjectItem 
                    {...proj} 
                    darkMode={darkMode} 
                    onHover={setHoveredProject} 
                    onClick={() => proj.id === '01' ? setActiveProject('01') : null}
                 />
               </div>
             ))}
             
             <button className="group mt-12 py-8 flex items-center gap-6 text-2xl font-black italic hover:gap-10 transition-all">
                GET IN TOUCH <ArrowRight size={40} />
             </button>
          </div>
        </div>
      </main>

      {/* Indicator */}
      <div className="fixed bottom-12 left-12 mix-blend-difference text-white flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={`h-1.5 transition-all duration-1000 ${rhythm === 'BURST' ? 'w-48 bg-yellow-400' : 'w-12 bg-white opacity-20'}`}></div>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Burst Speed</span>
        </div>
        <div className="flex items-center gap-3">
          <div className={`h-1.5 transition-all duration-1000 ${rhythm === 'TIDE' ? 'w-48 bg-cyan-400' : 'w-12 bg-white opacity-20'}`}></div>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Tide Balance</span>
        </div>
      </div>

    </div>
  );
};

export default App;
