import { Heart, User, Home, BookOpen, ShieldCheck, Cross } from 'lucide-react';
import { motion } from 'motion/react';
import { FOUNDATIONAL_CHOICES } from '../data';
import TitleReveal from './TitleReveal';

export default function FoundationalChoices() {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cross':
        return (
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600">
            {/* Custom Cross Icon or Lucide Cross */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-6-10h12" />
            </svg>
          </div>
        );
      case 'user':
        return (
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 text-amber-600">
            <User className="w-6 h-6 stroke-[2.5]" />
          </div>
        );
      case 'church':
        return (
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-50 text-green-600">
            <Home className="w-6 h-6 stroke-[2.5]" />
          </div>
        );
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  return (
    <section id="foundational-choices" className="py-20 bg-white text-slate-900 font-sans relative overflow-hidden">
      {/* Decorative hands-and-hearts background illustrations in top-left and top-right corners */}
      <div className="absolute top-0 left-0 w-44 sm:w-60 md:w-72 h-auto pointer-events-none text-slate-100 opacity-80 z-0">
        <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Hand 1 (left) */}
          <path d="M40 0V110C40 120 35 125 30 130C25 135 15 140 10 145C5 150 2 158 5 165C8 172 15 175 22 172C25 170 30 165 32 160C30 165 28 172 32 178C35 182 42 182 45 175C46 172 47 165 47 160C46 165 46 172 50 178C53 182 60 181 62 173C63 170 63 162 62 155C63 160 65 168 70 171C75 173 80 170 80 162C80 155 75 148 70 142C65 136 60 130 60 110V0H40Z" fill="currentColor"/>
          {/* Heart in Hand 1 */}
          <path d="M50 140C48 138 45 138 43 140C41 142 41 145 43 147L50 154L57 147C59 145 59 142 57 140C55 138 52 138 50 140Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 2 */}
          <path d="M115 0V80C115 88 112 92 108 96C104 100 96 104 92 108C88 112 86 118 88 123C90 128 95 130 100 128C102 126 106 123 108 119C106 123 105 128 108 132C110 135 115 135 117 130C118 128 119 123 119 119C118 123 118 128 121 132C123 135 128 134 130 128C131 126 131 120 130 115C131 119 132 125 136 127C140 129 144 127 144 121C144 116 140 111 136 106C132 102 128 97 128 80V0H115Z" fill="currentColor"/>
          {/* Heart in Hand 2 */}
          <path d="M122 103C120.5 101.5 118 101.5 116.5 103C115 104.5 115 107 116.5 108.5L122 114L127.5 108.5C129 107 129 104.5 127.5 103C126 101.5 123.5 101.5 122 103Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 3 */}
          <path d="M190 0V160C190 170 185 175 180 180C175 185 165 190 160 195C155 200 152 208 155 215C158 222 165 225 172 222C175 220 180 215 182 210C180 215 178 222 182 228C185 232 192 232 195 225C196 222 197 215 197 210C196 215 196 222 200 228C203 232 210 231 212 223C213 220 213 212 212 205C213 210 215 218 220 221C225 223 230 220 230 212C230 205 225 198 220 192C215 186 210 180 210 160V0H190Z" fill="currentColor"/>
          {/* Heart in Hand 3 */}
          <path d="M200 190C198 188 195 188 193 190C191 192 191 195 193 197L200 204L207 197C209 195 209 192 207 190C205 188 202 188 200 190Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 4 */}
          <path d="M265 0V90C265 98 262 102 258 106C254 110 246 114 242 118C238 122 236 128 238 133C240 138 245 140 250 138C252 136 256 133 258 129C256 133 255 138 258 142C260 145 265 145 267 140C268 138 269 133 269 129C268 133 268 138 271 142C273 145 278 144 280 138C281 136 281 130 280 125C281 129 282 135 286 137C290 139 294 137 294 131C294 126 290 121 286 116C282 112 278 107 278 90V0H265Z" fill="currentColor"/>
          {/* Heart in Hand 4 */}
          <path d="M272 113C270.5 111.5 268 111.5 266.5 113C265 114.5 265 117 266.5 118.5L272 124L277.5 118.5C279 117 279 114.5 277.5 113C276 111.5 273.5 111.5 272 113Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Floating Hearts */}
          <path d="M45 235C35 220 15 225 15 242C15 255 35 270 45 278C55 270 75 255 75 242C75 225 55 220 45 235Z" fill="currentColor" opacity="0.8"/>
          <path d="M125 175C118 165 105 168 105 180C105 189 118 199 125 205C132 199 145 189 145 180C145 168 132 165 125 175Z" fill="currentColor" opacity="0.8"/>
          <path d="M185 275C175 260 155 265 155 282C155 295 175 310 185 318C195 310 215 295 215 282C215 265 195 260 185 275Z" fill="currentColor" opacity="0.8"/>
          <path d="M265 195C258 185 245 188 245 200C245 209 258 219 265 225C272 219 285 209 285 200C285 188 272 185 265 195Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-44 sm:w-60 md:w-72 h-auto pointer-events-none text-slate-100 opacity-80 z-0 transform scale-x-[-1]">
        <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Hand 1 (left) */}
          <path d="M40 0V110C40 120 35 125 30 130C25 135 15 140 10 145C5 150 2 158 5 165C8 172 15 175 22 172C25 170 30 165 32 160C30 165 28 172 32 178C35 182 42 182 45 175C46 172 47 165 47 160C46 165 46 172 50 178C53 182 60 181 62 173C63 170 63 162 62 155C63 160 65 168 70 171C75 173 80 170 80 162C80 155 75 148 70 142C65 136 60 130 60 110V0H40Z" fill="currentColor"/>
          {/* Heart in Hand 1 */}
          <path d="M50 140C48 138 45 138 43 140C41 142 41 145 43 147L50 154L57 147C59 145 59 142 57 140C55 138 52 138 50 140Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 2 */}
          <path d="M115 0V80C115 88 112 92 108 96C104 100 96 104 92 108C88 112 86 118 88 123C90 128 95 130 100 128C102 126 106 123 108 119C106 123 105 128 108 132C110 135 115 135 117 130C118 128 119 123 119 119C118 123 118 128 121 132C123 135 128 134 130 128C131 126 131 120 130 115C131 119 132 125 136 127C140 129 144 127 144 121C144 116 140 111 136 106C132 102 128 97 128 80V0H115Z" fill="currentColor"/>
          {/* Heart in Hand 2 */}
          <path d="M122 103C120.5 101.5 118 101.5 116.5 103C115 104.5 115 107 116.5 108.5L122 114L127.5 108.5C129 107 129 104.5 127.5 103C126 101.5 123.5 101.5 122 103Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 3 */}
          <path d="M190 0V160C190 170 185 175 180 180C175 185 165 190 160 195C155 200 152 208 155 215C158 222 165 225 172 222C175 220 180 215 182 210C180 215 178 222 182 228C185 232 192 232 195 225C196 222 197 215 197 210C196 215 196 222 200 228C203 232 210 231 212 223C213 220 213 212 212 205C213 210 215 218 220 221C225 223 230 220 230 212C230 205 225 198 220 192C215 186 210 180 210 160V0H190Z" fill="currentColor"/>
          {/* Heart in Hand 3 */}
          <path d="M200 190C198 188 195 188 193 190C191 192 191 195 193 197L200 204L207 197C209 195 209 192 207 190C205 188 202 188 200 190Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Hand 4 */}
          <path d="M265 0V90C265 98 262 102 258 106C254 110 246 114 242 118C238 122 236 128 238 133C240 138 245 140 250 138C252 136 256 133 258 129C256 133 255 138 258 142C260 145 265 145 267 140C268 138 269 133 269 129C268 133 268 138 271 142C273 145 278 144 280 138C281 136 281 130 280 125C281 129 282 135 286 137C290 139 294 137 294 131C294 126 290 121 286 116C282 112 278 107 278 90V0H265Z" fill="currentColor"/>
          {/* Heart in Hand 4 */}
          <path d="M272 113C270.5 111.5 268 111.5 266.5 113C265 114.5 265 117 266.5 118.5L272 124L277.5 118.5C279 117 279 114.5 277.5 113C276 111.5 273.5 111.5 272 113Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>

          {/* Floating Hearts */}
          <path d="M45 235C35 220 15 225 15 242C15 255 35 270 45 278C55 270 75 255 75 242C75 225 55 220 45 235Z" fill="currentColor" opacity="0.8"/>
          <path d="M125 175C118 165 105 168 105 180C105 189 118 199 125 205C132 199 145 189 145 180C145 168 132 165 125 175Z" fill="currentColor" opacity="0.8"/>
          <path d="M185 275C175 260 155 265 155 282C155 295 175 310 185 318C195 310 215 295 215 282C215 265 195 260 185 275Z" fill="currentColor" opacity="0.8"/>
          <path d="M265 195C258 185 245 188 245 200C245 209 258 219 265 225C272 219 285 209 285 200C285 188 272 185 265 195Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs uppercase tracking-widest text-[#0038a8] font-bold block"
          >
            Our Core Principles
          </motion.span>
          
          <TitleReveal
            className="font-title font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0038a8] tracking-tight"
          >
            Foundational Choices
          </TitleReveal>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Compassion International Ghana is Christ-centered, Church-driven, and Child-focused (the 3Cs), enabling vulnerable children to transcend systemic poverty.
          </motion.p>
        </div>

        {/* 3Cs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOUNDATIONAL_CHOICES.map((choice, idx) => (
            <motion.div
              key={choice.id}
              id={`choice-${choice.id}-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50 hover:bg-white text-gray-900 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden border border-slate-100"
            >
              {/* Highlight ribbon representing the Ghana flag in card corner on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EF3340] via-[#FFD100] to-[#009739] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {getIcon(choice.iconName)}
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    0{idx + 1} / 3C
                  </span>
                </div>

                {/* Text Body */}
                <div className="space-y-3">
                  <h3 className="font-title font-extrabold text-xl sm:text-2xl text-[#0038a8] transition-colors">
                    {choice.title}
                  </h3>
                  <p className="text-[11px] font-bold text-[#0038a8] uppercase tracking-wider">
                    {choice.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {choice.description}
                  </p>
                </div>
              </div>

              {/* Decorative dynamic star backdrop */}
              <div className="absolute -bottom-10 -right-10 text-slate-100 group-hover:text-blue-50/70 w-32 h-32 pointer-events-none transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
