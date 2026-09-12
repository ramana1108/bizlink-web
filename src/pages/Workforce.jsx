import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Boxes,
  Settings2,
  Wrench,
  ShieldCheck,
  Truck,
  Briefcase,
  FileCheck2,
  Search
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { WORKFORCE_FUNCTIONS, PRODUCTION_LIFECYCLE_STEPS } from '../data/companyData';

const FUNCTION_ICONS = {
  'Production / Assembly': Factory,
  'Machine Operations': Settings2,
  'Fabrication': Wrench,
  'Quality': ShieldCheck,
  'Material Handling': Boxes,
  'Warehouse': Truck,
  'Packaging': Briefcase,
  'Maintenance': Wrench,
  'Logistics': Truck,
  'Admin / Support': FileCheck2
};

export default function Workforce() {
  const [selectedLifecycleStep, setSelectedLifecycleStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFunctions = WORKFORCE_FUNCTIONS.filter((fn) =>
    fn.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fn.profiles.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
    fn.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Workforce Structure"
        eyebrow="MANUFACTURING MANPOWER STRUCTURE"
        title="THE PEOPLE BEHIND"
        highlight="THE OPERATION."
        description="Structured manpower deployment configured directly around your factory's production lifecycle across 10 essential manufacturing disciplines."
        bgImage="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
        ctaText="Submit Headcount Needs"
        ctaLink="/contact"
        secondaryCtaText="Explore What We Do"
        secondaryCtaLink="/what-we-do"
      />

      {/* 2. Production Lifecycle Structure */}
      <section className="py-12 md:py-16 bg-[#071A3D] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Plant Floor Flow
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Typical Production-Line Structure
            </h2>
          </div>

          {/* Interactive Flow Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {PRODUCTION_LIFECYCLE_STEPS.map((step, idx) => {
              const isSelected = selectedLifecycleStep === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedLifecycleStep(idx)}
                  className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E73FF] text-white border-[#1E73FF] shadow-lg btn-primary-glow -translate-y-1'
                      : 'bg-[#0B2555] text-white border-[rgba(96,165,250,0.15)] hover:border-[rgba(96,165,250,0.4)] hover:bg-[#102F63]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-[#60A5FA] animate-pulse'
                      }`}
                    ></span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm mb-1 text-white">
                      {step.title}
                    </h3>
                    <p
                      className={`text-[11px] leading-tight ${
                        isSelected ? 'text-blue-100' : 'text-[#C7D5EA]'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="bg-[#0B2555] rounded-3xl p-5 border border-[rgba(96,165,250,0.2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-navy-card">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#60A5FA]">
                Active Node: {PRODUCTION_LIFECYCLE_STEPS[selectedLifecycleStep].title}
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PRODUCTION_LIFECYCLE_STEPS[selectedLifecycleStep].relevantProfiles.map((prof, pIdx) => (
                  <span key={pIdx} className="px-3 py-1 bg-[#071A3D] text-[#C7D5EA] text-xs font-semibold rounded-md border border-[rgba(96,165,250,0.15)] shadow-2xs">
                    ✓ {prof}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/contact?stage=${encodeURIComponent(PRODUCTION_LIFECYCLE_STEPS[selectedLifecycleStep].title)}`}
              className="inline-flex items-center gap-1.5 bg-[#1E73FF] hover:bg-[#1677FF] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-md btn-primary-glow shrink-0"
            >
              <span>Request Staff For This Stage</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. 10 Function Matrices */}
      <section className="py-12 md:py-16 bg-[#0B2555] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                Function Matrices
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                10 Manufacturing Functions
              </h2>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8EA6CA]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search role or function..."
                className="w-full bg-[#071A3D] border border-[rgba(96,165,250,0.2)] rounded-full pl-9 pr-3 py-2 text-xs text-white placeholder:text-[#8EA6CA] focus:outline-none focus:border-[#1E73FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFunctions.map((fn, idx) => {
              const IconComp = FUNCTION_ICONS[fn.function] || Factory;

              return (
                <div
                  key={idx}
                  className="bg-[#102F63] rounded-3xl p-5 sm:p-6 border border-[rgba(96,165,250,0.15)] shadow-navy-card hover:border-[rgba(96,165,250,0.4)] transition-all flex flex-col justify-between space-y-3.5"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-[#60A5FA] flex items-center justify-center shrink-0 border border-blue-400/25">
                          <IconComp size={18} />
                        </div>
                        <div>
                          <h3 className="font-heading font-extrabold text-base text-white">
                            {fn.function}
                          </h3>
                          <span className="text-[10px] font-bold text-[#60A5FA] uppercase tracking-wider">
                            {fn.category}
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#071A3D] text-[10px] font-mono text-[#C7D5EA] border border-[rgba(96,165,250,0.15)]">
                        {fn.skillLevel}
                      </span>
                    </div>

                    <p className="text-[#C7D5EA] text-xs leading-relaxed">
                      {fn.desc}
                    </p>

                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#60A5FA] block mb-1.5">
                        Supported Profiles:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {fn.profiles.map((profile, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#071A3D] border border-[rgba(96,165,250,0.15)] text-xs font-medium text-[#C7D5EA]"
                          >
                            <CheckCircle2 size={11} className="text-[#60A5FA] shrink-0" />
                            <span>{profile}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[rgba(96,165,250,0.12)] flex items-center justify-between">
                    <Link
                      to={`/contact?function=${encodeURIComponent(fn.function)}`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#60A5FA] hover:text-white uppercase tracking-wider"
                    >
                      <span>Request {fn.function} Staff</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection />
    </AnimatedPage>
  );
}
