import { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import hero1 from '@/assets/hero-1.webp';
import hero2 from '@/assets/hero-2.jpeg';
import hero3 from '@/assets/hero-3.webp';

interface HeroProps {
  onOpenDonate: () => void;
}

const HERO_SLIDES = [
  {
    image: hero1,
    badge: "Compassion Ghana Mission 2026",
    title: "EMPOWER",
    handwritten: "Children",
    description: "Releasing children from poverty in Jesus' name. We partner with over 418 local churches in Ghana to deliver life-changing medical care, nutrition, education, and spiritual guidance."
  },
  {
    image: hero2,
    badge: "Sustainable Development Goals",
    title: "TRANSFORM",
    handwritten: "Futures",
    description: "Nurturing local leadership and equipping young minds with practical vocational skills, holistic mentoring, and tertiary education scholarships across Ghana's regions."
  },
  {
    image: hero3,
    badge: "Local Church Partnerships",
    title: "RESTORE",
    handwritten: "Hope",
    description: "Every registered child is connected with dedicated mentors, clean drinking water systems, and complete school supply kits to ensure full classroom success."
  }
];

export default function Hero({ onOpenDonate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById('video-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[110vh] sm:min-h-[120vh] flex items-center justify-center overflow-hidden bg-slate-900 font-sans">
      
      {/* Background Image Slider with Zoom Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide].image}
            alt="Compassion Ghana"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.60, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Dynamic Vignette / Gradient overlays with reduced density but exceptional text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0038a8]/25 to-[#0038a8]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Manual Side Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4 hidden sm:flex justify-between pointer-events-none">
        <button
          onClick={handlePrevSlide}
          className="w-10 h-10 rounded-full bg-black/25 hover:bg-black/55 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 hover:scale-105 pointer-events-auto"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextSlide}
          className="w-10 h-10 rounded-full bg-black/25 hover:bg-black/55 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 hover:scale-105 pointer-events-auto"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center text-white py-20 flex flex-col items-center justify-center">
        
        {/* Tagline Badge removed as requested */}

        {/* Mega Headline */}
        <div className="space-y-1 sm:space-y-3 select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.06, y: -10 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-widest text-white leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              
              <div className="relative inline-block mt-2">
                <span className="font-hand text-5xl sm:text-7xl md:text-8xl text-[#FFD100] block tracking-normal rotate-[-3deg] transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  {HERO_SLIDES[currentSlide].handwritten}
                </span>
                
                <svg viewBox="0 0 100 10" className="absolute -bottom-2 left-0 w-full h-2.5 text-[#FFD100]/40 fill-current pointer-events-none">
                  <path d="M0,5 Q50,9 100,5 T200,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Supporting message with fixed height container to avoid layout shifting */}
        <div className="min-h-[80px] sm:min-h-[60px] flex items-center justify-center mt-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.03, y: -6 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl font-light leading-relaxed font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {HERO_SLIDES[currentSlide].description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-donate-btn"
            onClick={onOpenDonate}
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#FFE359] text-[#0038a8] font-display font-extrabold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 transition-all transform hover:scale-102 cursor-pointer"
          >
            Support Our Mission
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-video-btn"
            onClick={handleScrollToVideo}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/40 font-display font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Watch Our Impact
          </button>
        </motion.div>

      </div>

      {/* Indicators Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3 select-none">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            id={`hero-slide-dot-${idx}`}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx 
                ? 'bg-[#FFD100] w-7' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
