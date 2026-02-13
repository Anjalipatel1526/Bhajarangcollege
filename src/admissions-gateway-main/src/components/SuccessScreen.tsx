import { CheckCircle, Download } from "lucide-react";
import type { FormData } from "./ApplicationWizard";

interface Props {
  formData: FormData;
}

const SuccessScreen = ({ formData }: Props) => {
  const appId = `UNI2026-${String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0")}`;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="glass-card-strong max-w-lg mx-auto p-10 text-center" style={{ animation: "fadeSlideUp 0.8s ease-out" }}>
        <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-emerald" />
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Application Submitted Successfully!
        </h2>
        <p className="text-muted-foreground font-body mb-6">
          Thank you, {formData.fullName}. Your application has been received.
        </p>

        <div className="p-4 rounded-lg bg-secondary mb-6">
          <p className="text-xs text-muted-foreground font-body mb-1">Your Application ID</p>
          <p className="font-display text-2xl font-bold text-gold">{appId}</p>
        </div>

        <p className="text-sm text-muted-foreground font-body mb-6">
          A confirmation email has been sent to <strong>{formData.email}</strong>. 
          Please save your Application ID for future reference.
        </p>

        <button className="btn-gold flex items-center gap-2 mx-auto font-body">
          <Download className="w-4 h-4" /> Download Acknowledgement
        </button>
      </div>
    </section>
  );
};

export default SuccessScreen;
