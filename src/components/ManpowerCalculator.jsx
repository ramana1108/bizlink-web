import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Building2
} from 'lucide-react';
import { INDUSTRIES_DATA, WORKFORCE_FUNCTIONS } from '../data/companyData';

export default function ManpowerCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_DATA[0].name);
  const [selectedFunction, setSelectedFunction] = useState(WORKFORCE_FUNCTIONS[0].function);
  const [headcount, setHeadcount] = useState(25);
  const [shiftType, setShiftType] = useState('2-Shift Rotation');

  // Dynamic calculations based on selections
  const estimatedMobilizationDays = headcount <= 20 ? '48 - 72 Hours' : headcount <= 50 ? '3 - 5 Days' : '5 - 7 Days';
  const screeningBatchSize = Math.ceil(headcount * 1.5);
  const standbyPoolReserve = Math.ceil(headcount * 0.15);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0B2555] rounded-3xl border border-[rgba(96,165,250,0.2)] p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E73FF]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(96,165,250,0.15)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[#93C5FD] text-xs font-bold uppercase tracking-widest mb-2">
                  <Calculator size={13} className="text-[#60A5FA]" />
                  <span>Interactive Sourcing Estimator</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Workforce Mobilisation Estimator
                </h2>
                <p className="text-[#C7D5EA] text-xs sm:text-sm mt-1">
                  Select your plant parameters to view candidate pipeline sizing and estimated deployment lead time.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 bg-[#071A3D] px-4 py-2 rounded-xl border border-[rgba(96,165,250,0.2)] text-xs text-[#C7D5EA]">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse"></span>
                <span>Live Plant Floor Alignment</span>
              </div>
            </div>

            {/* Form Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 1. Industry Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#C7D5EA] flex items-center gap-1.5">
                  <Building2 size={13} className="text-[#60A5FA]" />
                  <span>1. Industry Vertical</span>
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-[#071A3D] border border-[rgba(96,165,250,0.2)] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#1E73FF] focus:ring-1 focus:ring-[#1E73FF] transition-colors cursor-pointer"
                >
                  {INDUSTRIES_DATA.map((ind) => (
                    <option key={ind.id} value={ind.name} className="bg-[#071A3D] text-white">
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Function Matrix */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#C7D5EA] flex items-center gap-1.5">
                  <Users size={13} className="text-[#60A5FA]" />
                  <span>2. Manufacturing Function</span>
                </label>
                <select
                  value={selectedFunction}
                  onChange={(e) => setSelectedFunction(e.target.value)}
                  className="w-full bg-[#071A3D] border border-[rgba(96,165,250,0.2)] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#1E73FF] focus:ring-1 focus:ring-[#1E73FF] transition-colors cursor-pointer"
                >
                  {WORKFORCE_FUNCTIONS.map((fn, idx) => (
                    <option key={idx} value={fn.function} className="bg-[#071A3D] text-white">
                      {fn.function}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Shift Structure */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#C7D5EA] flex items-center gap-1.5">
                  <Clock size={13} className="text-[#60A5FA]" />
                  <span>3. Shift Structure</span>
                </label>
                <select
                  value={shiftType}
                  onChange={(e) => setShiftType(e.target.value)}
                  className="w-full bg-[#071A3D] border border-[rgba(96,165,250,0.2)] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#1E73FF] focus:ring-1 focus:ring-[#1E73FF] transition-colors cursor-pointer"
                >
                  <option value="General Shift (Single)" className="bg-[#071A3D]">General Shift (Single Day)</option>
                  <option value="2-Shift Rotation" className="bg-[#071A3D]">2-Shift Rotation (A & B)</option>
                  <option value="3-Shift Continuous" className="bg-[#071A3D]">3-Shift Continuous (24/7 Ops)</option>
                  <option value="Weekend / Surge Relief" className="bg-[#071A3D]">Weekend / Surge Relief</option>
                </select>
              </div>

              {/* 4. Headcount Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C7D5EA]">
                  <span>4. Headcount:</span>
                  <span className="text-[#60A5FA] font-mono text-base font-extrabold">{headcount} Operators</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full h-2 bg-[#071A3D] rounded-lg appearance-none cursor-pointer accent-[#1E73FF]"
                />
                <div className="flex justify-between text-[10px] text-[#8EA6CA] font-mono">
                  <span>5</span>
                  <span>50</span>
                  <span>100</span>
                  <span>200+</span>
                </div>
              </div>

            </div>

            {/* Live Estimation Output Card */}
            <div className="bg-[#102F63] rounded-2xl p-6 border border-[rgba(96,165,250,0.25)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7D5EA] block">
                  Estimated Mobilisation
                </span>
                <div className="text-xl sm:text-2xl font-heading font-black text-[#60A5FA]">
                  {estimatedMobilizationDays}
                </div>
                <span className="text-[11px] text-[#8EA6CA] block">From SLA Agreement Signoff</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7D5EA] block">
                  Candidate Screening Pool
                </span>
                <div className="text-xl sm:text-2xl font-heading font-black text-white">
                  {screeningBatchSize} Profiles
                </div>
                <span className="text-[11px] text-[#8EA6CA] block">Screened against client JD</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7D5EA] block">
                  Standby Backup Reserve
                </span>
                <div className="text-xl sm:text-2xl font-heading font-black text-[#93C5FD]">
                  +{standbyPoolReserve} Standby
                </div>
                <span className="text-[11px] text-[#8EA6CA] block">To prevent line downtime</span>
              </div>

              <div>
                <Link
                  to={`/contact?industry=${encodeURIComponent(selectedIndustry)}&function=${encodeURIComponent(selectedFunction)}&count=${headcount}&shift=${encodeURIComponent(shiftType)}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#1E73FF] hover:bg-[#1677FF] text-white font-extrabold text-sm py-3.5 px-5 rounded-xl shadow-lg btn-primary-glow transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Request Sourcing Proposal</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#C7D5EA] pt-2 border-t border-[rgba(96,165,250,0.12)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#60A5FA]" />
                <span>100% KYC & Background Screened</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#60A5FA]" />
                <span>Tamil Nadu Industrial Corridors Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#60A5FA]" />
                <span>Statutory & Attendance Management Support</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
