import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Factory } from 'lucide-react';
import logoImg from '../assets/logo.png';
import defaultHeroBg from '../assets/company_profile_hero.jpg';

export default function PageHero({
  breadcrumb,
  eyebrow = 'PROFECTUS BIZLINK (OPC) PRIVATE LIMITED',
  title = 'MANPOWER SOLUTIONS FOR',
  highlight = 'MANUFACTURING & INDUSTRIAL OPERATIONS',
  description = 'Structured candidate sourcing, screening, onboarding and workforce deployment across production, assembly, quality, warehouse, machine operations and packaging.',
  bgImage,
  ctaText = 'Explore Solutions',
  ctaLink = '/what-we-do',
  secondaryCtaText = 'Contact Recruitment Desk',
  secondaryCtaLink = '/contact',
  badges = [
    'Role-Based Screening',
    '24-48h Rapid Mobilisation',
    'Plant Shift Aligned'
  ]
}) {
  const activeBg = bgImage || defaultHeroBg;

  return (
    <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center overflow-hidden bg-[#061735] text-white border-b border-[rgba(96,165,250,0.15)]">
      
      {/* 1. Underlying Real Industrial Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeBg}
          alt="Industrial Manufacturing Operations"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
        />
        {/* Navy Gradient Overlay: linear-gradient(120deg, rgba(4,18,45,.96), rgba(9,42,90,.82)) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(4, 18, 45, 0.95) 0%, rgba(7, 26, 61, 0.90) 50%, rgba(9, 42, 90, 0.82) 100%)'
          }}
        ></div>
      </div>

      {/* 2. Geometric Texture & Subtle Radial Glow Lightings */}
      <div className="absolute inset-0 bg-grid-pattern-navy opacity-20 pointer-events-none z-1"></div>
      <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1E73FF]/15 blur-[140px] pointer-events-none z-1"></div>
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-[#60A5FA]/10 blur-[130px] pointer-events-none z-1"></div>

      {/* 3. Subtle Company Logo Watermark in Background */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none z-1 select-none opacity-[0.06] hidden md:block">
        <img
          src={logoImg}
          alt="Company Logo Watermark"
          className="w-[450px] lg:w-[600px] h-auto object-contain filter invert drop-shadow-2xl"
        />
      </div>

      {/* 4. Foreground Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center sm:text-left w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Eyebrow & Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 border border-[rgba(96,165,250,0.3)] shadow-sm backdrop-blur-md"
          >
            <Factory size={13} className="text-[#60A5FA] shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#93C5FD]">
              {breadcrumb ? `${breadcrumb} • ${eyebrow}` : eyebrow}
            </span>
          </motion.div>

          {/* Powerful Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.12]"
          >
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#FFFFFF]">
              {highlight}
            </span>
          </motion.h1>

          {/* Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#C7D5EA] leading-relaxed font-normal max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 justify-center sm:justify-start"
          >
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#1E73FF] hover:bg-[#1677FF] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 btn-primary-glow group"
            >
              <span>{ctaText}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={secondaryCtaLink}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0B2555]/90 hover:bg-[#102F63] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border border-[rgba(96,165,250,0.25)] hover:border-[#60A5FA]/50 transition-all duration-300 shadow-sm"
            >
              <span>{secondaryCtaText}</span>
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          {/* Small Trust / Value Indicators */}
          {badges && badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-[rgba(96,165,250,0.15)] flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-[#C7D5EA]"
            >
              {badges.map((b, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={13} className="text-[#60A5FA] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>

    </section>
  );
}
