import { useSearchParams } from 'react-router-dom';
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  UserCheck
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../data/companyData';
import contactHeroBg from '../assets/contact_hero_bg.jpg';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') === 'candidate' ? 'candidate' : 'employer';
  const prefilledService = searchParams.get('service') || '';
  const prefilledIndustry = searchParams.get('industry') || '';

  return (
    <div className="w-full bg-white text-[#64748B]">
      
      {/* 1. Page Hero: Dark Navy Hero with High-Quality Background Image & Overlay */}
      <section className="relative bg-[#081528] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#1E3A8A]/30">
        
        {/* Background Image with Dark Navy Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroBg}
            alt="Profectus BizLink corporate office and operations desk"
            className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-40 transition-transform duration-700 ease-out hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081528] via-[#081528]/95 sm:via-[#081528]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-transparent to-[#081528]/40"></div>
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2555]/80 backdrop-blur-sm border border-white/15 text-xs font-bold uppercase tracking-wider text-[#93C5FD] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span>Operations & Recruitment Desk</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Get in Touch with <br />
              <span className="text-[#FBBF24]">Profectus BizLink</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Whether you are an employer looking to submit a workforce requirement (RFQ) or a candidate seeking verified career opportunities, our operations desk is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form on Left, Details on Right) */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Form Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                  Online Submission Portal
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-[#14213D]">
                  How can we help you today?
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Select your path below to submit your details directly to our operations team.
                </p>
              </div>

              {/* Dynamic Interactive Form with Full Backend API Support */}
              <ContactForm
                initialType={initialType}
                prefilledService={prefilledService}
                prefilledIndustry={prefilledIndustry}
              />
            </div>

            {/* Right Contact Information & Operations Desk (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Operations Desk Info Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1F3A] text-white border border-[#1E3A8A]/30 space-y-6 shadow-sm">
                <div>
                  <span className="text-xs font-mono font-bold text-[#60A5FA] uppercase tracking-wider block mb-1">
                    Direct Corporate Office
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white">
                    PROFECTUS BIZLINK
                  </h3>
                  <span className="text-xs text-[#94A3B8]">
                    (OPC) PRIVATE LIMITED
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#142B4D] text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px]">Office Location:</span>
                      <strong className="text-white font-medium">{COMPANY_INFO.address.full}</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#142B4D] text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall size={16} />
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px]">Operations Hotline:</span>
                      <a href="tel:+917845339972" className="text-white font-bold hover:text-[#60A5FA] transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#142B4D] text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px]">Official Email:</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-medium hover:text-[#60A5FA] transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E3A8A]/40">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm py-3 rounded-lg transition-colors shadow-xs"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="p-6 rounded-2xl bg-[#F6F8FC] border border-[#DCE5F0] space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#14213D] flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#2563EB]" />
                  <span>Deployment Standards</span>
                </h4>
                
                <ul className="space-y-2 text-xs text-[#475569]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>All employer RFQs are reviewed and responded to promptly by our operations desk.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Candidate registrations are screened strictly against genuine industrial roles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span>Strict adherence to statutory regulations and identity verification standards.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
