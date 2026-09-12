import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  Factory,
  Settings2,
  ShieldCheck,
  Truck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

import {
  SERVICES_DATA,
  PRODUCTION_LINE_FLOW,
  SOURCING_APPROACH_STEPS
} from '../data/companyData';

const SERVICE_ICONS = {
  '01': Users,
  '02': Briefcase,
  '03': Factory,
  '04': Settings2,
  '05': ShieldCheck,
  '06': Truck,
  '07': Users,
  '08': TrendingUp
};

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFlowStep, setSelectedFlowStep] = useState(0);

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Services & Solutions"
        eyebrow="MANPOWER & INDUSTRIAL SOLUTIONS"
        title="WORKFORCE SOLUTIONS DESIGNED FOR"
        highlight="SHOPFLOOR OPERATIONS"
        description="From high-volume assembly ramp-ups to precision CNC machining and warehouse fulfillment, we deliver role-screened personnel to keep production on schedule."
        ctaText="Request Sourcing Proposal"
        ctaLink="/contact"
        secondaryCtaText="View 7-Step Deployment"
        secondaryCtaLink="/#process"
      />

      {/* 2. 8 Core Services: Clean White Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Comprehensive Service Directory
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
                8 Specialized Workforce Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Configured around plant takt times, shift rosters and verified qualification criteria.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#F1F6FD] p-1.5 rounded-2xl border border-blue-100">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'manpower', label: 'Bulk Supply' },
                { id: 'staffing', label: 'Staffing' },
                { id: 'technical', label: 'Technical' },
                { id: 'supply chain', label: 'Logistics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#1E73FF] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComp = SERVICE_ICONS[service.number] || Factory;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#F1F6FD] text-[#1E73FF] border border-blue-100 flex items-center justify-center group-hover:bg-[#1E73FF] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <IconComp size={22} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-[#1E73FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#1E73FF] font-semibold">
                        {service.shortDesc}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Operational SLAs & Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 rounded-2xl bg-[#F8FAFC] border border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Turnaround SLA</span>
                        <strong className="text-slate-800 text-[11px]">{service.turnaround}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Best Fit</span>
                        <span className="text-slate-700 text-[11px] truncate block">{service.category}</span>
                      </div>
                    </div>

                    {/* Profiles */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Supported Profiles:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {service.profiles.map((prof, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] font-medium bg-[#F1F6FD] text-slate-700 px-2.5 py-0.5 rounded-md border border-blue-100/70"
                          >
                            {prof}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500">Category: {service.category}</span>
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-bold text-[#1E73FF] group-hover:text-[#1677FF] inline-flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Inquire Sourcing</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Interactive Production-Line Flow: Soft Light Blue Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F1F6FD] text-slate-900 border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-white px-3 py-1 rounded-full border border-blue-200/60 inline-block shadow-2xs">
              Plant Floor Flow
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Production-Line Workforce Mapping
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click on each production stage to explore our deployed shopfloor manpower capabilities.
            </p>
          </div>

          {/* 5 Stages Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {PRODUCTION_LINE_FLOW.map((step, idx) => {
              const isSelected = selectedFlowStep === idx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setSelectedFlowStep(idx)}
                  className={`p-4 rounded-3xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E73FF] text-white border-[#1E73FF] shadow-lg btn-primary-glow -translate-y-1'
                      : 'bg-white text-slate-800 border-blue-100 hover:border-blue-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#1E73FF] animate-pulse'}`}></span>
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-heading font-black text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {step.stage}
                    </h3>
                    <p className={`text-[11px] leading-tight ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Flow Node Detail Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100/90 shadow-corporate-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] block">
                Active Node: {PRODUCTION_LINE_FLOW[selectedFlowStep].stage}
              </span>
              <p className="text-sm text-slate-700 font-medium">
                {PRODUCTION_LINE_FLOW[selectedFlowStep].desc}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-1.5">
                {PRODUCTION_LINE_FLOW[selectedFlowStep].roles.map((role, rIdx) => (
                  <span
                    key={rIdx}
                    className="px-3 py-1 rounded-xl bg-[#F1F6FD] text-slate-800 text-xs font-semibold border border-blue-100"
                  >
                    ✓ {role}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/contact?stage=${encodeURIComponent(PRODUCTION_LINE_FLOW[selectedFlowStep].stage)}`}
              className="inline-flex items-center gap-2 bg-[#1E73FF] hover:bg-[#1677FF] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 btn-primary-glow shrink-0"
            >
              <span>Request Staff for This Stage</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Candidate Sourcing & Screening Approach: Clean White Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Screening Framework
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Candidate Sourcing & Screening Approach
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our 5-pillar candidate screening lifecycle guarantees verified credentials and high retention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SOURCING_APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#1E73FF]/50 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-base text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Closing CTA */}
      <CTASection />
    </AnimatedPage>
  );
}
