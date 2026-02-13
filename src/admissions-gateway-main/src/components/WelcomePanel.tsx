import { Clock, FileText, Save } from "lucide-react";

const WelcomePanel = () => {
  return (
    <section className="container mx-auto px-4 pt-12 pb-8">
      <div className="glass-card-strong max-w-3xl mx-auto p-8 md:p-10 text-center" style={{ animation: "fadeSlideUp 0.8s ease-out" }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Start Your Future With Us
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-8">
          Begin your journey at Prestige University — where excellence meets opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
            <Clock className="w-8 h-8 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-sm text-foreground font-body">5–10 Minutes</p>
              <p className="text-xs text-muted-foreground font-body">Application time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
            <FileText className="w-8 h-8 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-sm text-foreground font-body">Documents Ready</p>
              <p className="text-xs text-muted-foreground font-body">Marksheets, Photo, ID</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
            <Save className="w-8 h-8 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-sm text-foreground font-body">Save & Continue</p>
              <p className="text-xs text-muted-foreground font-body">Resume anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePanel;
