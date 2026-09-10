import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick Communication" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        aria-label="Chat directly with Kirubasankar on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle size={18} className="fill-white/20 stroke-[2.5]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
