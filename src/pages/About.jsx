import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Heart,
  Handshake,
  Factory,
  Users,
  TrendingUp,
  ArrowRight,
  PhoneCall,
  Building2,
  FileCheck,
  ClipboardList,
  Search,
  UserCheck,
  Rocket,
  Headset,
  ChevronRight
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import {
  COMPANY_INFO,
  ABOUT_VALUES,
  WHY_CHOOSE_BENEFITS,
  ABOUT_APPROACH_TIMELINE,
  ABOUT_IMPACT_ITEMS
} from '../data/companyData';

import storyImg from '../assets/sectors/automotive.jpg';
import aboutHeroBg from '../assets/about_hero_bg.jpg';

const VALUE_ICONS = {
  integrity: ShieldCheck,
  commitment: Award,
  quality: CheckCircle2,
  respect: Heart,
  partnership: Handshake
};

const APPROACH_ICONS = {
  Understand: ClipboardList,
  Source: Search,
  Screen: UserCheck,
  Deploy: Rocket,
  Support: Headset
};

const IMPACT_ICONS = {
  'stronger-operations': Factory,
  'employment-opportunities': Users,
  'business-growth': TrendingUp,
  'safe-compliant': ShieldCheck
};

export default function About() {
  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. HERO: Dark Navy Hero with High-Quality Background Image & Overlay */}
      <section className="relative bg-[#081528] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#1E3A8A]/30">
        
        {/* Background Image with Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt="Business partnership and workforce solutions collaboration"
            className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-40 transition-transform duration-700 ease-out hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081528] via-[#081528]/95 sm:via-[#081528]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-transparent to-[#081528]/40"></div>
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 backdrop-blur-sm border border-white/15 text-xs font-bold uppercase tracking-wider text-[#93C5FD] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                <span>About Profectus BizLink</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Building Workforce. <br />
                <span className="text-[#FBBF24]">Powering Industries.</span>
              </h1>

              <div className="w-12 h-1 bg-[#FBBF24] rounded-full"></div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                {COMPANY_INFO.companyProfile}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-200">
                <span className="px-3.5 py-2 rounded-lg bg-[#0B2555]/70 backdrop-blur-sm border border-white/10 shadow-xs">
                  Chennai , Bangalore & Coimbatore...
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-[#0B2555]/70 backdrop-blur-sm border border-white/10 shadow-xs">
                  Multi-Industry Workforce Solutions
                </span>
              </div>
            </div>

            {/* Right Large Hero Image Card (5 cols) */}
            <div className="lg:col-span-5 hidden sm:block">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 backdrop-blur-md p-2">
                <img
                  src={aboutHeroBg}
                  alt="Industrial manufacturing operations and skilled workforce"
                  className="w-full h-72 sm:h-84 object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STORY: Split Layout (Image Left, Text Right, Simple Checkmarks) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Image on Left (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE5F0] shadow-sm">
                <img
                  src={storyImg}
                  alt="Profectus BizLink story in industrial manpower"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#DCE5F0]">
                  <p className="text-xs font-semibold text-[#0B1F3A]">
                    "We work as a manpower sourcing and staffing partner for organisations that need dependable workforce support."
                  </p>
                  <span className="text-[11px] text-[#64748B] block mt-1">
                    — {COMPANY_INFO.director}, Director
                  </span>
                </div>
              </div>
            </div>

            {/* Text on Right (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="OUR STORY"
                title="Connecting Enterprises with Skilled Industrial Workforce"
                subtitle="Profectus BizLink was founded to solve a critical need in the manufacturing sector: structured, dependable manpower sourcing and workforce deployment for assembly lines, machine shops and supply chain hubs."
              />

              <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                <p>
                  Manufacturing is a major employment and industrial ecosystem in India, with Tamil Nadu hosting premier automotive, electronics, textile and heavy engineering corridors.
                </p>
                <p>
                  {COMPANY_INFO.aboutText}
                </p>
              </div>

              {/* Simple Checkmark Highlights */}
              <div className="pt-2 border-t border-[#EDF2F7] space-y-2.5">
                {[
                  'Precise requirement mapping aligned with plant shift patterns and headcount schedules',
                  'Rigorous pre-deployment screening for qualifications, physical fitness and role experience',
                  'Complete gate pass documentation and identity verification support prior to Day 1 onboarding',
                  'Ongoing shift balance and standby replacement coordination for uninterrupted production'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1F3A]">
                    <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES: Horizontal Icon-and-Text Layout (Visually Connected) */}
      <section className="py-16 sm:py-20 bg-[#F6F8FC] border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            centered
            eyebrow="GUIDING PRINCIPLES"
            title="Our Values"
            subtitle="The foundational values that guide our recruitment ethics, client partnerships and workforce support."
          />

          {/* Horizontal connected row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ABOUT_VALUES.map((val, idx) => {
              const IconComp = VALUE_ICONS[val.id] || ShieldCheck;

              return (
                <div
                  key={val.id}
                  className="p-5 rounded-xl bg-white border border-[#DCE5F0] hover:border-[#CBD5E1] transition-all duration-200 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${val.accentColor}12`,
                        color: val.accentColor
                      }}
                    >
                      <IconComp size={20} />
                    </div>

                    <h3 className="font-heading font-extrabold text-base text-[#0B1F3A]">
                      {val.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE BIZLINK? (Full-Width Dark Navy Section with 6 Benefits Separated by Thin Vertical Lines) */}
      <section className="py-16 sm:py-20 bg-[#0B1F3A] text-white border-b border-[#1E3A8A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              OPERATIONAL ADVANTAGES
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
              Why Choose BizLink?
            </h2>
            <div className="w-12 h-1 bg-[#FBBF24] rounded-full mx-auto mt-2"></div>
            <p className="text-sm text-[#94A3B8] pt-1">
              Purpose-built manpower sourcing and staffing designed specifically for manufacturing uptime.
            </p>
          </div>

          {/* 6 Benefits separated by thin vertical dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-[#1E3A8A]/40 border border-[#1E3A8A]/40 rounded-2xl bg-[#142B4D]/30 overflow-hidden">
            {WHY_CHOOSE_BENEFITS.map((benefit, bIdx) => (
              <div key={bIdx} className="p-6 space-y-2.5">
                <h3 className="font-heading font-extrabold text-sm text-white leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH: Large Horizontal Timeline (Understand → Source → Screen → Deploy → Support) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            centered
            eyebrow="METHODOLOGY"
            title="Our Approach"
            subtitle="A systematic, 5-stage framework ensuring every candidate matches role specifications before stepping onto the shopfloor."
          />

          {/* Large Horizontal Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-3 left-10 right-10 h-0.5 bg-[#93C5FD] z-0"></div>

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {ABOUT_APPROACH_TIMELINE.map((item) => (
                <div key={item.number} className="flex flex-col items-center text-center space-y-3 group">
                  <div className="space-y-1 px-2">
                    {(() => {
                      const IconComp = APPROACH_ICONS[item.title] || CheckCircle2;
                      return (
                        <div title={item.title} aria-label={item.title} className="relative z-10 flex justify-center bg-white px-2 text-[#2563EB]">
                          <IconComp size={22} />
                        </div>
                      );
                    })()}
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet View */}
          <div className="lg:hidden space-y-3">
            {ABOUT_APPROACH_TIMELINE.map((item) => (
              <div
                key={item.number}
                className="flex items-start p-4 rounded-xl bg-[#F6F8FC] border border-[#DCE5F0]"
              >
                <div className="space-y-0.5">
                  {(() => {
                    const IconComp = APPROACH_ICONS[item.title] || CheckCircle2;
                    return (
                      <div title={item.title} aria-label={item.title} className="text-[#2563EB]">
                        <IconComp size={20} />
                      </div>
                    );
                  })()}
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. OUR IMPACT: Clean Editorial 2x2 Layout */}
      <section className="py-16 sm:py-20 bg-[#F6F8FC] border-b border-[#DCE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            centered
            eyebrow="OUTCOMES & PURPOSE"
            title="Our Impact"
            subtitle="Creating sustainable value for industrial employers, engineering enterprises and shopfloor workers."
          />

          {/* 2x2 Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ABOUT_IMPACT_ITEMS.map((item) => {
              const IconComp = IMPACT_ICONS[item.id] || Factory;

              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE5F0] hover:border-[#CBD5E1] transition-all duration-200 shadow-xs flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.accentColor}12`,
                      color: item.accentColor
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading font-extrabold text-base text-[#0B1F3A]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. ABOUT CTA */}
      <CTASection
        title="Let's Build a Stronger Workforce Together"
        description="Partner with Profectus BizLink for dependable manpower solutions designed around your plant operations."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

    </div>
  );
}
