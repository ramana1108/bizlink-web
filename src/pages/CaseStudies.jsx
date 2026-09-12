import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  Layers,
  AlertCircle,
  Factory
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { CASE_STUDIES_DATA } from '../data/companyData';
import caseStudiesHeroBg from '../assets/case_studies_hero_bg.jpg';

export default function CaseStudies() {
  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. Page Hero: Dark Navy Hero with High-Quality Background Image & Overlay */}
      <section className="relative bg-[#081528] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#1E3A8A]/30">
        
        {/* Background Image with Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={caseStudiesHeroBg}
            alt="Business analytics, project performance and workforce deployment impact"
            className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-40 transition-transform duration-700 ease-out hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081528] via-[#081528]/95 sm:via-[#081528]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-transparent to-[#081528]/40"></div>
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 backdrop-blur-sm border border-white/15 text-xs font-bold uppercase tracking-wider text-[#93C5FD] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span>Deployments & Operational Scenarios</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Case Studies & <br />
              <span className="text-[#FBBF24]">Workforce Deployments</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Explore how Profectus BizLink supports manufacturing plants, workshops and enterprise logistics hubs with structured candidate screening, rapid mobilization and shift continuity.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0B2555]/80 backdrop-blur-sm border border-[#3B82F6]/30 text-xs text-blue-200 flex items-start gap-2.5">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-[#FBBF24]" />
              <span>
                <strong className="text-white">Note on Client Confidentiality:</strong> The case studies below describe actual operational deployment models and role workflows. Specific client names and proprietary figures are kept confidential in accordance with standard non-disclosure service agreements.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY PRESENTATIONS (Image + Text Clean Layout) */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {CASE_STUDIES_DATA.map((study, sIdx) => {
            const isEven = sIdx % 2 === 1;

            return (
              <div
                key={study.id}
                id={study.id}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#DCE5F0] shadow-xs hover:border-[#CBD5E1] transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Left Media & Metadata (5 cols) */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-[#DCE5F0] bg-white p-1">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 sm:h-72 object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#2563EB] border border-[#DCE5F0]">
                        {study.category}
                      </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="p-4 rounded-xl bg-[#F6F8FC] border border-[#DCE5F0] space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B]">Sector:</span>
                        <strong className="text-[#14213D]">{study.sector}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B]">Region / Hub:</span>
                        <span className="text-[#14213D] font-medium">{study.location}</span>
                      </div>
                      <div className="pt-2 border-t border-[#EDF2F7] flex items-center gap-1.5 text-[#10B981] font-semibold text-[11px]">
                        <ShieldCheck size={14} />
                        <span>Verified Operational Scenario</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Narrative & Outcomes (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#14213D]">
                        {study.title}
                      </h2>
                    </div>

                    {/* Overview & Challenge */}
                    <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                      <p>
                        <strong>Operational Context:</strong> {study.overview}
                      </p>
                      <p>
                        <strong>The Challenge:</strong> {study.challenge}
                      </p>
                      <p>
                        <strong>BizLink Solution:</strong> {study.solution}
                      </p>
                    </div>

                    {/* Roles Deployed */}
                    <div className="space-y-2 pt-1 border-t border-[#EDF2F7]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14213D] block">
                        Workforce Roles Deployed:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {study.rolesDeployed.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#F6F8FC] border border-[#DCE5F0] text-[#14213D]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                            <span>{role}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="space-y-2 pt-1 border-t border-[#EDF2F7]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14213D] block">
                        Operational Outcomes:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#14213D]">
                        {study.outcomes.map((outcome, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <Link
                        to={`/contact?industry=${encodeURIComponent(study.sector)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                      >
                        <span>Discuss Similar Requirements</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection
        eyebrow="READY TO DEPLOY?"
        title="Need Similar Workforce Solutions for Your Plant?"
        description="Connect with our operations desk to discuss your shift headcount, machine requirements or custom staffing schedule."
        primaryButtonText="Submit Workforce Requirement"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore All Services"
        secondaryButtonLink="/services"
      />

    </div>
  );
}
