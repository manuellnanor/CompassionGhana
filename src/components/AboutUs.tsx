import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, BookOpen, Heart, ShieldAlert, Award, Sparkles, X } from 'lucide-react';
import TitleReveal from './TitleReveal';
import aboutUs1 from '@/assets/about-us-1.jpg';
import aboutUs2 from '@/assets/about-us-2.png';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about-us" className="py-20 bg-[#0038a8] font-sans relative overflow-hidden text-white">
      
      {/* Subtle background abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div className="text-left">
              <span className="text-xs font-bold text-[#FFD100] uppercase tracking-widest block mb-1">About Us</span>
              <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight tracking-tight text-white">
                Committed to Transforming Lives and Empowering Futures.
              </TitleReveal>
            </div>

            {/* Main Painting Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10"
            >
              <img 
                src={aboutUs1} 
                alt="Compassion Ghana representative speaking at a podium" 
                className="w-full h-[320px] sm:h-[420px] object-cover hover:scale-102 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                Compassion International Ghana (CIGH) was established in 2005 and partners with evangelical churches, currently collaborating with over 418 church partners across 33 denominations in 12 out of 16 regions of Ghana. CIGH responds to the needs of over 99,394 children, youth, and their families living in poverty. Our mission involves facilitating opportunities for children and youth to develop their God-given potential, empowering them through spiritual nurturing, career development, health, and overall well-being.
              </p>

              {/* Learn More Button (White Capsule with Royal Blue Text) */}
              <div>
                <button
                  id="about-learn-more-btn"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-[#0038a8] font-display font-bold text-sm px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-102 mb-6"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Bottom Leadership / Assembly Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10 mt-2"
            >
              <img 
                src={aboutUs2} 
                alt="Compassion Ghana team group photo" 
                className="w-full h-[242px] sm:h-[308px] object-cover hover:scale-102 transition-transform duration-500"
              />
            </motion.div>
          </div>

        </div>

      </div>

      {/* Interactive "Learn More" Detail Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              className="absolute inset-0" 
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="about-detail-modal"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden font-sans"
            >
              {/* Header */}
              <div className="bg-[#0038a8] text-white px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="font-title font-bold text-lg">Compassion Ghana At A Glance</span>
                </div>
                <button 
                  id="close-about-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-white/85 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-gray-700">
                
                {/* 4 Pillars of Child Development */}
                <div className="space-y-4">
                  <h4 className="font-title font-extrabold text-[#0038a8] text-base flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#0038a8]" /> The 4 Core Pillars of Holistic Child Development
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                      <h5 className="font-bold text-gray-800 text-sm flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-500" /> Spiritual Development</h5>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        Helping children discover their worth in Jesus Christ, developing an ethical foundation grounded in scripture, and encouraging community service.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                      <h5 className="font-bold text-gray-800 text-sm flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-blue-500" /> Cognitive Development</h5>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        Ensuring school attendance, tutoring support, language skills, digital literacy, and practical vocational trade skills training.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                      <h5 className="font-bold text-gray-800 text-sm flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-500" /> Physical Development</h5>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        Providing regular dental/medical checkups, nutrient supplements, clean water filters, and active physical training and sports activities.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                      <h5 className="font-bold text-gray-800 text-sm flex items-center gap-1.5"><ShieldAlert className="w-4 h-4 text-amber-500" /> Social-Emotional</h5>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        Providing professional child counseling, safety lessons on child rights and self-protection, and team-building relationship groups.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accountability section */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-title font-extrabold text-[#0038a8] text-sm">Financial Transparency & Stewardship</h4>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    We take financial accountability seriously. At least <strong>80% of all sponsorship and donations</strong> go directly to programs that benefit the registered children. Every cedi and dollar is scrutinized by rigorous internal and external audits to secure stellar and honest administration of funds.
                  </p>
                </div>

                {/* Footer action */}
                <div className="pt-4 flex justify-end">
                  <button
                    id="close-about-modal-bottom-btn"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#0038a8] hover:bg-[#002d86] text-white font-display font-bold text-xs px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
