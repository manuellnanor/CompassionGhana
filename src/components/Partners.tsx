import { PARTNERS } from '../data';
import TitleReveal from './TitleReveal';
import awanaLogo from '@/assets/sponsor-awana.png';
import chalmersLogo from '@/assets/sponsor-chalmers.png';
import hopespringLogo from '@/assets/sponsor-hopespring.png';
import sanctuaryLogo from '@/assets/sponsor-sanctuary.png';

export default function Partners() {
  const getPartnerLogo = (id: string) => {
    const logos: Record<string, string> = {
      awana: awanaLogo,
      hopespring: hopespringLogo,
      chalmers: chalmersLogo,
      sanctuary: sanctuaryLogo,
    };

    const logo = logos[id];
    if (logo) {
      return (
        <img
          src={logo}
          alt=""
          className="h-16 w-full max-w-[170px] object-contain"
        />
      );
    }

    switch (id) {
      default:
        return <span className="font-bold text-gray-400">Partner Organization</span>;
    }
  };

  return (
    <section id="partners" className="py-14 bg-white border-t border-b border-gray-100 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Simple Label */}
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-2">
            Partnership & Stewardship
          </span>
          <TitleReveal as="h3" className="font-title font-extrabold text-[#0038a8] text-xl tracking-tight">
            Our Key Partners
          </TitleReveal>
          <div className="h-0.5 w-10 bg-yellow-400 mx-auto mt-2 rounded-full" />
        </div>

        {/* Continuous Horizontal Slider / Marquee */}
        <div className="relative w-full overflow-hidden py-6">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          {/* Edge Fading Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Sliding Track */}
          <div className="animate-marquee gap-8 pl-8">
            {/* Loop the partner cards multiple times to ensure continuous seamless rendering */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                id={`partner-${partner.id}-badge-${idx}`}
                className="bg-slate-50/50 hover:bg-white p-6 rounded-2xl border border-gray-100/60 transition-all duration-300 flex flex-col items-center justify-center gap-3 w-[220px] shrink-0 shadow-sm hover:shadow-md hover:scale-105"
              >
                {/* Partner logo */}
                {getPartnerLogo(partner.id)}
                
                {/* Small Tag */}
                <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
