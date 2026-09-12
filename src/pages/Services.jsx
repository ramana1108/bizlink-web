import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Settings2,
  Headphones,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  PhoneCall,
  Clock,
  ArrowUpRight,
  Factory,
  Laptop,
  Boxes,
  ShoppingBag,
  Truck,
  HeartPulse,
  Wrench,
  Hotel,
  Utensils,
  Shirt,
  HardHat
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { CORE_SERVICES } from '../data/companyData';
import servicesHeroBg from '../assets/services_hero_bg.jpg';

const SERVICE_ICON_MAP = {
  '01': Briefcase,
  '02': Users,
  '03': Settings2,
  '04': Headphones,
  '05': Cpu,
  '06': Layers
};

const INDUSTRIES_WE_SERVE = [
  { name: 'Manufacturing', icon: Factory, color: '#2563EB', bg: '#EFF6FF', border: '#DBEAFE' },
  { name: 'IT & Technology', icon: Laptop, color: '#0284C7', bg: '#F0F9FF', border: '#E0F2FE' },
  { name: 'Non-IT', icon: Building2, color: '#6366F1', bg: '#EEF2FF', border: '#E0E7FF' },
  { name: 'Warehouse & Logistics', icon: Boxes, color: '#D97706', bg: '#FFFBEB', border: '#FEF3C7' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, color: '#E11D48', bg: '#FFF1F2', border: '#FFE4E6' },
  { name: 'BPO, Telecalling & Customer Support', icon: PhoneCall, color: '#7C3AED', bg: '#F5F3FF', border: '#EDE9FE' },
  { name: 'FMCG & Food', icon: Utensils, color: '#059669', bg: '#ECFDF5', border: '#D1FAE5' },
  { name: 'Textile & Garments', icon: Shirt, color: '#0D9488', bg: '#F0FDFA', border: '#CCFBF1' },
  { name: 'Transport & Logistics', icon: Truck, color: '#0891B2', bg: '#ECFEFF', border: '#CFFAFE' },
  { name: 'Healthcare & Support Services', icon: HeartPulse, color: '#DC2626', bg: '#FEF2F2', border: '#FEE2E2' },
  { name: 'Engineering & Industrial', icon: HardHat, color: '#EA580C', bg: '#FFF7ED', border: '#FFEDD5' },
  { name: 'Hospitality & Facility Services', icon: Hotel, color: '#65A30D', bg: '#F7FEE7', border: '#ECFCCB' }
];

export default function Services() {
  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. Page Hero: Dark Navy Hero with High-Quality Background Image & Overlay */}
      <section className="relative bg-[#081528] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#1E3A8A]/30">
        
        {/* Background Image with Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Multi-industry operations, technical workforce and staffing solutions"
            className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-40 transition-transform duration-700 ease-out hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081528] via-[#081528]/95 sm:via-[#081528]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-transparent to-[#081528]/40"></div>
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 backdrop-blur-sm border border-white/15 text-xs font-bold uppercase tracking-wider text-[#93C5FD] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span>Workforce Capabilities & Services</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Workforce Solutions Across <br />
              <span className="text-[#FBBF24]">Multiple Industries & Business Sectors</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              PROFECTUS BIZLINK provides flexible workforce and recruitment solutions across multiple industries and business requirements.
            </p>

            {/* Quick jump pills to exactly 6 services */}
            <div className="pt-2 flex flex-wrap gap-2">
              {CORE_SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B2555]/80 hover:bg-[#1E3A8A] border border-white/15 text-xs font-semibold text-slate-100 transition-colors shadow-xs backdrop-blur-sm"
                >
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT, CLEAN & VISUAL: "INDUSTRIES WE SERVE" COMPACT TILES */}
      <section className="py-14 sm:py-18 bg-[#F6F8FC] border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Sector Coverage
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Workforce and recruitment solutions across diverse industries.
            </p>
          </div>

          {/* 12 Compact Industry Tiles (4 cols desktop, 3 cols tablet, 2 cols mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {INDUSTRIES_WE_SERVE.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <Link
                  key={idx}
                  to={`/contact?industry=${encodeURIComponent(item.name)}`}
                  className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white border border-[#DCE5F0] hover:border-[#2563EB]/40 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Icon Box with mild pastel tint */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      backgroundColor: item.bg,
                      color: item.color,
                      border: `1px solid ${item.border}`
                    }}
                  >
                    <IconComp size={18} />
                  </div>

                  {/* Industry Name */}
                  <div className="min-w-0 flex-1">
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors leading-tight line-clamp-2">
                      {item.name}
                    </span>
                  </div>

                  {/* Subtle Arrow */}
                  <ArrowRight
                    size={13}
                    className="text-[#94A3B8] group-hover:text-[#2563EB] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 hidden sm:block"
                  />
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. 6 DETAILED ALTERNATING EDITORIAL SERVICE SECTIONS */}
      <section className="py-16 sm:py-20 space-y-16 sm:space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          <SectionHeading
            centered
            eyebrow="DETAILED CAPABILITIES"
            title="In-Depth Workforce Sourcing & Deployment"
            subtitle="Explore how our structured sourcing approach supports your operational requirements across sectors."
          />

          {CORE_SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            const IconComp = SERVICE_ICON_MAP[service.number] || Briefcase;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 pt-4"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Image Block (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-[#DCE5F0] shadow-sm bg-white p-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 sm:h-84 object-cover rounded-xl"
                      />
                      
                    </div>
                  </div>

                  {/* Text & Content Block (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${service.themeColor}15`,
                            color: service.themeColor
                          }}
                        >
                          <IconComp size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                          {service.badgeText}
                        </span>
                      </div>

                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#14213D]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Operational Suitability & SLA Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F6F8FC] border border-[#DCE5F0] text-xs">
                      <div>
                        <span className="text-[#64748B] block font-medium">Deployment Model:</span>
                        <strong className="text-[#14213D] font-bold">{service.turnaround}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B] block font-medium">Best Suited For:</span>
                        <span className="text-[#14213D] font-medium">{service.suitableFor}</span>
                      </div>
                    </div>

                    {/* Profiles Supported */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14213D] block">
                        Included Roles & Coverage:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.profiles.map((prof, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-[#DCE5F0] text-[#14213D] shadow-xs"
                          >
                            <CheckCircle2
                              size={13}
                              style={{ color: service.themeColor }}
                            />
                            <span>{prof}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct RFQ / Contact Link */}
                    <div className="pt-3">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:brightness-110"
                        style={{ backgroundColor: service.themeColor }}
                      >
                        <span>Request Workforce for {service.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection />

    </div>
  );
}
