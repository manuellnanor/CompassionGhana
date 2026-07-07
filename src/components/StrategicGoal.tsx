import { Target, Compass, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { STRATEGIC_GOALS } from '../data';
import SectionBadge from './SectionBadge';
import TitleReveal from './TitleReveal';

export default function StrategicGoal() {
  return (
    <section id="strategic-goal" className="py-20 bg-white font-sans relative overflow-hidden">
      
      {/* Decorative dynamic circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center text-center gap-4">
          <SectionBadge icon={<Target className="w-4 h-4" />}>
            Strategic Target 2030
          </SectionBadge>
          
          <TitleReveal className="font-title font-black text-3xl sm:text-4xl md:text-5xl text-blue-950 tracking-tight leading-tight text-center">
            Strategic Goal
          </TitleReveal>
          
          <div className="h-1.5 w-14 bg-yellow-400 rounded-full" />
          
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-2xl leading-relaxed pt-2">
            To reach and transform the lives of <strong>150,000 children and youth</strong> in poverty-stricken communities by 2030.
          </p>
        </div>

        {/* 3 Strategic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRATEGIC_GOALS.map((goal, idx) => (
            <motion.div
              key={goal.id}
              id={`strategic-goal-${goal.id}-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-lg group border border-gray-100"
            >
              {/* Background Photo */}
              <img
                src={goal.image}
                alt={goal.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Solid dark and color gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:via-blue-950/55 group-hover:from-blue-950/95 transition-all duration-300" />

              {/* Dynamic index marker badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-display font-extrabold text-xs text-white border border-white/20 select-none">
                0{idx + 1}
              </div>

              {/* Card Contents placed on bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-white space-y-3">
                <h3 className="font-title font-extrabold text-xl sm:text-2xl text-white group-hover:text-yellow-300 transition-colors">
                  {goal.title}
                </h3>
                
                <p className="text-gray-200/90 text-xs sm:text-sm leading-relaxed font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {goal.description}
                </p>

                {/* Micro CTA indicator shown on hover */}
                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Part of CIGH 2030 Vision</span>
                  <Compass className="w-3.5 h-3.5 animate-spin" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
