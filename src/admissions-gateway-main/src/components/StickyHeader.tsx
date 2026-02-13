import { GraduationCap, Phone, Mail } from "lucide-react";

const StickyHeader = () => {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b" style={{
      background: "hsla(220,55%,8%,0.9)",
      borderColor: "hsla(220,30%,30%,0.3)",
      backdropFilter: "blur(20px)",
    }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-gold">
            <GraduationCap className="w-6 h-6 text-navy-dark" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-primary-foreground leading-tight">
              Prestige University
            </h1>
            <p className="text-xs font-body" style={{ color: "hsl(45,90%,55%)" }}>
              Admissions Open 2026–2027
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+911800123456" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-body">1800-123-456</span>
          </a>
          <a href="mailto:admissions@prestige.edu" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors">
            <Mail className="w-4 h-4" />
            <span className="font-body">admissions@prestige.edu</span>
          </a>
          <button onClick={scrollToForm} className="btn-gold text-sm py-2 px-5 rounded-lg font-body">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
