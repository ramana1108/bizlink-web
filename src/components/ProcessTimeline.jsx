import {
  FileText,
  Users,
  CheckCircle2,
  UserCheck,
  ShieldCheck,
  Handshake,
  ArrowRight
} from 'lucide-react';
import { HOME_PROCESS_TIMELINE } from '../data/companyData';

const ICON_MAP = {
  FileText,
  Users,
  CheckCircle2,
  UserCheck,
  ShieldCheck,
  Handshake
};

export default function ProcessTimeline() {
  return (
    <div className="w-full">
      {/* Desktop / Tablet: Horizontal Connected Flow */}
      <div className="hidden lg:block relative">
        {/* Connecting Background Line */}
        <div className="absolute top-12 left-12 right-12 h-0.5 bg-[#DCE5F0] z-0"></div>

        <div className="grid grid-cols-6 gap-4 relative z-10">
          {HOME_PROCESS_TIMELINE.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || CheckCircle2;

            return (
              <div key={item.step} className="flex flex-col items-center text-center space-y-3 group">
                {/* Node with Icon */}
                <div
                  className="w-24 h-24 rounded-2xl bg-white border-2 flex flex-col items-center justify-center transition-all duration-200 group-hover:-translate-y-1 shadow-xs"
                  style={{ borderColor: item.color }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-1 transition-colors"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <span
                    className="font-mono text-xs font-extrabold"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-1 px-1">
                  <h4 className="font-heading font-bold text-sm text-[#14213D] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet View: Sequential List */}
      <div className="lg:hidden space-y-4">
        {HOME_PROCESS_TIMELINE.map((item, index) => {
          const IconComponent = ICON_MAP[item.icon] || CheckCircle2;

          return (
            <div
              key={item.step}
              className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#DCE5F0] shadow-xs"
            >
              <div
                className="w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 border"
                style={{ borderColor: `${item.color}40`, backgroundColor: `${item.color}10`, color: item.color }}
              >
                <IconComponent size={18} />
                <span className="font-mono text-[10px] font-extrabold mt-0.5">
                  {item.step}
                </span>
              </div>

              <div className="space-y-1 flex-1">
                <h4 className="font-heading font-bold text-sm text-[#14213D]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
