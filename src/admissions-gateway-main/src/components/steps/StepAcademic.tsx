import { useState, useMemo } from "react";
import type { FormData } from "../ApplicationWizard";
import { BookOpen, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const StepAcademic = ({ formData, updateFormData, onNext, onPrev }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const totalPercentage = useMemo(() => {
    const p = parseFloat(formData.physicsMarks) || 0;
    const c = parseFloat(formData.chemistryMarks) || 0;
    const m = parseFloat(formData.mathsBioMarks) || 0;
    if (p && c && m) return ((p + c + m) / 3).toFixed(1);
    return null;
  }, [formData.physicsMarks, formData.chemistryMarks, formData.mathsBioMarks]);

  const belowEligibility = totalPercentage !== null && parseFloat(totalPercentage) < 45;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.tenthPercentage || parseFloat(formData.tenthPercentage) > 100) e.tenthPercentage = "Enter valid percentage";
    if (!formData.twelfthBoard) e.twelfthBoard = "Board is required";
    if (!formData.twelfthStream) e.twelfthStream = "Stream is required";
    if (!formData.physicsMarks || parseFloat(formData.physicsMarks) > 100) e.physicsMarks = "Enter valid marks (0-100)";
    if (!formData.chemistryMarks || parseFloat(formData.chemistryMarks) > 100) e.chemistryMarks = "Enter valid marks (0-100)";
    if (!formData.mathsBioMarks || parseFloat(formData.mathsBioMarks) > 100) e.mathsBioMarks = "Enter valid marks (0-100)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    const allFields = ["tenthPercentage", "twelfthBoard", "twelfthStream", "physicsMarks", "chemistryMarks", "mathsBioMarks"];
    const t: Record<string, boolean> = {};
    allFields.forEach((f) => (t[f] = true));
    setTouched(t);
    if (validate()) onNext();
  };

  const handleBlur = (field: string) => {
    setTouched((p) => ({ ...p, [field]: true }));
    validate();
  };

  const inputClass = (field: string) => {
    const base = "w-full px-4 py-3 rounded-lg border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-ring";
    if (touched[field] && errors[field]) return `${base} border-destructive`;
    if (touched[field] && !errors[field] && formData[field as keyof FormData]) return `${base} input-valid`;
    return `${base} border-input`;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Academic Qualification</h3>
          <p className="text-sm text-muted-foreground font-body">Enter your academic details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">10th Percentage *</label>
          <input
            type="number"
            className={inputClass("tenthPercentage")}
            placeholder="e.g. 85.5"
            max={100}
            value={formData.tenthPercentage}
            onChange={(e) => updateFormData({ tenthPercentage: e.target.value })}
            onBlur={() => handleBlur("tenthPercentage")}
          />
          {touched.tenthPercentage && errors.tenthPercentage && <p className="text-xs text-destructive mt-1 font-body">{errors.tenthPercentage}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">12th Board *</label>
          <select
            className={inputClass("twelfthBoard")}
            value={formData.twelfthBoard}
            onChange={(e) => updateFormData({ twelfthBoard: e.target.value })}
            onBlur={() => handleBlur("twelfthBoard")}
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="IB">IB</option>
            <option value="Other">Other</option>
          </select>
          {touched.twelfthBoard && errors.twelfthBoard && <p className="text-xs text-destructive mt-1 font-body">{errors.twelfthBoard}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">12th Stream *</label>
          <select
            className={inputClass("twelfthStream")}
            value={formData.twelfthStream}
            onChange={(e) => updateFormData({ twelfthStream: e.target.value })}
            onBlur={() => handleBlur("twelfthStream")}
          >
            <option value="">Select Stream</option>
            <option value="Science (PCM)">Science (PCM)</option>
            <option value="Science (PCB)">Science (PCB)</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
          {touched.twelfthStream && errors.twelfthStream && <p className="text-xs text-destructive mt-1 font-body">{errors.twelfthStream}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Physics Marks *</label>
          <input
            type="number"
            className={inputClass("physicsMarks")}
            placeholder="Out of 100"
            max={100}
            value={formData.physicsMarks}
            onChange={(e) => updateFormData({ physicsMarks: e.target.value })}
            onBlur={() => handleBlur("physicsMarks")}
          />
          {touched.physicsMarks && errors.physicsMarks && <p className="text-xs text-destructive mt-1 font-body">{errors.physicsMarks}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Chemistry Marks *</label>
          <input
            type="number"
            className={inputClass("chemistryMarks")}
            placeholder="Out of 100"
            max={100}
            value={formData.chemistryMarks}
            onChange={(e) => updateFormData({ chemistryMarks: e.target.value })}
            onBlur={() => handleBlur("chemistryMarks")}
          />
          {touched.chemistryMarks && errors.chemistryMarks && <p className="text-xs text-destructive mt-1 font-body">{errors.chemistryMarks}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Maths/Biology Marks *</label>
          <input
            type="number"
            className={inputClass("mathsBioMarks")}
            placeholder="Out of 100"
            max={100}
            value={formData.mathsBioMarks}
            onChange={(e) => updateFormData({ mathsBioMarks: e.target.value })}
            onBlur={() => handleBlur("mathsBioMarks")}
          />
          {touched.mathsBioMarks && errors.mathsBioMarks && <p className="text-xs text-destructive mt-1 font-body">{errors.mathsBioMarks}</p>}
        </div>
      </div>

      {/* Auto-calculated percentage */}
      {totalPercentage && (
        <div className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${belowEligibility ? 'bg-destructive/10 border border-destructive/30' : 'bg-emerald/10 border border-emerald/30'}`}>
          {belowEligibility ? (
            <>
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-destructive font-body">Average: {totalPercentage}% — Below Eligibility</p>
                <p className="text-xs text-destructive/80 font-body">Minimum 45% aggregate required. You may still submit for review.</p>
              </div>
            </>
          ) : (
            <div>
              <p className="text-sm font-semibold text-emerald font-body">✓ Average Percentage: {totalPercentage}%</p>
              <p className="text-xs text-emerald/80 font-body">You meet the minimum eligibility criteria.</p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="btn-navy flex items-center gap-2 font-body">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button onClick={handleNext} className="btn-gold flex items-center gap-2 font-body">
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StepAcademic;
