import { Link } from 'react-router-dom';
import {
  Building2,
  FileText,
  TrendingUp,
  Bell,
  Download,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Scale
} from 'lucide-react';

import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

import {
  COMPANY_INFO,
  INVESTOR_RESOURCES
} from '../data/companyData';

const RESOURCE_ICONS = {
  'annual-reports': FileText,
  'financial-info': TrendingUp,
  'corporate-announcements': Bell,
  'company-info': Building2
};

export default function InvestorRelations() {
  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Investor Relations"
        eyebrow="CORPORATE DISCLOSURES & GOVERNANCE"
        title="INVESTOR RELATIONS &"
        highlight="CORPORATE GOVERNANCE"
        description="Official corporate disclosures, statutory compliance records, company background and legal entity details for PROFECTUS BIZLINK (OPC) PRIVATE LIMITED."
        ctaText="View Entity Disclosures"
        ctaLink="#entity-info"
        secondaryCtaText="Contact Corporate Desk"
        secondaryCtaLink="/contact"
      />

      {/* 2. Corporate Entity Details: Clean White Section */}
      <section id="entity-info" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Statutory Record
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Corporate Entity & Incorporation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key registration and governance data published in accordance with the Companies Act, 2013.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Company Legal Name
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">
                {COMPANY_INFO.legalName}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered as a One Person Company Private Limited under the Companies Act, 2013.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Board & Directorship
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">
                {COMPANY_INFO.director}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Director & Designated Executive Officer overseeing industrial operations and business governance.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Registered Jurisdiction
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating across industrial manufacturing clusters in Tamil Nadu and pan-India manufacturing hubs.
              </p>
            </div>
          </div>

          {/* Structured Governance & Disclosure Notice */}
          <div className="bg-[#F1F6FD] rounded-3xl p-6 sm:p-8 border border-blue-100/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-[#1E73FF] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>Statutory & Commercial Note</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {COMPANY_INFO.statutoryNote}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1E73FF] hover:bg-[#1677FF] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 btn-primary-glow shrink-0"
            >
              <span>Corporate Desk Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Investor & Regulatory Resources: Soft Light Blue Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F1F6FD] text-slate-900 border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-white px-3 py-1 rounded-full border border-blue-200/60 inline-block shadow-2xs">
              Portal Resources
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Investor & Stakeholder Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Repository for corporate publications, periodic updates and disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INVESTOR_RESOURCES.map((resource) => {
              const IconComp = RESOURCE_ICONS[resource.id] || FileText;

              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100/80 shadow-corporate-card hover:border-[#1E73FF]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-[#F1F6FD] text-[#1E73FF] border border-blue-100 flex items-center justify-center group-hover:bg-[#1E73FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <IconComp size={18} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {resource.status}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {resource.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Repository</span>
                    <span className="text-[#1E73FF] font-bold text-[11px] group-hover:underline">Active Desk</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Closing CTA */}
      <CTASection
        badge="Corporate Communications"
        title="Direct Inquiries for Stakeholders & Commercial Partners"
        description="For corporate inquiries, service agreements or vendor registration, please connect with our leadership desk."
      />
    </AnimatedPage>
  );
}
