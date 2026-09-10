import { Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  Settings2,
  Flame,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  Factory
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { CORE_SERVICES, MANUFACTURING_FUNCTIONS } from '../data/companyData';
import servicesHeroBg from '../assets/services_hero_bg.jpg';

const SERVICE_ICON_MAP = {
  '01': Users,
  '02': Briefcase,
  '03': Settings2,
  '04': Flame,
  '05': ShieldCheck,
  '06': Truck
};

export default function Services() {
  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. Page Hero: Dark Navy Hero with High-Quality Background Image & Overlay */}
      <section className="relative bg-[#081528] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#1E3A8A]/30">
        
        {/* Background Image with Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Multi-industry operations, technical workforce and logistics solutions"
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
              Workforce Solutions Designed for <br />
              <span className="text-[#FBBF24]">Multi-Industry Operations</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              From high-volume assembly operator ramp-ups to skilled technicians, warehouse teams and technical specialists, we provide role-screened manpower solutions tailored to your operational shifts.
            </p>

            {/* Quick jump pills to services */}
            <div className="pt-2 flex flex-wrap gap-2">
              {CORE_SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B2555]/80 hover:bg-[#1E3A8A] border border-white/15 text-xs font-semibold text-slate-100 transition-colors shadow-xs backdrop-blur-sm"
                >
                  <span className="font-mono text-[10px] font-bold text-[#FBBF24]">
                    {s.number}
                  </span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 6 DETAILED ALTERNATING EDITORIAL SERVICE SECTIONS */}
      <section className="py-16 sm:py-20 space-y-16 sm:space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {CORE_SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            const IconComp = SERVICE_ICON_MAP[service.number] || Users;

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
                      
                      {/* Floating Badge */}
                      <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-[#DCE5F0] shadow-xs">
                        <span
                          className="font-mono font-extrabold text-xs"
                          style={{ color: service.themeColor }}
                        >
                          Service {service.number}
                        </span>
                      </div>
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
                        Typical Profiles Sourced:
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
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

      {/* 3. MANUFACTURING WORKFORCE FUNCTIONS STRUCTURE (Clean Reference Section) */}
      <section className="py-16 bg-[#F6F8FC] border-y border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <SectionHeading
            centered
            eyebrow="SHOPFLOOR OPERATIONS"
            title="Manufacturing Workforce Structure"
            subtitle="Functional role classifications across production, assembly lines, machine operations and warehouse stages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MANUFACTURING_FUNCTIONS.map((fn, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-xl bg-white border border-[#DCE5F0] shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2.5 text-[#2563EB]">
                  <Factory size={18} />
                  <h3 className="font-heading font-bold text-sm text-[#14213D]">
                    {fn.function}
                  </h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {fn.description}
                </p>
                <div className="pt-2 border-t border-[#EDF2F7]">
                  <span className="text-[11px] font-semibold text-[#14213D] block">
                    Roles: {fn.profiles}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />

    </div>
  );
}
