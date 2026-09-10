import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  Factory,
  Settings2,
  ShieldCheck,
  Truck,
  UserCheck,
  TrendingUp,
  Cpu,
  Wrench,
  Boxes,
  Sparkles,
  Layers,
  Building2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

import { SERVICES_DATA, INDUSTRIES_DATA } from '../data/companyData';

// Map verified capability icons
const CAPABILITY_ICONS = {
  '01': Users,
  '02': Briefcase,
  '03': Factory,
  '04': Settings2,
  '05': ShieldCheck,
  '06': Truck,
  '07': UserCheck,
  '08': TrendingUp
};

// Map verified sector icons
const SECTOR_ICONS = {
  '01': Factory,
  '02': Cpu,
  '03': Wrench,
  '04': Boxes,
  '05': Sparkles,
  '06': Layers,
  '07': Truck,
  '08': Building2
};

export default function ManufacturingCapabilities() {
  const [activeTab, setActiveTab] = useState('capabilities'); // 'capabilities' | 'sectors'

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#061735] via-[#071A3D] to-[#0B2555] text-white border-b border-[rgba(96,165,250,0.15)] relative overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern-navy opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E73FF]/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[rgba(96,165,250,0.18)] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-[#93C5FD] border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-[#60A5FA]" />
              <span>Verified Industrial Solutions</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Our Manufacturing Workforce Capabilities
            </h2>
            
            <p className="text-xs sm:text-sm text-[#C7D5EA] leading-relaxed max-w-2xl">
              Structured candidate sourcing, screening, onboarding and workforce deployment configured for continuous plant operations, assembly lines, machine cells and warehouse hubs.
            </p>
          </div>

          {/* Quick View Switcher & Action Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center bg-[#071A3D] p-1.5 rounded-2xl border border-[rgba(96,165,250,0.2)]">
              <button
                type="button"
                onClick={() => setActiveTab('capabilities')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'capabilities'
                    ? 'bg-[#1E73FF] text-white shadow-md btn-primary-glow'
                    : 'text-[#C7D5EA] hover:text-white'
                }`}
              >
                6 Core Capabilities
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sectors')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'sectors'
                    ? 'bg-[#1E73FF] text-white shadow-md btn-primary-glow'
                    : 'text-[#C7D5EA] hover:text-white'
                }`}
              >
                8 Industry Sectors
              </button>
            </div>

            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 bg-[#1E73FF] hover:bg-[#1677FF] text-white text-xs font-bold px-5 py-3 rounded-full transition-all duration-300 shadow-md btn-primary-glow"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 1. 8 Verified Workforce Capabilities Grid */}
        {activeTab === 'capabilities' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {SERVICES_DATA.map((service) => {
                const IconComp = CAPABILITY_ICONS[service.number] || Factory;

                return (
                  <div
                    key={service.id}
                    className="bg-[#0B2555]/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[rgba(96,165,250,0.18)] hover:border-[#1E73FF]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 space-y-4"
                  >
                    <div className="space-y-3.5">
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/15 text-[#60A5FA] border border-blue-400/25 flex items-center justify-center group-hover:bg-[#1E73FF] group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComp size={20} />
                        </div>
                        <span className="font-mono font-bold text-xs text-[#60A5FA] bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-400/25">
                          {service.number}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h3 className="font-heading font-black text-base text-white group-hover:text-[#60A5FA] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#C7D5EA] leading-relaxed line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Verified Role Highlights */}
                      <div className="pt-2 flex flex-wrap gap-1">
                        {service.profiles.slice(0, 3).map((prof, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[10px] font-semibold bg-[#071A3D] text-[#93C5FD] px-2 py-0.5 rounded border border-[rgba(96,165,250,0.15)] truncate max-w-[140px]"
                          >
                            {prof}
                          </span>
                        ))}
                        {service.profiles.length > 3 && (
                          <span className="text-[10px] font-semibold bg-[#071A3D] text-slate-400 px-1.5 py-0.5 rounded border border-[rgba(96,165,250,0.15)]">
                            +{service.profiles.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-[#8EA6CA]">
                        {service.category}
                      </span>
                      <Link
                        to={`/what-we-do#${service.id}`}
                        className="text-[#60A5FA] group-hover:text-white font-bold inline-flex items-center gap-1 uppercase tracking-wider text-[11px] transition-colors"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* 2. 8 Verified Industry Sectors Grid */}
        {activeTab === 'sectors' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {INDUSTRIES_DATA.map((industry) => {
                const IconComp = SECTOR_ICONS[industry.number] || Factory;

                return (
                  <div
                    key={industry.id}
                    className="bg-[#0B2555]/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[rgba(96,165,250,0.18)] hover:border-[#1E73FF]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 space-y-4"
                  >
                    <div className="space-y-3.5">
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/15 text-[#60A5FA] border border-blue-400/25 flex items-center justify-center group-hover:bg-[#1E73FF] group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComp size={20} />
                        </div>
                        <span className="font-mono font-bold text-xs text-[#60A5FA] bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-400/25">
                          {industry.number}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <div className="space-y-1.5">
                        <h3 className="font-heading font-black text-base text-white group-hover:text-[#60A5FA] transition-colors leading-snug">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-[#C7D5EA] leading-relaxed line-clamp-2">
                          {industry.desc}
                        </p>
                      </div>

                      {/* Roles */}
                      <div className="pt-2 flex flex-wrap gap-1">
                        {industry.roles.slice(0, 3).map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="text-[10px] font-semibold bg-[#071A3D] text-[#93C5FD] px-2 py-0.5 rounded border border-[rgba(96,165,250,0.15)] truncate max-w-[140px]"
                          >
                            {role}
                          </span>
                        ))}
                        {industry.roles.length > 3 && (
                          <span className="text-[10px] font-semibold bg-[#071A3D] text-slate-400 px-1.5 py-0.5 rounded border border-[rgba(96,165,250,0.15)]">
                            +{industry.roles.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-[#8EA6CA]">
                        {industry.shortName}
                      </span>
                      <Link
                        to={`/industries#${industry.id}`}
                        className="text-[#60A5FA] group-hover:text-white font-bold inline-flex items-center gap-1 uppercase tracking-wider text-[11px] transition-colors"
                      >
                        <span>Explore Sector</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* 3. Operational Guarantees Bar (100% Verified Information) */}
        <div className="bg-[#071A3D]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[rgba(96,165,250,0.2)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-[#60A5FA] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                Role-Based Pre-Screening
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-[#60A5FA] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                Statutory & KYC Verification
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-[#60A5FA] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                Shift Continuity & Replacement Support
              </span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0B2555] hover:bg-[#102F63] border border-[rgba(96,165,250,0.3)] hover:border-[#1E73FF] px-4 py-2.5 rounded-xl transition-all shrink-0 w-full md:w-auto justify-center"
          >
            <span>Request Workforce Deployment</span>
            <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
