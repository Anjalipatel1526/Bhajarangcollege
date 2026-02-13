import { useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import StepPersonal from "./steps/StepPersonal";
import StepAcademic from "./steps/StepAcademic";
import StepCourse from "./steps/StepCourse";
import StepDocuments from "./steps/StepDocuments";
import StepReview from "./steps/StepReview";
import SuccessScreen from "./SuccessScreen";

export interface FormData {
  // Step 1
  fullName: string;
  parentName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  aadhaar: string;
  category: string;
  address: string;
  // Step 2
  tenthPercentage: string;
  twelfthBoard: string;
  twelfthStream: string;
  physicsMarks: string;
  chemistryMarks: string;
  mathsBioMarks: string;
  // Step 3
  selectedCourse: string;
  hostelRequired: boolean;
  transportRequired: boolean;
  // Step 4
  passportPhoto: File | null;
  twelfthMarksheet: File | null;
  tenthMarksheet: File | null;
  communityCert: File | null;
  // Step 5
  declaration: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  parentName: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  aadhaar: "",
  category: "",
  address: "",
  tenthPercentage: "",
  twelfthBoard: "",
  twelfthStream: "",
  physicsMarks: "",
  chemistryMarks: "",
  mathsBioMarks: "",
  selectedCourse: "",
  hostelRequired: false,
  transportRequired: false,
  passportPhoto: null,
  twelfthMarksheet: null,
  tenthMarksheet: null,
  communityCert: null,
  declaration: false,
};

const stepLabels = ["Personal", "Academic", "Course", "Documents", "Review"];

const ApplicationWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  const goNext = () => {
    setDirection("left");
    setStep((s) => Math.min(s + 1, 5));
  };

  const goPrev = () => {
    setDirection("right");
    setStep((s) => Math.max(s - 1, 1));
  };

  const goToStep = (s: number) => {
    setDirection(s > step ? "left" : "right");
    setStep(s);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessScreen formData={formData} />;
  }

  return (
    <section id="application-form" className="container mx-auto px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <ProgressBar currentStep={step} labels={stepLabels} onStepClick={goToStep} />

        <div
          key={step}
          className={`glass-card-strong p-6 md:p-10 ${direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
        >
          {step === 1 && (
            <StepPersonal formData={formData} updateFormData={updateFormData} onNext={goNext} />
          )}
          {step === 2 && (
            <StepAcademic formData={formData} updateFormData={updateFormData} onNext={goNext} onPrev={goPrev} />
          )}
          {step === 3 && (
            <StepCourse formData={formData} updateFormData={updateFormData} onNext={goNext} onPrev={goPrev} />
          )}
          {step === 4 && (
            <StepDocuments formData={formData} updateFormData={updateFormData} onNext={goNext} onPrev={goPrev} />
          )}
          {step === 5 && (
            <StepReview formData={formData} onPrev={goPrev} onSubmit={handleSubmit} onEdit={goToStep} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationWizard;
