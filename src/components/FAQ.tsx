import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import TitleReveal from './TitleReveal';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('regions');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Image with rotating stamp */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative max-w-md w-full">
              
              {/* Main Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] relative bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&h=1000&q=80" 
                  alt="Mother feeding child Ghanaian community care" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-Right Rotating circular blue stamp badge */}
              <div className="absolute -top-6 -right-6 w-28 h-28 select-none z-20">
                <div className="w-full h-full relative animate-[spin_25s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <circle cx="50" cy="50" r="37" fill="none" />
                    <text className="text-[9.5px] font-bold fill-[#0038a8] tracking-[0.16em] uppercase">
                      <textPath href="#circlePath">
                        Contact Us • Contact Us • Contact Us • 
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Inner solid circle with heart icon */}
                <div className="absolute inset-0 m-auto w-12 h-12 bg-[#0038a8] rounded-full flex items-center justify-center shadow-lg z-21">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title and Accordions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-100 shadow-sm text-xs text-gray-600 font-medium w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0038a8]" />
              Frequently Asked Questions
            </div>

            {/* Title */}
            <div className="block">
              <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl md:text-5xl text-blue-950 tracking-tight leading-tight">
                Your questions answers with transparency & care
              </TitleReveal>
            </div>

            {/* Accordion Stack */}
            <div className="space-y-4 pt-4">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                  >
                    {/* Trigger Button */}
                    <button
                      id={`faq-trigger-${faq.id}-btn`}
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                    >
                      <span className="font-display font-semibold text-sm sm:text-base text-blue-950 leading-snug pr-4 group-hover:text-[#0038a8] transition-colors duration-200">
                        {idx + 1}. {faq.question}
                      </span>
                      
                      <div className="shrink-0 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full bg-[#0038a8] text-white flex items-center justify-center shadow-sm transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#002d86]' : 'hover:scale-110'
                        }`}>
                          {isOpen ? (
                            <span className="font-bold text-lg leading-none select-none">-</span>
                          ) : (
                            <span className="font-bold text-lg leading-none select-none">+</span>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Answer Area with motion */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 text-gray-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100/50">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
