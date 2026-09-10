import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Search,
  Factory,
  Award,
  Package,
  Clock,
  Handshake,
  Headphones,
  ChevronRight,
  X,
  User,
  Sparkles,
  Layers
} from 'lucide-react';

import heroBgImg from '../assets/hero_factory_engineers.jpg';
import automotiveImg from '../assets/sectors/automotive.jpg';
import electronicsImg from '../assets/sectors/electronics.jpg';
import engineeringImg from '../assets/sectors/engineering.jpg';
import textilesImg from '../assets/sectors/textiles.jpg';
import fmcgImg from '../assets/sectors/fmcg.jpg';
import plasticImg from '../assets/sectors/plastic.jpg';
import warehouseImg from '../assets/sectors/warehouse.jpg';
import foodProcessingImg from '../assets/sectors/food_processing.jpg';

// 6 Core Workforce Capabilities
const CAPABILITIES = [
  {
    id: 'bulk-manpower',
    title: 'Bulk Manpower Supply',
    desc: 'Scalable workforce solutions for your large-scale operational requirements.',
    icon: Users,
    iconBg: 'bg-[#2563EB]',
    textColor: 'text-[#2563EB]'
  },
  {
    id: 'contract-staffing',
    title: 'Contract Staffing',
    desc: 'Flexible staffing solutions tailored to your business and production needs.',
    icon: Briefcase,
    iconBg: 'bg-[#0D9488]',
    textColor: 'text-[#0D9488]'
  },
  {
    id: 'technical-recruitment',
    title: 'Technical Recruitment',
    desc: 'Finding the right technical talent for your specialized industrial roles.',
    icon: Search,
    iconBg: 'bg-[#F59E0B]',
    textColor: 'text-[#F59E0B]'
  },
  {
    id: 'production-workforce',
    title: 'Production Workforce',
    desc: 'Skilled and semi-skilled manpower for smooth manufacturing and production operations.',
    icon: Factory,
    iconBg: 'bg-[#06B6D4]',
    textColor: 'text-[#06B6D4]'
  },
  {
    id: 'quality-workforce',
    title: 'Quality Workforce',
    desc: 'Quality-focused workforce support for inspection, testing and compliance.',
    icon: Award,
    iconBg: 'bg-[#8B5CF6]',
    textColor: 'text-[#8B5CF6]'
  },
  {
    id: 'warehouse-logistics',
    title: 'Warehouse & Logistics',
    desc: 'Efficient manpower for warehousing, packaging and logistics operations.',
    icon: Package,
    iconBg: 'bg-[#10B981]',
    textColor: 'text-[#10B981]'
  }
];

// 4 Key Pillars Banner
const PILLARS = [
  {
    title: 'Multi-Industry Focus',
    desc: 'Specialized workforce solutions across core sectors',
    icon: Users
  },
  {
    title: 'Reliable Workforce',
    desc: 'Trained and dependable manpower support',
    icon: ShieldCheck
  },
  {
    title: 'Quick Mobilization',
    desc: 'Rapid deployment for urgent workforce requirements',
    icon: Clock
  },
  {
    title: 'Long-term Partnerships',
    desc: 'Building long-term trust through consistent operational support',
    icon: Handshake
  }
];

// 8 Industries We Serve
const INDUSTRIES = [
  {
    name: 'Automotive & Auto Components',
    image: automotiveImg,
    barColor: '#F59E0B' // Yellow/Orange
  },
  {
    name: 'Electronics & Electrical',
    image: electronicsImg,
    barColor: '#06B6D4' // Cyan
  },
  {
    name: 'Engineering & Industrial Products',
    image: engineeringImg,
    barColor: '#2563EB' // Blue
  },
  {
    name: 'Textiles & Garments',
    image: textilesImg,
    barColor: '#8B5CF6' // Purple
  },
  {
    name: 'FMCG Manufacturing',
    image: fmcgImg,
    barColor: '#EAB308' // Gold
  },
  {
    name: 'Plastic / Injection Moulding',
    image: plasticImg,
    barColor: '#EC4899' // Pink/Coral
  },
  {
    name: 'Warehouse & 3PL Operations',
    image: warehouseImg,
    barColor: '#6366F1' // Indigo
  },
  {
    name: 'Food Processing',
    image: foodProcessingImg,
    barColor: '#10B981' // Green
  }
];

export default function Home() {
  const [showHelpPanel, setShowHelpPanel] = useState(true);

  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. HERO SECTION (Dark Factory Engineers Background) */}
      <section className="relative bg-[#081528] text-white overflow-hidden min-h-[500px] lg:min-h-[560px] flex items-center">
        
        {/* Background Image on Right with Dark Gradient Fade on Left */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImg}
            alt="Manufacturing engineers on production floor"
            className="w-full h-full object-cover object-right lg:object-center opacity-40 lg:opacity-50"
          />
          {/* Dark gradient overlay covering left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081528] via-[#081528]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl space-y-6">
            
            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Building Workforce. <br />
              <span className="text-[#FBBF24]">Powering Industries.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
              Reliable manpower solutions across IT &amp; Technology, Manufacturing, Logistics &amp; Supply Chain and core enterprise operations.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white hover:text-[#081528] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-3 rounded-lg border border-white/60 hover:border-white transition-all duration-200 shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#081528] text-xs sm:text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-xs"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Bottom Feature Pill */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 backdrop-blur-sm border border-white/10 text-xs text-slate-200 shadow-xs">
                <Sparkles size={14} className="text-[#FBBF24]" />
                <span className="font-medium">Workforce Solutions</span>
                <span className="text-white/30">•</span>
                <span className="font-medium">Multi-Industry</span>
                <span className="text-white/30">•</span>
                <span className="font-medium">People-Driven</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "HOW CAN WE HELP YOU TODAY?" (Clean Floating Selection Panel) */}
      {showHelpPanel && (
        <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-10">
          <div className="bg-white rounded-2xl border border-[#DCE5F0] shadow-xl p-6 sm:p-8 space-y-6 relative animate-in fade-in duration-200">
            
            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setShowHelpPanel(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
              aria-label="Close panel"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-center space-y-1">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F3A]">
                How can we help you today?
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Select the option that best describes your requirement.
              </p>
            </div>

            {/* Two Large Selectable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Option 1: Job Seeker 🔵 */}
              <Link
                to="/contact?type=candidate"
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F8FAFC] transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <User size={22} className="fill-[#2563EB]/20" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors">
                      I'm Looking for a Job
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Register your candidate profile and explore verified industrial job opportunities.
                    </p>
                  </div>
                </div>

                <ChevronRight size={18} className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
              </Link>

              {/* Option 2: Employer 🟡 (With Badge & Yellow Border) */}
              <Link
                to="/contact?type=employer"
                className="group relative flex items-center justify-between p-5 rounded-xl bg-[#FFFBEB]/30 border-2 border-[#FBBF24] hover:border-[#F59E0B] hover:bg-[#FFFBEB]/60 transition-all duration-200 shadow-xs"
              >
                {/* 40% OFF / HIRING DESK Badge */}
                <div className="absolute -top-3 right-6 bg-[#FBBF24] text-[#081528] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                  HIRING DESK
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Briefcase size={22} className="fill-[#D97706]/20" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] group-hover:text-[#D97706] transition-colors">
                      I'm Hiring Staff
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Submit your workforce requirement and receive qualified, screened candidates.
                    </p>
                  </div>
                </div>

                <ChevronRight size={18} className="text-[#D97706] group-hover:translate-x-1 transition-all" />
              </Link>

            </div>

            {/* Bottom Note */}
            <div className="text-center pt-2 flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
              <ShieldCheck size={14} className="text-[#10B981]" />
              <span>Trusted by industry leaders. People-driven. Performance-focused.</span>
            </div>

          </div>
        </section>
      )}

      {/* 3. OUR WORKFORCE CAPABILITIES (6 Colorful Service Cards) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Heading with Yellow Underline Accent */}
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              OUR WORKFORCE CAPABILITIES
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B1F3A]">
              End-to-End Workforce Solutions
            </h2>
            <div className="w-12 h-1 bg-[#FBBF24] rounded-full mx-auto mt-2"></div>
          </div>

          {/* 6 Capabilities in a 6-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;

              return (
                <div
                  key={cap.id}
                  className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-200 shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-3">
                    {/* Top Square Icon Badge */}
                    <div className={`w-10 h-10 rounded-xl ${cap.iconBg} text-white flex items-center justify-center shadow-xs`}>
                      <IconComp size={20} />
                    </div>

                    <h3 className="font-heading font-bold text-sm text-[#0B1F3A] leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-2">
                    <Link
                      to={`/services#${cap.id}`}
                      className={`inline-flex items-center gap-1 text-xs font-bold ${cap.textColor} hover:underline`}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. KEY PILLARS BANNER (Soft Light Blue Rounded Container) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-blue-200/60">
              {PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;

                return (
                  <div key={idx} className={`flex items-start gap-3.5 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#2563EB] border border-blue-200 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent size={20} />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-heading font-bold text-sm text-[#0B1F3A]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (8 Industry Cards with Top Thumbnails & Bottom Accent Bars) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Heading with Yellow Underline Accent */}
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B1F3A]">
              Powering Every Major Industrial Sector
            </h2>
            <div className="w-12 h-1 bg-[#FBBF24] rounded-full mx-auto mt-2"></div>
          </div>

          {/* 8 Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 sm:gap-4">
            {INDUSTRIES.map((ind, iIdx) => (
              <Link
                key={iIdx}
                to={`/contact?industry=${encodeURIComponent(ind.name)}`}
                className="group flex flex-col justify-between rounded-xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] overflow-hidden transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                {/* Thumbnail Image */}
                <div className="h-20 sm:h-24 w-full overflow-hidden bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Sector Title */}
                <div className="p-2.5 text-center flex-1 flex items-center justify-center">
                  <span className="font-heading font-bold text-[11px] sm:text-xs text-[#0B1F3A] leading-tight line-clamp-2">
                    {ind.name}
                  </span>
                </div>

                {/* Bottom Color Accent Strip */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: ind.barColor }}
                ></div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA (Deep Navy Box with Headphone Icon & Yellow Button) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#081830] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#1E3A8A]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              
              {/* Left Headphone Icon & Text */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-full bg-[#142B4D] border border-[#2563EB]/40 flex items-center justify-center text-[#60A5FA] shrink-0 shadow-xs">
                  <Headphones size={26} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Need the Right Workforce for Your Operations?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Speak with our operations team to secure reliable manpower support for your business.
                  </p>
                </div>
              </div>

              {/* Right Yellow CTA Button */}
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#081528] text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-xs group"
                >
                  <span>Contact Us Today</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

