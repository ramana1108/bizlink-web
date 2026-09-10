import { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Layers,
  Sparkles,
  Share2,
  CheckCircle2,
  Calendar
} from 'lucide-react';

import AnimatedPage from '../components/AnimatedPage';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

import {
  INSIGHTS_DATA,
  INSIGHTS_CATEGORIES
} from '../data/companyData';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All Perspectives');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = selectedCategory === 'All Perspectives'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((a) => a.category === selectedCategory);

  return (
    <AnimatedPage>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumb="Insights & Knowledge"
        eyebrow="MANUFACTURING WORKFORCE PERSPECTIVES"
        title="INDUSTRY PERSPECTIVES &"
        highlight="WORKFORCE INTELLIGENCE"
        description="Operational insights on plant line balancing, machine operator recruitment, seasonal ramp-up strategies and warehouse staffing models."
        ctaText="Explore Perspectives"
        ctaLink="#articles"
        secondaryCtaText="Contact Our Team"
        secondaryCtaLink="/contact"
      />

      {/* 2. Sticky Topic Filter Bar */}
      <section className="bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 sticky top-[69px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 shrink-0 flex items-center gap-1">
              <Layers size={13} className="text-[#1E73FF]" /> Topic:
            </span>
            {INSIGHTS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1E73FF] text-white shadow-sm'
                    : 'bg-[#F1F6FD] text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Articles Grid: Clean White Section */}
      <section id="articles" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E73FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
              Operational Knowledge
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Featured Industry Perspectives
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Analysis and operational strategies for plant managers, operations heads and HR leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-corporate-card hover:shadow-corporate-hover hover:border-[#1E73FF]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Article Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock size={12} className="text-[#1E73FF]" />
                        <span>{article.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-heading font-black text-base sm:text-lg text-slate-900 group-hover:text-[#1E73FF] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="text-xs font-bold text-[#1E73FF] group-hover:text-[#1677FF] inline-flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>Read Perspective</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative">
            
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1E73FF] text-xs font-bold border border-blue-100">
                {activeArticle.category}
              </span>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">PROFECTUS BIZLINK Operations Intelligence</span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 6. Closing CTA */}
      <CTASection
        badge="Strategic Workforce Consulting"
        title="Need Customized Workforce Planning for Your Plant?"
        description="Consult with our industrial operations team to model cycle-time headcount and shift requirements."
      />
    </AnimatedPage>
  );
}
