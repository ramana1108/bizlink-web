import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import logoImg from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      
      {/* Main Navigation Bar (Clean White) */}
      <div className="bg-white border-b border-[#E2E8F0] py-3 sm:py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group shrink-0 focus:outline-none" aria-label="Profectus BizLink Home">
              <div className="relative p-1 rounded-lg bg-white border border-[#DCE5F0] shadow-xs transition-transform group-hover:scale-102">
                <img
                  src={logoImg}
                  alt="PROFECTUS BIZLINK Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-sm sm:text-base text-[#0B1F3A] tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
                  PROFECTUS BIZLINK
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-wide leading-none hidden xs:block">
                  Building Workforce. Powering Industries.
                </span>
              </div>
            </Link>

            {/* Center: 5 Navigation Links (Desktop) with Yellow Active Accent */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActiveRoute(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 text-xs lg:text-sm font-semibold transition-colors ${
                      active
                        ? 'text-[#0B1F3A] font-bold'
                        : 'text-[#475569] hover:text-[#0B1F3A] hover:bg-[#F6F8FC] rounded-lg'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FBBF24] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Dark Navy Contact Us Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#0B1F3A] hover:bg-[#142B4D] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-xs group"
              >
                <span>Contact Us</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-lg bg-[#F6F8FC] text-[#0B1F3A] hover:bg-[#EDF2F7] border border-[#DCE5F0] flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#DCE5F0] bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isActiveRoute(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-[#FEF3C7] text-[#92400E] font-bold border-l-4 border-[#F59E0B]'
                        : 'text-[#475569] hover:bg-[#F6F8FC] hover:text-[#0B1F3A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <ShieldCheck size={16} className="text-[#F59E0B]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-[#DCE5F0] space-y-2">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-[#0B1F3A] hover:bg-[#142B4D] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <span>Contact Us Today</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
