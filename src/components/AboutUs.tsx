import { motion } from 'motion/react';
import SectionBadge from './SectionBadge';
import TitleReveal from './TitleReveal';

const aboutUs1 = '/assets/about-us-1.jpg';
const aboutUs2 = '/assets/about-us-2.png';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-[#0038a8] font-sans relative overflow-hidden text-white">
      
      {/* Subtle background abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div className="text-left flex flex-col items-start gap-4">
              <SectionBadge tone="dark">About Us</SectionBadge>
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
                <a
                  id="about-learn-more-btn"
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-[#0038a8] font-display font-bold text-sm px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-102 mb-6"
                >
                  Learn More
                </a>
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

    </section>
  );
}
