import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const compassionLogo = '/assets/logo-compassion-white.svg';
const skippyLogo = '/assets/logo-skippy-white.svg';

interface FooterProps {
  onOpenDonate?: () => void;
}

export default function Footer({ onOpenDonate }: FooterProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = `/#${id}`;
  };

  const goToPage = (href: string) => {
    window.location.href = href;
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
              className="h-12 w-auto object-contain brightness-0 invert"
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

            {/* Sponsorship Button */}
            {onOpenDonate && (
              <button
                id="footer-donate-btn"
                onClick={onOpenDonate}
                className="bg-[#00A896] hover:bg-[#02C39A] text-white px-5 py-2.5 rounded-full font-display font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 w-fit"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                Sponsor a Child
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
                <button onClick={() => goToPage('/')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('/about')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
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
              <li>
                <button onClick={() => goToPage('/contact')} className="hover:text-yellow-300 cursor-pointer transition-colors flex items-center gap-1.5">
                  Contact Us
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

      {/* Lower Footer: Legal information */}
      <div className="px-4 pb-8 sm:px-8 sm:pb-10">
        <div className="mx-auto max-w-[1650px] border-t border-white/80 pt-12 sm:pt-14">
          <img
            src={skippyLogo}
            alt="Compassion"
            className="h-[76px] w-auto object-contain"
          />
          
          <p className="mt-6 text-sm font-semibold text-white sm:text-base">
            © 2026 Compassion International. All Rights Reserved.
          </p>
          
          <nav aria-label="Legal" className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold text-white sm:text-base">
            <a href="#" className="transition-colors hover:text-yellow-300">Privacy Statement</a>
            <a href="#" className="transition-colors hover:text-yellow-300">Conditions of Use</a>
            <a href="#" className="transition-colors hover:text-yellow-300">Disclosure Statement</a>
            <a href="#" className="transition-colors hover:text-yellow-300">Policies &amp; Standards</a>
            <a href="#" className="transition-colors hover:text-yellow-300">Cookie Preferences</a>
          </nav>

        </div>
      </div>

    </footer>
  );
}
