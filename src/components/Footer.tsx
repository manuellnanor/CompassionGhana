import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import compassionLogo from '@/assets/logo-header.png';

interface FooterProps {
  onOpenDonate?: () => void;
}

export default function Footer({ onOpenDonate }: FooterProps) {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#002d86] text-white font-sans relative">
      
      {/* Upper Footer: Branding & Navigation columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12">
          
          {/* Col 1: Logo & Donate Button (3 columns) */}
          <div className="md:col-span-3 space-y-6">
            
            {/* Logo */}
            <img
              src={compassionLogo}
              alt="Compassion International Ghana"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#002d86]">
                  <circle cx="50" cy="30" r="10" fill="currentColor" />
                  <path d="M50 45c-15 0-25 10-25 25h10c0-10 8-15 15-15s15 5 15 15h10c0-15-10-25-25-25z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white leading-none block">Compassion</span>
                <span className="text-[9px] text-yellow-400 font-extrabold uppercase tracking-widest leading-none mt-0.5">In Jesus' name</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
              Releasing children from poverty in Jesus' name. Your compassion changes everything.
            </p>

            {/* Donate Button */}
            {onOpenDonate && (
              <button
                id="footer-donate-btn"
                onClick={onOpenDonate}
                className="bg-[#00A896] hover:bg-[#02C39A] text-white px-5 py-2.5 rounded-full font-display font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 w-fit"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                Donate Now
              </button>
            )}

          </div>

          {/* Col 2: Contact Info (3 columns) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              CONTACT INFO
            </h4>
            
            {/* Address Information Card */}
            <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
              <p className="font-bold text-white text-xs">Compassion International Ghana</p>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <p>
                  1st & 2nd Floors, Seed House, 33 Westland Boulevard,<br />
                  Madina - New Road, Accra, Ghana.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <a href="tel:+233202642506" className="hover:text-yellow-300 transition-colors">
                  +233 20 264 2506 / 7
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <a href="mailto:info.compassionghana@gh.ci.org" className="hover:text-yellow-300 transition-colors break-all">
                  info.compassionghana@gh.ci.org
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links (3 columns) */}
          <div className="md:col-span-3 space-y-5 text-left">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              QUICK MENU
            </h4>
            
            <ul className="space-y-3 text-xs text-gray-300 font-medium">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-us')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('interventions')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  Resources & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media Connections (3 columns) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              SOCIAL CONNECTION
            </h4>
            
            <p className="text-xs text-gray-300 leading-relaxed">
              Stay in touch with daily field updates from school locations, water wells, and child development milestones.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD100] hover:text-[#002d86] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD100] hover:text-[#002d86] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFD100] hover:text-[#002d86] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright bar */}
      <div className="bg-[#001124] py-6 px-4 sm:px-8 border-t border-white/5 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 relative">
          
          <p>© Copyright 2026 | Compassiongh.org | All Rights Reserved</p>
          
          {/* Back to Top button */}
          <button
            id="back-to-top-btn"
            onClick={handleBackToTop}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 p-2.5 rounded-full transition-all shadow-md focus:outline-none hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center group"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-4 h-4 stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>

    </footer>
  );
}
