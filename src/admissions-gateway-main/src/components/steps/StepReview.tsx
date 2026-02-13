import { useState } from "react";
import type { FormData } from "../ApplicationWizard";
import { ClipboardCheck, ChevronLeft, Edit, Send, Loader2 } from "lucide-react";

interface Props {
  formData: FormData;
  onPrev: () => void;
  onSubmit: () => void;
  onEdit: (step: number) => void;
}

const courseNames: Record<string, string> = {
  cse: "Computer Science Engineering",
  ai: "Artificial Intelligence",
  mech: "Mechanical Engineering",
  civil: "Civil Engineering",
  ece: "Electronics & Communication",
  medical: "Medical / Nursing",
  law: "Law",
  bba: "Business Administration",
};

const StepReview = ({ formData, onPrev, onSubmit, onEdit }: Props) => {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!agreed) return;
    setSubmitting(true);
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  const Section = ({ title, step, children }: { title: string; step: number; children: React.ReactNode }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-display text-base font-semibold text-foreground">{title}</h4>
        <button onClick={() => onEdit(step)} className="text-xs text-gold hover:underline font-body flex items-center gap-1">
          <Edit className="w-3 h-3" /> Edit
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">{children}</div>
    </div>
  );

  const Field = ({ label, value }: { label: string; value: string }) => (
    <div className="py-1.5">
      <p className="text-xs text-muted-foreground font-body">{label}</p>
      <p className="text-sm font-medium text-foreground font-body">{value || "—"}</p>
    </div>
  );

  const totalPct = ((parseFloat(formData.physicsMarks) || 0) + (parseFloat(formData.chemistryMarks) || 0) + (parseFloat(formData.mathsBioMarks) || 0)) / 3;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Review Your Application</h3>
          <p className="text-sm text-muted-foreground font-body">Verify all details before submission</p>
        </div>
      </div>

      <div className="divide-y divide-border">
        <Section title="Personal Information" step={1}>
          <Field label="Full Name" value={formData.fullName} />
          <Field label="Parent/Guardian" value={formData.parentName} />
          <Field label="Date of Birth" value={formData.dob} />
          <Field label="Gender" value={formData.gender} />
          <Field label="Mobile" value={formData.mobile} />
          <Field label="Email" value={formData.email} />
          <Field label="Aadhaar" value={formData.aadhaar || "Not provided"} />
          <Field label="Category" value={formData.category || "Not selected"} />
          <Field label="Address" value={formData.address} />
        </Section>

        <Section title="Academic Details" step={2}>
          <Field label="10th Percentage" value={`${formData.tenthPercentage}%`} />
          <Field label="12th Board" value={formData.twelfthBoard} />
          <Field label="12th Stream" value={formData.twelfthStream} />
          <Field label="Physics" value={`${formData.physicsMarks}/100`} />
          <Field label="Chemistry" value={`${formData.chemistryMarks}/100`} />
          <Field label="Maths/Biology" value={`${formData.mathsBioMarks}/100`} />
          <Field label="Average %" value={`${totalPct.toFixed(1)}%`} />
        </Section>

        <Section title="Course Selection" step={3}>
          <Field label="Selected Course" value={courseNames[formData.selectedCourse] || "—"} />
          <Field label="Hostel" value={formData.hostelRequired ? "Yes" : "No"} />
          <Field label="Transport" value={formData.transportRequired ? "Yes" : "No"} />
        </Section>

        <Section title="Documents" step={4}>
          <Field label="Passport Photo" value={formData.passportPhoto?.name || "—"} />
          <Field label="12th Marksheet" value={formData.twelfthMarksheet?.name || "—"} />
          <Field label="10th Marksheet" value={formData.tenthMarksheet?.name || "Not uploaded"} />
          <Field label="Community Cert." value={formData.communityCert?.name || "Not uploaded"} />
        </Section>
      </div>

      {/* Declaration */}
      <div className="mt-6 p-4 rounded-lg bg-secondary">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 accent-gold"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span className="text-sm text-foreground font-body">
            I hereby declare that all the information provided above is true and correct to the best of my knowledge.
            I understand that any false information may result in cancellation of my admission.
          </span>
        </label>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="btn-navy flex items-center gap-2 font-body">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={handleSubmit}
          disabled={!agreed || submitting}
          className={`btn-gold flex items-center gap-2 font-body ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Submit Application
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default StepReview;
