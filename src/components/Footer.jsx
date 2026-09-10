import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import { COMPANY_INFO, CORE_SERVICES, INDUSTRIES_DATA } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-[#94A3B8] border-t border-[#1E3A8A]/30 relative overflow-hidden text-xs sm:text-sm">
      
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-navy opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Column 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-1 rounded-lg bg-white border border-[#DCE5F0] shadow-xs">
                <img
                  src={logoImg}
                  alt="PROFECTUS BIZLINK Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight block">
                  PROFECTUS BIZLINK
                </span>
                <span className="text-[10px] font-semibold text-[#94A3B8] tracking-wide block">
                  (OPC) PRIVATE LIMITED
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              {COMPANY_INFO.companyProfile}
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#142B4D] text-[11px] font-medium text-[#93C5FD] border border-[#2563EB]/20">
                <ShieldCheck size={12} className="text-[#2563EB]" />
                <span>Incorporated under the Companies Act, 2013</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white border-l-2 border-[#2563EB] pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1 transition-all duration-150"
                  >
                    <ChevronRight size={11} className="text-[#2563EB]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 6 Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white border-l-2 border-[#2563EB] pl-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span className="text-[#60A5FA] font-mono text-[10px] font-bold">{service.number}</span>
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white border-l-2 border-[#2563EB] pl-2">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#2563EB] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={14} className="text-[#2563EB] shrink-0" />
                <a href="tel:+917845339972" className="hover:text-white font-medium transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#2563EB] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142B4D] hover:bg-[#1E3A8A] text-[#93C5FD] hover:text-white border border-[#2563EB]/25 transition-colors text-xs font-semibold"
              >
                <MessageSquare size={13} className="text-[#10B981]" />
                <span>WhatsApp Inquiries</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Statutory & Copyright */}
        <div className="pt-6 border-t border-[#1E3A8A]/30 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-[#64748B]">
          <div className="space-y-0.5">
            <p className="text-[#94A3B8]">
              © {currentYear} <strong>{COMPANY_INFO.legalName}</strong>. All rights reserved.
            </p>
            <p className="text-[10px] text-[#64748B]">
              {COMPANY_INFO.statutoryNote}
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
