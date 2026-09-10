import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Factory, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../data/companyData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = query.trim()
    ? SERVICES_DATA.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.profiles.some((p) => p.toLowerCase().includes(query.toLowerCase())) ||
          s.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredIndustries = query.trim()
    ? INDUSTRIES_DATA.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.roles.some((r) => r.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#061735]/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-2xl bg-[#071A3D] rounded-3xl shadow-2xl border border-[rgba(96,165,250,0.25)] overflow-hidden text-white"
        >
          {/* Search Header */}
          <div className="flex items-center px-5 py-4 border-b border-[rgba(96,165,250,0.15)]">
            <Search size={18} className="text-[#60A5FA] mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, manufacturing roles, sectors (e.g. CNC, Bulk Hiring, Automotive)..."
              className="w-full text-xs sm:text-sm text-white placeholder:text-[#8EA6CA] bg-transparent focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 text-[#C7D5EA] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto p-5 space-y-4 text-xs">
            {query.trim() === '' ? (
              <div className="space-y-3 py-2 text-[#C7D5EA]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#60A5FA]">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Bulk Manpower', 'CNC Operators', 'Automotive', 'Contract Staffing', 'Quality Inspection', 'Warehouse Logistics'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3.5 py-1.5 rounded-full bg-[#0B2555] hover:bg-[#102F63] hover:text-white border border-[rgba(96,165,250,0.2)] text-[#C7D5EA] font-semibold transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredServices.length === 0 && filteredIndustries.length === 0 ? (
              <div className="py-8 text-center text-[#C7D5EA] space-y-1">
                <p className="font-semibold text-white">No matching services or sectors found</p>
                <p className="text-xs text-[#8EA6CA]">Try searching for "Assembly", "CNC", "Staffing" or "Quality".</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Services Matches */}
                {filteredServices.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#60A5FA]">
                      Services & Solutions
                    </span>
                    {filteredServices.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => handleSelect(`/what-we-do#${s.id}`)}
                        className="p-3 rounded-2xl bg-[#0B2555] hover:bg-[#102F63] border border-[rgba(96,165,250,0.15)] hover:border-[rgba(96,165,250,0.35)] transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <Briefcase size={16} className="text-[#60A5FA] shrink-0" />
                          <div>
                            <strong className="text-white font-bold block text-xs group-hover:text-[#60A5FA] transition-colors">
                              {s.title}
                            </strong>
                            <span className="text-[11px] text-[#C7D5EA] line-clamp-1">{s.shortDesc}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[#60A5FA] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Industry Matches */}
                {filteredIndustries.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[rgba(96,165,250,0.15)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#60A5FA]">
                      Industries We Support
                    </span>
                    {filteredIndustries.map((ind) => (
                      <div
                        key={ind.id}
                        onClick={() => handleSelect(`/contact?industry=${encodeURIComponent(ind.name)}`)}
                        className="p-3 rounded-2xl bg-[#0B2555] hover:bg-[#102F63] border border-[rgba(96,165,250,0.15)] hover:border-[rgba(96,165,250,0.35)] transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <Factory size={16} className="text-[#60A5FA] shrink-0" />
                          <div>
                            <strong className="text-white font-bold block text-xs group-hover:text-[#60A5FA] transition-colors">
                              {ind.name}
                            </strong>
                            <span className="text-[11px] text-[#C7D5EA] line-clamp-1">{ind.desc}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[#60A5FA] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
