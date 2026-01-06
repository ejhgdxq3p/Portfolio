import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Github, Twitter, Mail, ArrowRight, Zap, Waves } from 'lucide-react';

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
    this.rhythmMode = rhythmMode; // 'BURST' 或 'TIDE'
    this.reset(targetData);
  }

  reset(targetData = null) {
    this.isPatternPart = !!targetData;
    const scale = Math.min(this.canvasWidth, this.canvasHeight);
    
    // 极致荧光洋气配色
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
    
    // 潮汐调松逻辑：
    // TIDE 模式不再"慢死"，稍微轻快一点，停留也短一点
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
      if (this.progress >= 1) return true; // 销毁
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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [rhythm, setRhythm] = useState('BURST'); // 'BURST' 或 'TIDE'
  const canvasRef = useRef(null);
  const tapes = useRef([]);
  const patternIndex = useRef(0);

  // 15秒切换一次律动
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
      
      // 调松逻辑：
      // TIDE: 之前是 28，现在调低到 13，这样不仅有堆叠感，背景也能透出来，不至于太堵。
      // BURST: 稍微调稀一点点到 5
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
      
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Rhythmic Nav */}
      <nav className="fixed top-0 w-full p-8 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-white">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            {rhythm === 'BURST' ? <Zap size={16} className="text-yellow-400 fill-yellow-400" /> : <Waves size={16} className="text-cyan-400" />}
            <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-70">
               MODE: {rhythm} // DENSITY: {rhythm === 'TIDE' ? 'MEDIUM-HIGH' : 'LOW'}
            </span>
          </div>
          <span className="text-6xl font-black tracking-tighter leading-none">VIVID.LAB</span>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${darkMode ? 'border-white bg-white text-black' : 'border-zinc-900 bg-zinc-900 text-white'}`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <main className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-[15vw] lg:text-[14rem] font-black leading-[0.75] tracking-tighter uppercase italic">
              Hyper<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: darkMode ? '2px white' : '2px black' }}>Fluoro.</span>
            </h1>
            <p className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.0] max-w-2xl">
              在极速迸发与呼吸堆叠之间，捕捉视觉的洋气感。
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 lg:pt-32">
             <button className={`group w-full py-12 border-4 flex flex-col justify-between items-start px-8 transition-all ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>
                <span className="text-xs font-black mb-16 tracking-[0.6em]">COLLECTIONS</span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-5xl font-black italic">VIBE.</span>
                  <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
                </div>
             </button>
          </div>
        </div>
      </main>

      {/* Density Indicator */}
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
      
      <div className="fixed bottom-12 right-12 hidden md:flex flex-col items-end gap-2 opacity-40 mix-blend-difference text-white text-[10px] font-black tracking-[0.5em] uppercase">
        <span>Raw Design Unit</span>
        <span>©2026 Studio.V2</span>
      </div>

    </div>
  );
};

export default App;
