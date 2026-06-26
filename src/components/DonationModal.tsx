import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles, Receipt, CheckCircle2, ChevronRight, CreditCard, Landmark, DollarSign } from 'lucide-react';
import { DONATION_CAUSES } from '../data';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCauseId?: string;
}

export default function DonationModal({ isOpen, onClose, selectedCauseId }: DonationModalProps) {
  const [step, setStep] = useState(1);
  const [cause, setCause] = useState(selectedCauseId || 'general');
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>('card');
  const [momoProvider, setMomoProvider] = useState<'mtn' | 'telecel' | 'airteltigo'>('mtn');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Ghana',
    momoNumber: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const presetAmounts = ['15', '30', '50', '100', '250'];

  const handleAmountSelect = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setCustomAmount(val);
      setAmount('custom');
    }
  };

  const currentAmount = amount === 'custom' ? Number(customAmount || 0) : Number(amount);

  const selectedCauseObj = DONATION_CAUSES.find(c => c.id === cause) || DONATION_CAUSES[0];

  const handleNext = () => {
    if (step === 1 && currentAmount <= 0) return;
    if (step === 2) {
      if (!donorInfo.name || !donorInfo.email) return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  const resetAll = () => {
    setStep(1);
    setAmount('50');
    setCustomAmount('');
    setDonorInfo({
      name: '',
      email: '',
      phone: '',
      country: 'Ghana',
      momoNumber: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        {/* Backdrop click */}
        <motion.div 
          className="absolute inset-0" 
          onClick={resetAll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Container */}
        <motion.div
          id="donation-modal"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-xl overflow-hidden bg-white rounded-3xl shadow-2xl z-10 font-sans"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="font-display font-bold text-lg">Support Our Mission</span>
            </div>
            <button 
              id="close-donation-btn"
              onClick={resetAll}
              className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          {step < 4 && (
            <div className="flex bg-gray-50 border-b border-gray-100 p-1">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center justify-center py-2 text-xs font-semibold">
                  <span className={`w-5 h-5 flex items-center justify-center rounded-full mr-2 ${
                    step === s 
                      ? 'bg-blue-600 text-white' 
                      : step > s 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > s ? '✓' : s}
                  </span>
                  <span className={step === s ? 'text-blue-900' : 'text-gray-400'}>
                    {s === 1 ? 'Amount' : s === 2 ? 'Details' : 'Payment'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-5"
                >
                  {/* Cause Picker */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select critical intervention area:</label>
                    <div className="grid grid-cols-2 gap-3">
                      {DONATION_CAUSES.map((c) => (
                        <button
                          key={c.id}
                          id={`cause-${c.id}-btn`}
                          onClick={() => setCause(c.id)}
                          className={`p-3 text-left rounded-2xl border-2 transition-all ${
                            cause === c.id 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <span className="block font-bold text-gray-800 text-sm">{c.title}</span>
                          <span className="block text-xs text-gray-400 mt-1 line-clamp-1">{c.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Grid */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Donation Amount (USD):</label>
                    <div className="grid grid-cols-5 gap-2">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          id={`amount-${amt}-btn`}
                          onClick={() => handleAmountSelect(amt)}
                          className={`py-3 px-1 rounded-xl text-sm font-bold transition-all ${
                            amount === amt 
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    {/* Custom Input */}
                    <div className="mt-3 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="custom-amount-input"
                        type="text"
                        placeholder="Or enter custom amount in USD"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={`block w-full pl-10 pr-3 py-3 border-2 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          amount === 'custom' ? 'border-blue-500 bg-blue-50/20 font-bold' : 'border-gray-200'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50/80 p-4 rounded-2xl border border-yellow-100 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-yellow-800 leading-relaxed">
                      <strong>Impact:</strong> Your gift of <strong>${currentAmount || 50}</strong> provides nutritious food, clean water, and access to school support systems for a child in Ghana for over a month.
                    </p>
                  </div>

                  <button
                    id="step1-next-btn"
                    onClick={handleNext}
                    disabled={currentAmount <= 0}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-1 shadow-lg shadow-blue-200 transition-all cursor-pointer"
                  >
                    Continue to Details <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-4"
                >
                  <h3 className="font-display font-bold text-gray-800 text-base">Donor Information</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name *</label>
                      <input
                        id="donor-name-input"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={donorInfo.name}
                        onChange={e => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address *</label>
                      <input
                        id="donor-email-input"
                        type="email"
                        required
                        placeholder="johndoe@example.com"
                        value={donorInfo.email}
                        onChange={e => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
                        <input
                          id="donor-phone-input"
                          type="tel"
                          placeholder="+233..."
                          value={donorInfo.phone}
                          onChange={e => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Country</label>
                        <input
                          id="donor-country-input"
                          type="text"
                          value={donorInfo.country}
                          onChange={e => setDonorInfo({ ...donorInfo, country: e.target.value })}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      id="step2-back-btn"
                      onClick={handleBack}
                      className="flex-1 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-2xl font-bold text-sm transition-all"
                    >
                      Back
                    </button>
                    <button
                      id="step2-next-btn"
                      onClick={handleNext}
                      disabled={!donorInfo.name || !donorInfo.email}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Continue to Payment <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-4"
                >
                  {/* Tab Selector for payment */}
                  <div className="flex bg-gray-100 rounded-2xl p-1">
                    <button
                      id="payment-method-card-btn"
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'card' 
                          ? 'bg-white text-blue-900 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Credit Card
                    </button>
                    <button
                      id="payment-method-momo-btn"
                      type="button"
                      onClick={() => setPaymentMethod('momo')}
                      className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'momo' 
                          ? 'bg-white text-blue-900 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      <Landmark className="w-4 h-4" /> Mobile Money (MoMo)
                    </button>
                  </div>

                  <form id="donation-payment-form" onSubmit={handleSubmit} className="space-y-4">
                    {paymentMethod === 'card' ? (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Card Number</label>
                          <input
                            id="card-number-input"
                            type="text"
                            required
                            placeholder="4111 2222 3333 4444"
                            value={donorInfo.cardNumber}
                            onChange={e => setDonorInfo({ ...donorInfo, cardNumber: e.target.value })}
                            className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Expiry Date</label>
                            <input
                              id="card-expiry-input"
                              type="text"
                              required
                              placeholder="MM/YY"
                              value={donorInfo.expiry}
                              onChange={e => setDonorInfo({ ...donorInfo, expiry: e.target.value })}
                              className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">CVV</label>
                            <input
                              id="card-cvv-input"
                              type="password"
                              required
                              placeholder="123"
                              maxLength={3}
                              value={donorInfo.cvv}
                              onChange={e => setDonorInfo({ ...donorInfo, cvv: e.target.value })}
                              className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* MoMo Provider Picker */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-2">Network Provider</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: 'mtn', name: 'MTN', color: 'bg-[#FFCC00] text-black border-[#FFCC00]' },
                              { id: 'telecel', name: 'Telecel', color: 'bg-[#E60000] text-white border-[#E60000]' },
                              { id: 'airteltigo', name: 'AirtelTigo', color: 'bg-[#005B94] text-white border-[#005B94]' }
                            ].map((prov) => (
                              <button
                                key={prov.id}
                                id={`momo-provider-${prov.id}-btn`}
                                type="button"
                                onClick={() => setMomoProvider(prov.id as any)}
                                className={`py-2 px-1 rounded-xl text-xs font-bold border-2 text-center transition-all ${
                                  momoProvider === prov.id 
                                    ? `${prov.color} opacity-100 scale-102` 
                                    : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 opacity-70'
                                }`}
                              >
                                {prov.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Mobile Money Phone Number</label>
                          <input
                            id="momo-phone-input"
                            type="tel"
                            required
                            placeholder="e.g. 0244123456"
                            value={donorInfo.momoNumber}
                            onChange={e => setDonorInfo({ ...donorInfo, momoNumber: e.target.value })}
                            className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-mono"
                          />
                          <p className="text-[11px] text-gray-400 mt-1">
                            A prompt will be pushed to your phone. Enter your MoMo PIN to authorize this transaction.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Intvention:</span>
                        <span className="font-semibold text-gray-800">{selectedCauseObj.title}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-gray-800 border-t border-gray-200/60 pt-1.5 mt-1.5">
                        <span>Total Donation:</span>
                        <span className="text-blue-600 font-display text-base">${currentAmount}.00 USD</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-1">
                      <button
                        id="step3-back-btn"
                        type="button"
                        onClick={handleBack}
                        className="flex-1 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-2xl font-bold text-sm transition-all"
                      >
                        Back
                      </button>
                      <button
                        id="submit-donation-btn"
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Donate ${currentAmount} Now
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  
                  <div>
                    <h3 className="font-display font-extrabold text-gray-950 text-2xl">Medaase! (Thank You!)</h3>
                    <p className="text-gray-500 text-sm mt-1.5 max-w-sm mx-auto">
                      Dear <strong className="text-gray-800">{donorInfo.name}</strong>, your generous donation of <strong>${currentAmount}.00 USD</strong> was received successfully!
                    </p>
                  </div>

                  {/* Generated receipt */}
                  <div className="border border-dashed border-gray-200 bg-slate-50/50 p-5 rounded-3xl max-w-sm mx-auto text-left relative font-mono text-xs">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-green-600 rounded-t-3xl" />
                    
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200/60 mt-1">
                      <span className="font-bold flex items-center gap-1"><Receipt className="w-4 h-4 text-gray-400" /> OFFICIAL RECEIPT</span>
                      <span className="text-[10px] text-gray-400">#{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>

                    <div className="space-y-2 pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">NGO:</span>
                        <span className="font-bold text-gray-800">Compassion Ghana</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Donor Name:</span>
                        <span className="font-semibold text-gray-800 text-right">{donorInfo.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email:</span>
                        <span className="text-gray-800 text-right">{donorInfo.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Intervention:</span>
                        <span className="font-semibold text-gray-800 text-right">{selectedCauseObj.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payment Via:</span>
                        <span className="font-semibold text-gray-800 uppercase">{paymentMethod === 'card' ? 'Credit Card' : `MoMo (${momoProvider})`}</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-2 flex justify-between font-bold text-sm text-gray-900 mt-2">
                        <span>AMOUNT:</span>
                        <span className="text-blue-600">${currentAmount}.00 USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="close-success-btn"
                      onClick={resetAll}
                      className="bg-blue-900 hover:bg-blue-950 text-white py-3 px-8 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-indigo-100 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
