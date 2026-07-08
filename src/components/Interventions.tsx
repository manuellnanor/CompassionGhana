import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { INTERVENTIONS } from '../data';
import SectionBadge from './SectionBadge';
import TitleReveal from './TitleReveal';

const interventionsBackground = '/assets/interventions-background.png';
const sponsorGiftStoryImage = '/assets/sponsor-gift-story-header.jpg';
const difficultDecisionsStoryImage = '/assets/difficult-decisions-header.jpg';
const humanTraffickingStoryImage = '/assets/human-trafficking-header.jpg';
const richardInventorStoryImage = '/assets/richard-inventor-radio.jpg';
const lettersDeliveredStoryImage = '/assets/letters-delivered-children.jpg';
const letterWritingTipsStoryImage = '/assets/letter-writing-tips-unexpected-gift.jpeg';

interface InterventionsProps {
  onOpenDonateWithCause: (causeId: string) => void;
}

export default function Interventions({ onOpenDonateWithCause }: InterventionsProps) {
  const router = useRouter();
  const visibleInterventions = INTERVENTIONS.filter((item) => item.id === 'education');

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
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-6">
          <SectionBadge>Interventions</SectionBadge>
          <div className="block w-full">
            <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl text-[#0038a8] tracking-tight">
              Our Program Interventions
            </TitleReveal>
          </div>
          <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pt-1">
            We target multiple dimensions of poverty by equipping kids and local households with customized social, medical, physical, and intellectual support.
          </p>
        </div>

        {/* Interventions Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleInterventions.map((item) => (
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
            <motion.div
              key="sponsor-gift-story"
              id="intervention-sponsor-gift-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/a-sponsors-gift-changed-this-familys-life')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read A Sponsor's Gift Changed This Family's Life"
              >
                <img
                  src={sponsorGiftStoryImage}
                  alt="Young girl standing in a small family store"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    A Sponsor's Gift Changed This Family's Life
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    A sponsor's gift helped Joseph's family move from financial pressure toward stability through a small grocery storefront.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Family Resilience
                  </span>
                  <button
                    id="read-sponsor-gift-story-btn"
                    onClick={() => router.push('/interventions/a-sponsors-gift-changed-this-familys-life')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key="difficult-decisions-story"
              id="intervention-difficult-decisions-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/difficult-decisions-is-there-enough-for-everyone')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read Difficult Decisions: Is There Enough For Everyone?"
              >
                <img
                  src={difficultDecisionsStoryImage}
                  alt="Mother and child supported through emergency food packs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    Difficult Decisions: Is There Enough For Everyone?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    Emergency food packs help families in Ghana face rising food costs with practical support and renewed hope.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Food Security
                  </span>
                  <button
                    id="read-difficult-decisions-story-btn"
                    onClick={() => router.push('/interventions/difficult-decisions-is-there-enough-for-everyone')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key="human-trafficking-story"
              id="intervention-human-trafficking-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/what-is-human-trafficking')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read What Is Human Trafficking?"
              >
                <img
                  src={humanTraffickingStoryImage}
                  alt="Young person standing in silhouette"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    What Is Human Trafficking?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    Human trafficking exploits vulnerability, but child protection, local care, and timely intervention can help children stay safe and heal.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Human Rights
                  </span>
                  <button
                    id="read-human-trafficking-story-btn"
                    onClick={() => router.push('/interventions/what-is-human-trafficking')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key="richard-inventor-story"
              id="intervention-richard-inventor-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/richard-the-inventor')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read Richard the Inventor"
              >
                <img
                  src={richardInventorStoryImage}
                  alt="Richard smiling beside a handmade radio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    Richard the Inventor
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    An innovative teenager in Ghana shows how encouragement, mentoring, and technical education can turn curiosity into opportunity.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Skills & Innovation
                  </span>
                  <button
                    id="read-richard-inventor-story-btn"
                    onClick={() => router.push('/interventions/richard-the-inventor')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key="letters-delivered-story"
              id="intervention-letters-delivered-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/how-are-your-compassion-letters-delivered')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read How Are Your Compassion Letters Delivered?"
              >
                <img
                  src={lettersDeliveredStoryImage}
                  alt="Children gathered as a Compassion letter is delivered"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    How Are Your Compassion Letters Delivered?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    Follow the journey of sponsor letters in Ghana as staff cross roads, rivers, and remote communities to reach children.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Child Sponsorship
                  </span>
                  <button
                    id="read-letters-delivered-story-btn"
                    onClick={() => router.push('/interventions/how-are-your-compassion-letters-delivered')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              key="letter-writing-tips-story"
              id="intervention-letter-writing-tips-story-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <button
                type="button"
                onClick={() => router.push('/interventions/sponsors-share-their-best-letter-writing-tips')}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 text-left cursor-pointer"
                aria-label="Read Sponsors Share Their Best Letter Writing Tips"
              >
                <img
                  src={letterWritingTipsStoryImage}
                  alt="Child holding a sponsor photo frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-title font-extrabold text-lg text-[#0038a8] group-hover:text-blue-700 transition-colors">
                    Sponsors Share Their Best Letter Writing Tips
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    Sponsors share practical ideas for writing letters that help children feel remembered, encouraged, and connected.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Sponsor Letters
                  </span>
                  <button
                    id="read-letter-writing-tips-story-btn"
                    onClick={() => router.push('/interventions/sponsors-share-their-best-letter-writing-tips')}
                    className="bg-blue-50 hover:bg-blue-100 text-[#0038a8] hover:text-[#002d86] font-display font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
