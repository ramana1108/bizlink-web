import { Link } from 'react-router-dom';
import { Headphones, ArrowRight } from 'lucide-react';

export default function CTASection({
  title = 'Need the Right Workforce for Your Operations?',
  description = 'Speak with our operations team to secure reliable manpower support for your business.',
  buttonText = 'Contact Us Today',
  buttonLink = '/contact'
}) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081830] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#1E3A8A]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            
            {/* Left Headphone Icon & Text */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-full bg-[#142B4D] border border-[#2563EB]/40 flex items-center justify-center text-[#60A5FA] shrink-0 shadow-xs">
                <Headphones size={26} />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Yellow CTA Button */}
            <div className="shrink-0">
              <Link
                to={buttonLink}
                className="inline-flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#081528] text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-xs group"
              >
                <span>{buttonText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
