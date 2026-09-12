import { Link } from 'react-router-dom';
import {
  Users,
  ShieldCheck,
  FileCheck,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Globe2,
  Scale,
  ShieldAlert,
  Award,
  HeartHandshake,
  FileText,
  Clock,
  Sparkles,
  Building2,
  Check
} from 'lucide-react';

import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

import {
  SUSTAINABILITY_PILLARS,
  FUTURE_SUSTAINABILITY_INITIATIVES,
  COMPANY_INFO
} from '../data/companyData';

const PILLAR_ICONS = {
  'people-employment': Users,
  'responsible-workforce': ShieldCheck,
  'process-oriented': FileCheck,
  'long-term-partnerships': Handshake
};

// 3 Dimensions of ESG (Environmental, Social, Governance) Framework
const ESG_DIMENSIONS = [
  {
    letter: 'E',
    dimension: 'Environmental',
    title: 'Resource Efficiency & Digital Operations',
    desc: 'Minimizing administrative carbon footprint and paper waste through fully digitized candidate workflows.',
    items: [
      '100% digital candidate profiling & paperless recordkeeping',
      'Optimized regional mobilization to reduce candidate transit burden',
      'Energy-conscious office protocols & cloud-first administrative infrastructure'
    ]
  },
  {
    letter: 'S',
    dimension: 'Social',
    title: 'Candidate Dignity & Workplace Welfare',
    desc: 'Empowering shopfloor workforce through fair wage transparency, safety training and zero-fee sourcing.',
    items: [
      'Strict zero-fee policy — no placement charges on job seekers',
      'Transparent shift compensation, statutory benefits & timely payouts',
      'Pre-deployment safety briefings and dignified workplace orientation'
    ]
  },
  {
    letter: 'G',
    dimension: 'Governance',
    title: 'Statutory Rigor & Business Integrity',
    desc: 'Upholding unquestionable legal compliance, ethical client contracts and zero-tolerance grievance redressal.',
    items: [
      'Strict adherence to EPF, ESIC and State Minimum Wage acts',
      'Transparent service-level agreements and plant shift attendance records',
      'Equal opportunity sourcing with zero discrimination across caste, gender or creed'
    ]
  }
];

// Executive ESG Metrics / Commitments
const ESG_METRICS = [
  {
    icon: Scale,
    title: '100% Statutory Adherence',
    subtitle: 'EPF, ESIC & wage code compliance on every deployment'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Fee Candidate Model',
    subtitle: 'No recruitment or onboarding deductions for workers'
  },
  {
    icon: Users,
    title: 'Dignified Workplace Culture',
    subtitle: 'Clear shift specifications & safe shopfloor orientation'
  },
  {
    icon: Handshake,
    title: 'Long-Term Continuity',
    subtitle: 'Proactive replacement & collaborative client shift planning'
  }
];

export default function Sustainability() {
  return (
    <AnimatedPage>
      {/* 1. Page Hero: Dark Navy Gradient Overlay with Watermark Logo */}
      <PageHero
        breadcrumb="Sustainability"
        eyebrow="RESPONSIBLE INDUSTRIAL WORKFORCE PRACTICES"
        title="SUSTAINABLE WORKFORCE &"
        highlight="RESPONSIBLE PRACTICES"
        description="Fostering structured employment opportunities, fair wage transparency, dignified workplace orientation and dependable long-term industrial partnerships across India's manufacturing corridors."
        ctaText="Explore ESG Framework"
        ctaLink="#pillars"
        secondaryCtaText="Contact Operations Desk"
        secondaryCtaLink="/contact"
        badges={[
          '100% Statutory Adherence',
          'Candidate Dignity & Zero Fees',
          'Plant Shift Safety & Welfare'
        ]}
      />

      {/* 2. Executive ESG Commitment Highlights (4 Metric Cards) */}
      <section className="bg-[#F8FAFC] py-10 sm:py-12 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ESG_METRICS.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#F1F6FD] text-[#1E73FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#1E73FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <MetricIcon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-extrabold text-sm text-[#061735] group-hover:text-[#1E73FF] transition-colors">
                      {metric.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core ESG Pillars: Clean White Section with Dark Navy Typography & Emerald Accents */}
      <section id="pillars" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                <Leaf size={13} className="text-emerald-600" />
                <span>ESG & Responsible Operations</span>
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#061735] tracking-tight">
                4 Core Sustainability Pillars
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Promoting structured recruitment, candidate dignity, transparent documentation and workforce continuity across India's manufacturing belts.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-slate-500 bg-[#F1F6FD] px-4 py-2 rounded-xl border border-blue-100">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Audited Operational Framework</span>
            </div>
          </div>

          {/* 4 Cards Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const IconComp = PILLAR_ICONS[pillar.id] || Users;

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/40 transition-all duration-300 flex flex-col justify-between group space-y-6 relative overflow-hidden"
                >
                  {/* Subtle top accent highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/40 via-[#1E73FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="space-y-4">
                    {/* Top Bar: Corporate Icon + Refined ESG Badge */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#F1F6FD] text-[#1E73FF] border border-blue-100 flex items-center justify-center group-hover:bg-[#1E73FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <IconComp size={22} />
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#061735] group-hover:text-[#1E73FF] transition-colors duration-200">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>

                    {/* Commitment Highlights */}
                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                        Commitment Highlights:
                      </span>
                      <div className="space-y-2">
                        {pillar.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-[#071A3D] font-bold">Profectus ESG Standard</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <Check size={12} className="stroke-[3]" /> Active Practice
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ESG Framework: Three Dimensions of Responsibility (E, S, G Split) */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Comprehensive ESG Alignment
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#061735] tracking-tight">
              Three Dimensions of Responsibility
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Embedding sustainability across environmental stewardship, social worker welfare and rigorous corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ESG_DIMENSIONS.map((dim, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/40 transition-all duration-300 flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  {/* Dimension Header with Large Letter */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F1F6FD] text-[#1E73FF] font-heading font-black text-xl flex items-center justify-center border border-blue-100 shadow-2xs group-hover:bg-[#1E73FF] group-hover:text-white transition-colors duration-300">
                      {dim.letter}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {dim.dimension}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#061735] group-hover:text-[#1E73FF] transition-colors">
                    {dim.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dim.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {dim.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Corporate Ethics & Worker Dignity Pledge (20% Navy Brand Anchor Card) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#061735] text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[rgba(96,165,250,0.25)] shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E73FF]/15 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Statement (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2555] border border-[rgba(96,165,250,0.3)] text-xs font-bold uppercase tracking-wider text-[#93C5FD]">
                  <Award size={13} className="text-[#60A5FA]" />
                  <span>Ethical Recruitment Declaration</span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Worker Dignity and Statutory Compliance Are Non-Negotiable
                </h2>

                <blockquote className="text-sm sm:text-base text-[#C7D5EA] font-normal leading-relaxed italic border-l-2 border-emerald-400 pl-4">
                  "Sustainable manufacturing requires a sustainable workforce. By treating every operator with respect, ensuring complete statutory safety nets and upholding transparent employer partnerships, we build the operational stability that modern industry demands."
                </blockquote>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#93C5FD]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Zero Placement Charges</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>100% On-Time Wage Records</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Statutory EPF & ESIC Protected</span>
                  </div>
                </div>
              </div>

              {/* Right Assurance Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#0B2555]/90 rounded-2xl p-6 border border-[rgba(96,165,250,0.25)] space-y-4 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                    Corporate Commitment
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Verified
                  </span>
                </div>

                <div className="space-y-3 text-xs text-[#C7D5EA]">
                  <p>
                    <strong className="text-white block mb-0.5">{COMPANY_INFO.legalName}</strong>
                    Adheres strictly to Indian Labour Code statutes, workplace health and safety norms and transparent employer-candidate terms.
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Headquartered in {COMPANY_INFO.address.full}. Serving industrial clusters across Tamil Nadu & beyond.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#1E73FF] hover:bg-[#1677FF] text-white text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-md btn-primary-glow"
                  >
                    <span>Request ESG Compliance File</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Future Sustainability Initiatives: Soft Light Blue Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F1F6FD] text-slate-900 border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-white px-3 py-1 rounded-full border border-blue-200/60 inline-block shadow-2xs">
              Continuous Improvement
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#061735] tracking-tight">
              Future Sustainability Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Expanding responsible business practices, operator welfare protocols and community outreach as industrial deployments scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUTURE_SUSTAINABILITY_INITIATIVES.map((init, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-blue-100/80 shadow-corporate-card hover:border-[#1E73FF]/50 hover:shadow-corporate-hover transition-all duration-300 space-y-3 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-end">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-[#061735]">
                    {init.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {init.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Targeted Initiative</span>
                  <span className="text-[#1E73FF] font-semibold">Continuous</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Closing CTA */}
      <CTASection
        badge="Ethical Recruitment Standards"
        title="Committed to Sustainable Industrial Growth"
        description="Partner with a workforce organisation that prioritizes worker dignity, statutory compliance rigor and reliable shift continuity."
      />
    </AnimatedPage>
  );
}
