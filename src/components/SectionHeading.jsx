export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  badgeColor = '#2563EB',
  showUnderline = true,
  className = ''
}) {
  return (
    <div className={`space-y-2.5 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] border border-blue-200/60 text-[#2563EB]`}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: badgeColor }}
          ></span>
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0B1F3A] tracking-tight leading-tight">
          {title}
        </h2>
      )}

      {showUnderline && (
        <div className={`w-12 h-1 bg-[#FBBF24] rounded-full ${centered ? 'mx-auto' : ''}`}></div>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
