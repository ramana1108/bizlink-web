import {
  CheckCircle2,
  Clock,
  Search,
  UserCheck,
  FileCheck2,
  Briefcase,
  Users,
  ShieldCheck
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { PROCESS_STEPS, SCREENING_APPROACH } from '../data/companyData';

const STEP_ICONS = {
  '01': Clock,
  '02': Search,
  '03': UserCheck,
  '04': Users,
  '05': FileCheck2,
  '06': Briefcase,
  '07': ShieldCheck
};

export default function Process() {
  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Our Process"
        eyebrow="OUR SERVICE MODEL"
        title="FROM REQUIREMENT TO"
        highlight="WORKFORCE."
        description="A structured 7-step deployment methodology ensuring transparent candidate mapping, role fitment and seamless plant gate onboarding."
      />

      {/* 2. 7-Step Service Model */}
      <section className="py-12 md:py-16 bg-[#071A3D] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              End-to-End Service Model
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our 7-Step Deployment Framework
            </h2>
            <p className="text-[#8EA6CA] text-xs">
              Requirement → Sourcing → Screening → Interview Coordination → Documentation → Joining → Workforce Support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step) => {
              const IconComp = STEP_ICONS[step.step] || Clock;

              return (
                <div
                  key={step.step}
                  className="bg-[#0B2555] rounded-2xl p-5 border border-[rgba(96,165,250,0.15)] shadow-navy-card hover:border-[rgba(96,165,250,0.4)] transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-[#102F63] text-[#60A5FA] font-mono font-black text-xs flex items-center justify-center border border-[rgba(96,165,250,0.2)]">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-bold text-[#60A5FA] uppercase tracking-wider bg-blue-500/15 px-2 py-0.5 rounded-full border border-blue-400/25">
                        Stage {step.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-white">
                      {step.title}
                    </h3>

                    <p className="text-[#C7D5EA] text-xs leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[rgba(96,165,250,0.12)] text-[11px] text-[#8EA6CA] flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#60A5FA] shrink-0" />
                    <span>{step.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Candidate Sourcing & Screening Approach (5 Pillars) */}
      <section className="py-12 md:py-16 bg-[#0B2555] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Screening Framework
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Candidate Sourcing & Screening Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCREENING_APPROACH.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#102F63] p-5 rounded-2xl border border-[rgba(96,165,250,0.15)] shadow-navy-card space-y-2 hover:border-[rgba(96,165,250,0.4)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-[#60A5FA] font-mono font-bold text-xs flex items-center justify-center border border-blue-400/25">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8EA6CA]">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white">
                  {item.title}
                </h3>

                <p className="text-[#C7D5EA] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Contextual Bottom CTA */}
      <CTASection />
    </AnimatedPage>
  );
}
