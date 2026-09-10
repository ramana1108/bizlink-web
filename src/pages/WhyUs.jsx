import { Link } from 'react-router-dom';
import {
  Clock,
  Factory,
  Users,
  UserCheck,
  Settings2,
  MessageSquare,
  TrendingUp,
  Award,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { WHY_CHOOSE_ITEMS, COMPANY_INFO } from '../data/companyData';

const WHY_ICONS = [
  Clock,
  CheckCircle2,
  Factory,
  Users,
  UserCheck,
  Settings2,
  MessageSquare,
  TrendingUp
];

export default function WhyUs() {
  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Why Us"
        eyebrow="WHY CHOOSE PROFECTUS BIZLINK"
        title="BUILT FOR THE DEMANDS"
        highlight="OF INDUSTRY."
        description="We combine deep manufacturing domain insight, high-volume candidate reach and responsive coordination to keep your factory lines running smoothly."
      />

      {/* 2. 8 Corporate Differentiators */}
      <section className="py-12 md:py-16 bg-[#071A3D] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Value Pillars
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              8 Core Reasons to Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComp = WHY_ICONS[idx] || Award;

              return (
                <div
                  key={idx}
                  className="bg-[#0B2555] p-5 rounded-2xl border border-[rgba(96,165,250,0.15)] shadow-navy-card hover:border-[rgba(96,165,250,0.4)] hover:bg-[#102F63] transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#102F63] text-[#60A5FA] flex items-center justify-center border border-[rgba(96,165,250,0.2)] shadow-xs">
                        <IconComp size={18} />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#60A5FA]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-base text-white">
                      {item.title}
                    </h3>

                    <p className="text-[#C7D5EA] text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Comparative Advantage Table */}
      <section className="py-12 md:py-16 bg-[#0B2555] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Operational Comparison
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Traditional Agencies vs PROFECTUS BIZLINK
            </h2>
          </div>

          <div className="overflow-x-auto bg-[#071A3D] rounded-2xl border border-[rgba(96,165,250,0.2)] shadow-navy-card">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[rgba(96,165,250,0.15)] text-[#C7D5EA] uppercase text-[11px] font-bold bg-[#061735]">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4 text-[#8EA6CA]">Traditional Agencies</th>
                  <th className="py-3 px-4 text-[#60A5FA] bg-blue-500/10 font-bold">PROFECTUS BIZLINK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(96,165,250,0.1)] text-xs">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Manufacturing Focus</td>
                  <td className="py-3 px-4 text-[#8EA6CA]">Generic staffing without shopfloor understanding</td>
                  <td className="py-3 px-4 text-white font-semibold bg-blue-500/10">Deep focus on plant takt-time, machine cells & shift rhythms</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Screening Methodology</td>
                  <td className="py-3 px-4 text-[#8EA6CA]">Basic resume forwarding</td>
                  <td className="py-3 px-4 text-white font-semibold bg-blue-500/10">Role-based technical, physical and background verification</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Mobilisation SLA</td>
                  <td className="py-3 px-4 text-[#8EA6CA]">10-15 days turnaround</td>
                  <td className="py-3 px-4 text-white font-semibold bg-blue-500/10">Fast mobilisation within 24-48 hours for urgent ramp-ups</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Dropout Management</td>
                  <td className="py-3 px-4 text-[#8EA6CA]">High dropouts on joining day</td>
                  <td className="py-3 px-4 text-white font-semibold bg-blue-500/10">Regular candidate engagement + 15% standby reserve pool</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. Partnership Promise Showcase */}
      <section className="py-12 md:py-16 bg-[#071A3D] text-white border-b border-[rgba(96,165,250,0.15)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0B2555] rounded-3xl p-6 sm:p-8 border border-[rgba(96,165,250,0.2)] text-center space-y-3.5 shadow-navy-card">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-[#60A5FA] flex items-center justify-center mx-auto border border-blue-400/25">
              <Award size={18} />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] block">
              Our Partnership Promise
            </span>

            <blockquote className="text-white text-xs sm:text-sm font-medium leading-relaxed italic max-w-2xl mx-auto">
              "{COMPANY_INFO.partnershipPromise}"
            </blockquote>

            <div className="pt-1 text-xs text-[#C7D5EA]">
              <strong className="text-white">{COMPANY_INFO.director}</strong> • PROFECTUS BIZLINK (OPC) PRIVATE LIMITED
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-[#1E73FF] hover:bg-[#1677FF] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-md btn-primary-glow"
              >
                <span>Partner With Us</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contextual Bottom CTA */}
      <CTASection />
    </AnimatedPage>
  );
}
