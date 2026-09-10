import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Cpu,
  Wrench,
  Boxes,
  Sparkles,
  Settings2,
  Truck,
  Building2,
  MapPin
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { INDUSTRIES_DATA } from '../data/companyData';

const INDUSTRY_ICONS = {
  '01': Factory,
  '02': Cpu,
  '03': Wrench,
  '04': Boxes,
  '05': Sparkles,
  '06': Settings2,
  '07': Truck,
  '08': Building2
};

export default function Industries() {
  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Industries"
        eyebrow="SECTOR-WISE MANUFACTURING SUPPORT"
        title="WORKFORCE EXPERTISE ACROSS"
        highlight="INDUSTRIAL VERTICALS"
        description="Dedicated staffing, recruitment and operator mobilization tailored to machine capabilities, takt-time and quality benchmarks across 8 manufacturing sectors."
        ctaText="Inquire For Your Sector"
        ctaLink="/contact"
        secondaryCtaText="Explore What We Do"
        secondaryCtaLink="/what-we-do"
      />

      {/* 2. Grid for 8 Sectors: Clean White Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Sector Specialization
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              8 Key Manufacturing Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Authentic industry deployments configured directly around tooling, takt times and shopfloor shift rhythms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES_DATA.map((industry) => {
              const IconComp = INDUSTRY_ICONS[industry.number] || Factory;

              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* 16:9 Image with Dark Navy Gradient Overlay */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#061735]">
                    <img
                      src={industry.image}
                      alt={`${industry.name} manufacturing plant`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(7, 26, 61, 0.1) 0%, rgba(7, 26, 61, 0.4) 40%, rgba(7, 26, 61, 0.95) 100%)'
                      }}
                    ></div>
                    
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 bg-[#1E73FF] text-white font-mono font-bold text-xs rounded-full shadow-md">
                        Sector {industry.number}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#071A3D]/90 text-[#60A5FA] border border-[rgba(96,165,250,0.3)] flex items-center justify-center shrink-0 shadow-sm backdrop-blur-xs">
                        <IconComp size={18} />
                      </div>
                      <h3 className="font-heading font-black text-base sm:text-lg text-white drop-shadow-md">
                        {industry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-3">
                      <p className="text-slate-900 text-xs sm:text-sm font-bold">
                        {industry.shortSummary}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {industry.fullSummary}
                      </p>

                      {industry.hubHighlights && (
                        <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-xs text-slate-700">
                          <MapPin size={14} className="text-[#1E73FF] shrink-0" />
                          <span className="text-xs"><strong className="text-slate-900">Hubs:</strong> {industry.hubHighlights}</span>
                        </div>
                      )}

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Supported Shopfloor Roles:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.roles.map((role, rIdx) => (
                            <span
                              key={rIdx}
                              className="text-xs font-medium bg-[#F1F6FD] text-slate-700 border border-blue-100/80 px-2.5 py-1 rounded-md inline-flex items-center gap-1"
                            >
                              <CheckCircle2 size={11} className="text-[#1E73FF] shrink-0" />
                              <span>{role}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/contact?industry=${encodeURIComponent(industry.name)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E73FF] group-hover:text-[#1677FF] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Inquire For This Sector</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </AnimatedPage>
  );
}
