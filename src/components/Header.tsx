import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const compassionLogo = '/assets/logo-header.png';

interface HeaderProps {
  onOpenDonate: () => void;
}

export default function Header({ onOpenDonate }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile sub-menu toggles
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(!isHomePage || window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(
        pathname === '/about'
          ? 'about-us'
          : pathname === '/contact'
            ? 'footer'
            : pathname === '/programs-and-interventions'
              ? 'work'
              : 'home'
      );
      return;
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'about-us', 'interventions', 'faq', 'footer'];
      
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isHomePage, pathname]);

  const goHome = () => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    router.push('/');
  };

  const goToRoute = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isParentActive = (parent: string) => {
    if (parent === 'about' && (activeSection === 'about-us' || activeSection === 'partners')) return true;
    if (parent === 'work' && (activeSection === 'work' || activeSection === 'interventions')) return true;
    if (parent === 'resources' && (activeSection === 'faq' || activeSection === 'video-section')) return true;
    return false;
  };

  const getNavItemClass = (id: string, isParent: boolean = false) => {
    const base = "px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 cursor-pointer flex items-center gap-1 select-none whitespace-nowrap outline-none";
    const isActive = isParent ? isParentActive(id) : activeSection === id;
    if (isActive) {
      return `${base} bg-white text-[#0038a8] shadow-sm`;
    }
    return `${base} text-white hover:text-white hover:bg-white/15`;
  };

  return (
    <header className="w-full z-40 fixed top-0 left-0 transition-all duration-500 ease-out">
      {/* Top Banner (Contact info & socials) */}
      <div className={`w-full text-white text-xs border-b overflow-hidden transition-all duration-500 ease-out font-sans ${
        isScrolled
          ? 'hidden h-0 max-h-0 border-0 opacity-0 bg-[#002d86] pointer-events-none'
          : 'max-h-14 opacity-100 bg-black/15 border-white/5'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-8 flex flex-row justify-between items-center gap-3 transition-all duration-500 ease-out ${
          isScrolled ? 'py-0' : 'py-2'
        }`}>
          <div className="flex min-w-0 items-center justify-start gap-4 sm:gap-6">
            <a href="tel:+233202642506" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span className="truncate">+233 20 264 2506 - 7 / 50 153 3674</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a href="mailto:info.compassionghana@gh.ci.org" className="hidden sm:flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-yellow-400" />
              <span>info.compassionghana@gh.ci.org</span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-4 justify-end">
            <span className="text-white/60 text-[11px] hidden md:inline">Follow us:</span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors bg-white/10 p-1 rounded-full"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-yellow-300 transition-colors bg-white/10 p-1 rounded-full"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors bg-white/10 p-1 rounded-full"><Instagram className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation bar */}
      <nav className={`w-full transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-[#0038a8]/95 shadow-lg backdrop-blur-md py-3' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo and Ghana flag */}
          <button 
            id="logo-home-btn"
            onClick={goHome} 
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Compassion International Ghana home"
          >
            <img
              src={compassionLogo}
              alt="Compassion International Ghana"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105 sm:h-14"
            />
            {/* Compassion custom SVG logo icon */}
            <div className="hidden relative w-10 h-10 bg-white rounded-full items-center justify-center shadow-md p-1 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#024B87]">
                <circle cx="50" cy="30" r="10" fill="currentColor" />
                <path d="M50 45c-15 0-25 10-25 25h10c0-10 8-15 15-15s15 5 15 15h10c0-15-10-25-25-25z" fill="currentColor" />
                <path d="M42 45h16v18H42z" fill="#E6A100" />
                <path d="M45 42h10v3H45z" fill="#008751" />
              </svg>
              {/* Little love heart inside */}
              <Heart className="absolute bottom-1 right-1 w-4 h-4 text-red-500 fill-red-500" />
            </div>

            <div className="hidden">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg tracking-tight text-white leading-none">Compassion</span>
                {/* Ghana Flag Indicator */}
                <div className="flex flex-col w-5 h-3.5 rounded-sm overflow-hidden border border-white/20">
                  <div className="bg-[#EF3340] h-1/3"></div>
                  <div className="bg-[#FFD100] h-1/3 flex items-center justify-center relative">
                    {/* Small star symbol */}
                    <span className="absolute text-[6px] text-black leading-none top-[-2px]">*</span>
                  </div>
                  <div className="bg-[#009739] h-1/3"></div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#FFD100] font-bold block leading-none mt-0.5">Ghana</span>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center gap-1.5 font-montserrat font-medium text-sm text-white/90">
            <button id="nav-home" onClick={goHome} className={getNavItemClass('home')}>
              Home
            </button>

            {/* About Us dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button id="nav-about" onClick={() => goToRoute('/about')} className={getNavItemClass('about', true)}>
                About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-3 w-60 bg-[#0038a8] text-white shadow-2xl rounded-b-[1.5rem] py-7 px-6 z-50 flex flex-col gap-6 border-t border-white/10 font-sans"
                  >
                    <button 
                      onClick={() => { goToRoute('/about'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Who We Are
                    </button>
                    <button 
                      onClick={() => { goToRoute('/about#leadership'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Leadership
                    </button>
                    <button 
                      onClick={() => { scrollToSection('partners'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Church Partners
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('work')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button id="nav-work" onClick={() => goToRoute('/programs-and-interventions')} className={getNavItemClass('work', true)}>
                Our Work <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'work' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'work' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-3 w-64 bg-[#0038a8] text-white shadow-2xl rounded-b-[1.5rem] py-7 px-6 z-50 flex flex-col gap-6 border-t border-white/10 font-sans"
                  >
                    <button 
                      onClick={() => { goToRoute('/programs-and-interventions'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Programs & Interventions
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button id="nav-faq" onClick={() => scrollToSection('faq')} className={getNavItemClass('resources', true)}>
                Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-3 w-60 bg-[#0038a8] text-white shadow-2xl rounded-b-[1.5rem] py-7 px-6 z-50 flex flex-col gap-6 border-t border-white/10 font-sans"
                  >
                    <button 
                      onClick={() => { scrollToSection('faq'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Frequently Asked Questions
                    </button>
                    <button 
                      onClick={() => { scrollToSection('video-section'); setActiveDropdown(null); }}
                      className="text-left font-montserrat font-medium text-sm tracking-wide text-white/95 hover:text-[#FFD100] transition-colors duration-200"
                    >
                      Media & Documentaries
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button id="nav-contact" onClick={() => goToRoute('/contact')} className={getNavItemClass('footer')}>
              Contact
            </button>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="header-donate-btn"
              onClick={onOpenDonate}
              className="bg-[#00A896] hover:bg-[#02C39A] text-white px-5 py-2.5 rounded-full font-display font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102"
            >
              <Heart className="w-4 h-4 fill-white" />
              Sponsor a Child
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-1 text-white md:hidden hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#002d86] border-t border-white/10 overflow-hidden text-white w-full absolute top-full left-0 shadow-xl"
            >
              <div className="px-6 py-5 flex flex-col gap-4 font-montserrat font-medium text-sm">
                <button id="mobile-nav-home" onClick={goHome} className="text-left py-2 border-b border-white/5 hover:text-[#FFD100]">Home</button>
                
                {/* Mobile About Us Submenu */}
                <div>
                  <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="w-full flex justify-between items-center text-left py-2 border-b border-white/5 hover:text-[#FFD100]">
                    <span>About Us</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 flex flex-col gap-2.5 mt-2 pb-2 text-white/80">
                        <button onClick={() => goToRoute('/about')} className="text-left text-sm py-1 hover:text-yellow-400">Who We Are</button>
                        <button onClick={() => goToRoute('/about#leadership')} className="text-left text-sm py-1 hover:text-yellow-400">Leadership</button>
                        <button onClick={() => { scrollToSection('partners'); setIsMobileMenuOpen(false); }} className="text-left text-sm py-1 hover:text-yellow-400">Church Partners</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button onClick={() => setActiveDropdown(activeDropdown === 'mobile-work' ? null : 'mobile-work')} className="w-full flex justify-between items-center text-left py-2 border-b border-white/5 hover:text-[#FFD100]">
                    <span>Our Work</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-work' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-work' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 flex flex-col gap-2.5 mt-2 pb-2 text-white/80">
                        <button onClick={() => goToRoute('/programs-and-interventions')} className="text-left text-sm py-1 hover:text-yellow-400">Programs & Interventions</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Resources Submenu */}
                <div>
                  <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} className="w-full flex justify-between items-center text-left py-2 border-b border-white/5 hover:text-[#FFD100]">
                    <span>Resources & FAQ</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 flex flex-col gap-2.5 mt-2 pb-2 text-white/80">
                        <button onClick={() => { scrollToSection('faq'); setIsMobileMenuOpen(false); }} className="text-left text-sm py-1 hover:text-yellow-400">Frequently Asked Questions</button>
                        <button onClick={() => { scrollToSection('video-section'); setIsMobileMenuOpen(false); }} className="text-left text-sm py-1 hover:text-yellow-400">Media & Documentaries</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button id="mobile-nav-contact" onClick={() => goToRoute('/contact')} className="text-left py-2 border-b border-white/5 hover:text-[#FFD100]">Contact</button>
                
                <button
                  id="mobile-nav-donate-btn"
                  onClick={() => { setIsMobileMenuOpen(false); onOpenDonate(); }}
                  className="w-full bg-[#00A896] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md mt-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" /> Sponsor a Child
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
