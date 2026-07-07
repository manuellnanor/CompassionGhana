import { useState } from 'react';
import { Play, RotateCcw, Volume2, Maximize, Pause, Info } from 'lucide-react';
import { motion } from 'motion/react';
import SectionBadge from './SectionBadge';
import TitleReveal from './TitleReveal';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "vNYxuqx9Xq0";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&start=5`;

  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-blue-950 to-[#001733] text-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Split Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex flex-col items-start gap-4">
            <SectionBadge tone="dark">Our Video Story</SectionBadge>
            <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
              Committed to Transforming Lives and Empowering Futures.
            </TitleReveal>
          </div>
          <div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We provide tailored programs that empower children and families, helping them overcome obstacles and achieve sustainable progress. Through our holistic approach, we aim to unlock potential and inspire lasting change.
            </p>
          </div>
        </div>

        {/* Video Player Frame Container */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white/10 relative bg-black aspect-video">
          
          {isPlaying ? (
            <iframe
              id="impact-video-iframe"
              src={embedUrl}
              title="Welcome to Ghana - Compassion International"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 z-10 relative">
              
              {/* Cover thumbnail picture */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Compassion Ghana video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 pointer-events-none" />

              {/* Upper player tag */}
              <div className="flex justify-between items-center z-10">
                <span className="bg-black/60 px-3.5 py-1.5 rounded-full text-[10px] font-bold text-white/90 border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  DOCUMENTARY SPOTLIGHT
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> 5:24 mins
                </span>
              </div>

              {/* Central Large Play Button */}
              <div className="flex items-center justify-center z-10 my-auto">
                <motion.button
                  id="start-video-btn"
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/30 cursor-pointer border-4 border-white transition-colors"
                  aria-label="Play Impact Video"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1.5" />
                </motion.button>
              </div>

              {/* Lower player indicators mimicking YouTube player */}
              <div className="flex items-center justify-between z-10 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-white">Welcome to Ghana - Compassion International</span>
                </div>
                <div className="flex items-center gap-3 text-white/75">
                  <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                  <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
