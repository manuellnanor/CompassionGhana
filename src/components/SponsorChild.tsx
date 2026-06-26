import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Filter, User, Calendar, MapPin, Smile, X, Check, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import { CHILD_PROFILES } from '../data';
import { ChildProfile } from '../types';
import TitleReveal from './TitleReveal';

export default function SponsorChild() {
  const [children, setChildren] = useState<ChildProfile[]>(CHILD_PROFILES);
  const [genderFilter, setGenderFilter] = useState<'All' | 'Boy' | 'Girl'>('All');
  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [selectedChild, setSelectedChild] = useState<ChildProfile | null>(null);
  
  // Checkout states
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [paymentType, setPaymentType] = useState<'card' | 'momo'>('card');
  const [paymentInput, setPaymentInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const regions = ['All', 'Central Region', 'Eastern Region', 'Volta Region', 'Ashanti Region'];

  // Filter logic
  const filteredChildren = children.filter((child) => {
    const genderMatch = genderFilter === 'All' || child.gender === genderFilter;
    const regionMatch = regionFilter === 'All' || child.region === regionFilter;
    return genderMatch && regionMatch;
  });

  const handleOpenSponsor = (child: ChildProfile) => {
    setSelectedChild(child);
    setIsSuccess(false);
    setSponsorName('');
    setSponsorEmail('');
    setPaymentInput('');
  };

  const handleCloseSponsor = () => {
    setSelectedChild(null);
  };

  const handleSponsorSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!sponsorName || !sponsorEmail) return;

    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Update child status to sponsored
      setChildren(prev => 
        prev.map(c => c.id === selectedChild?.id ? { ...c, isSponsored: true } : c)
      );
    }, 1500);
  };

  return (
    <section id="sponsor-child" className="py-20 bg-slate-50 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#0038a8] uppercase tracking-widest block">Sponsorship Hub</span>
          <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0038a8] tracking-tight">
            Sponsor a Ghanaian Child
          </TitleReveal>
          <div className="h-1.5 w-14 bg-yellow-400 mx-auto rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-1">
            Build a personal connection with a child in need. Your monthly sponsorship of <strong>$43</strong> delivers food, education materials, medical health checks, and spiritual guidance.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          <div className="flex items-center gap-2.5 text-[#0038a8] font-bold text-sm">
            <Filter className="w-4 h-4 text-[#0038a8]" />
            <span>Filter Children Profiles:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Gender Filter */}
            <div className="flex-1 md:flex-initial">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Gender</label>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {['All', 'Boy', 'Girl'].map((g) => (
                  <button
                    key={g}
                    id={`gender-filter-${g}-btn`}
                    onClick={() => setGenderFilter(g as any)}
                    className={`py-1.5 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      genderFilter === g
                        ? 'bg-white text-blue-950 shadow-sm'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {g}s
                  </button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div className="flex-1 md:flex-initial min-w-[160px]">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Region in Ghana</label>
              <select
                id="region-filter-select"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full bg-gray-100 border-none p-2.5 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Children Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredChildren.map((child) => (
              <motion.div
                key={child.id}
                id={`child-card-${child.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all flex flex-col justify-between relative group"
              >
                {/* Image & Ribbon Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={child.photo}
                    alt={child.name}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Sponsored vs Sponsor Me badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {child.isSponsored ? (
                      <span className="bg-green-500 text-white font-display font-extrabold text-[10px] uppercase py-1.5 px-3.5 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                        <Check className="w-3 h-3 stroke-[3]" /> Sponsored
                      </span>
                    ) : (
                      <span className="bg-[#FFD100] text-blue-950 font-display font-extrabold text-[10px] uppercase py-1.5 px-3.5 rounded-full shadow-sm flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-current" /> Sponsor Me
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Tag with age & region */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="font-display font-black text-2xl tracking-tight leading-none">
                      {child.name}, <span className="font-light">{child.age}</span>
                    </h3>
                    <span className="text-[10px] text-white/80 font-bold flex items-center gap-1 mt-1 font-mono uppercase">
                      <MapPin className="w-3 h-3 text-[#FFD100]" /> {child.region}
                    </span>
                  </div>
                </div>

                {/* Profile descriptive body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>Bdy: {child.birthday}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono">
                        <User className="w-3.5 h-3.5 text-amber-500" />
                        <span>Gender: {child.gender}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {child.description}
                    </p>

                    {/* Hobbies list */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-bold text-gray-400 mr-1 uppercase">Hobbies:</span>
                      {child.hobbies.map((h, i) => (
                        <span key={i} className="bg-slate-100 text-gray-600 font-medium text-[10px] py-0.5 px-2.5 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sponsorship card CTA buttons */}
                  <div className="pt-4 border-t border-gray-100">
                    {child.isSponsored ? (
                      <div className="bg-green-50 text-green-700 py-3 px-4 rounded-2xl text-center text-xs font-bold flex items-center justify-center gap-2 border border-green-100">
                        <Check className="w-4 h-4 stroke-[3]" /> Sponsoring in Progress!
                      </div>
                    ) : (
                      <button
                        id={`sponsor-child-${child.id}-btn`}
                        onClick={() => handleOpenSponsor(child)}
                        className="w-full bg-[#0038a8] hover:bg-[#002d86] text-white font-display font-extrabold text-xs py-3 px-4 rounded-2xl text-center shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1"
                      >
                        Sponsor {child.name} <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
                      </button>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Sponsorship checkout overlay panel */}
        <AnimatePresence>
          {selectedChild && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div className="absolute inset-0" onClick={handleCloseSponsor} />

              <motion.div
                id="sponsorship-checkout-modal"
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 overflow-hidden font-sans"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0038a8] to-indigo-950 text-white px-6 py-5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                    <span className="font-display font-extrabold text-base">Sponsor {selectedChild.name}</span>
                  </div>
                  <button 
                    id="close-sponsor-modal-btn"
                    onClick={handleCloseSponsor}
                    className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6">
                  {isSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto shadow-sm">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-display font-black text-gray-950 text-xl">Sponsorship Complete!</h4>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                          Congratulations! You are now sponsoring <strong>{selectedChild.name}</strong> from <strong>{selectedChild.region}</strong>!
                        </p>
                      </div>
                      <div className="bg-blue-50/70 p-4 rounded-2xl text-left text-xs text-[#0038a8] leading-relaxed border border-blue-100 flex gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#0038a8] shrink-0 mt-0.5" />
                        <div>
                          <strong>Welcome Package:</strong> A personalized letter from {selectedChild.name} and a detailed child development welcome pack will be emailed to you shortly!
                        </div>
                      </div>
                      <button
                        id="checkout-success-close-btn"
                        onClick={handleCloseSponsor}
                        className="bg-[#0038a8] hover:bg-[#002d86] text-white font-bold text-xs py-2.5 px-6 rounded-xl"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form id="sponsorship-form" onSubmit={handleSponsorSubmit} className="space-y-4">
                      
                      {/* Short Child Info box */}
                      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-100">
                        <img 
                          src={selectedChild.photo} 
                          alt={selectedChild.name} 
                          className="w-12 h-12 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-xs">
                          <div className="font-bold text-gray-800">{selectedChild.name}, Age {selectedChild.age}</div>
                          <div className="text-gray-400 mt-0.5">{selectedChild.region}, Ghana</div>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">Monthly Pledge</div>
                          <div className="text-[#0038a8] font-display font-black text-sm">$43 / mo</div>
                        </div>
                      </div>

                      {/* Sponsor Inputs */}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1">Your Full Name *</label>
                          <input
                            id="sponsor-name-input"
                            type="text"
                            required
                            placeholder="e.g. Ama Serwaa"
                            value={sponsorName}
                            onChange={(e) => setSponsorName(e.target.value)}
                            className="w-full p-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#0038a8]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1">Your Email Address *</label>
                          <input
                            id="sponsor-email-input"
                            type="email"
                            required
                            placeholder="e.g. amaserwaa@example.com"
                            value={sponsorEmail}
                            onChange={(e) => setSponsorEmail(e.target.value)}
                            className="w-full p-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#0038a8]"
                          />
                        </div>

                        {/* Payment Selector */}
                        <div className="space-y-2">
                          <label className="block text-[11px] font-bold text-gray-500">Select Billing Method</label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              id="sponsor-payment-card-btn"
                              type="button"
                              onClick={() => setPaymentType('card')}
                              className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                                paymentType === 'card' 
                                  ? 'border-[#0038a8] bg-blue-50/50 text-[#0038a8]' 
                                  : 'border-gray-200 bg-white text-gray-600'
                              }`}
                            >
                              Credit / Debit Card
                            </button>
                            <button
                              id="sponsor-payment-momo-btn"
                              type="button"
                              onClick={() => setPaymentType('momo')}
                              className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                                paymentType === 'momo' 
                                  ? 'border-[#0038a8] bg-blue-50/50 text-[#0038a8]' 
                                  : 'border-gray-200 bg-white text-gray-600'
                              }`}
                            >
                              Mobile Money (MoMo)
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1">
                            {paymentType === 'card' ? 'Card Number' : 'Mobile Money Phone Number (Ghana)'} *
                          </label>
                          <input
                            id="sponsor-payment-input"
                            type="text"
                            required
                            placeholder={paymentType === 'card' ? '4111 2222 3333 4444' : '024 400 0000'}
                            value={paymentInput}
                            onChange={(e) => setPaymentInput(e.target.value)}
                            className="w-full p-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#0038a8] font-mono"
                          />
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-3 rounded-xl text-[10px] text-yellow-800 flex gap-2 border border-yellow-100">
                        <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                        <div>
                          By completing this form, you authorize a monthly contribution of <strong>$43.00 USD</strong> to support {selectedChild.name}. You can cancel or pause sponsorship at any time.
                        </div>
                      </div>

                      <button
                        id="submit-sponsorship-btn"
                        type="submit"
                        disabled={isSubmitting || !sponsorName || !sponsorEmail}
                        className="w-full bg-[#00A896] hover:bg-[#02C39A] disabled:opacity-50 text-white font-display font-bold text-xs py-3 rounded-2xl flex items-center justify-center gap-1 cursor-pointer transition-colors"
                      >
                        {isSubmitting ? 'Processing Authorization...' : `Confirm Sponsoring ${selectedChild.name}`}
                      </button>

                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
