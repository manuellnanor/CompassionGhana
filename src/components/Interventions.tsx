import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Droplets, BookOpen, Activity, GraduationCap, ShieldAlert } from 'lucide-react';
import { INTERVENTIONS } from '../data';
import TitleReveal from './TitleReveal';
import interventionsBackground from '@/assets/interventions-background.png';

interface InterventionsProps {
  onOpenDonateWithCause: (causeId: string) => void;
}

export default function Interventions({ onOpenDonateWithCause }: InterventionsProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Education Support' | 'Health & Wellness' | 'Clean Water' | 'Nutritional Care' | 'Skills Training' | 'Emergency Response'>('all');

  const filters: Array<{ label: string; value: typeof activeFilter }> = [
    { label: 'Show All Interventions', value: 'all' },
    { label: 'Education Support', value: 'Education Support' },
    { label: 'Health & Medical', value: 'Health & Wellness' },
    { label: 'Clean Water', value: 'Clean Water' },
    { label: 'Nutritional Care', value: 'Nutritional Care' },
    { label: 'Skills Training', value: 'Skills Training' },
    { label: 'Emergency Relief', value: 'Emergency Response' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? INTERVENTIONS 
    : INTERVENTIONS.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education Support':
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'Health & Wellness':
        return <Activity className="w-4 h-4 text-red-500" />;
      case 'Clean Water':
        return <Droplets className="w-4 h-4 text-sky-500" />;
      case 'Nutritional Care':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Skills Training':
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-purple-500" />;
    }
  };

  const getCauseIdFromCategory = (category: string) => {
    switch (category) {
      case 'Clean Water':
        return 'water';
      case 'Health & Wellness':
        return 'medical';
      case 'Education Support':
      case 'Skills Training':
        return 'education';
      default:
        return 'general';
    }
  };

  return (
    <section id="interventions" className="py-20 bg-[#0038a8]/5 font-sans relative overflow-hidden">
      <motion.img
        src={interventionsBackground}
        alt=""
        aria-hidden="true"
        initial={{ y: -40 }}
        whileInView={{ y: 40 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-x-0 -top-16 h-[calc(100%+8rem)] w-full object-cover opacity-[0.08] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Interventions</span>
          <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl text-[#0038a8] tracking-tight">
            Our Program Interventions
          </TitleReveal>
          <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pt-1">
            We target multiple dimensions of poverty by equipping kids and local households with customized social, medical, physical, and intellectual support.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f, idx) => (
            <button
              key={idx}
              id={`filter-${f.value}-btn`}
              onClick={() => setActiveFilter(f.value)}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-[#0038a8] text-white border-[#0038a8] shadow-sm shadow-blue-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Interventions Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                id={`intervention-${item.id}-card`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
              >
                
                {/* Image panel */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm py-1.5 px-3 rounded-full text-[10px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    {item.category}
                  </div>
                </div>

                {/* Text description panel */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Call to action inside card */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Sustainable Impact
                    </span>
                    <button
                      id={`donate-for-${item.id}-btn`}
                      onClick={() => onOpenDonateWithCause(getCauseIdFromCategory(item.category))}
                      className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      Sponsor Care
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Image Layout reflecting the structure shown in image (Interventions Visual Grid) */}
        <div className="mt-16 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-6">
            <h4 className="font-title font-bold text-gray-800 text-sm uppercase tracking-widest">
              Gallery & Daily Realities
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-48 rounded-2xl overflow-hidden border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1541913079237-773172087a30?auto=format&fit=crop&w=500&q=80" 
                alt="Ghanaian school child near water" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs font-semibold">
                Clean Water Access
              </div>
            </div>

            <div className="h-48 rounded-2xl overflow-hidden border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80" 
                alt="Ghana children studying happily" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs font-semibold">
                Primary Education Resources
              </div>
            </div>

            <div className="h-48 rounded-2xl overflow-hidden border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1584515901357-32b706d34ee4?auto=format&fit=crop&w=500&q=80" 
                alt="Medical health checks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs font-semibold">
                Medical Screenings
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
