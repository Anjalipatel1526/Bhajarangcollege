import type { FormData } from "../ApplicationWizard";
import {
  Laptop,
  Brain,
  Cog,
  Building2,
  Cpu,
  Heart,
  Scale,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const courses = [
  { id: "cse", name: "Computer Science Engineering", icon: Laptop, desc: "Software development, algorithms, data structures, and cutting-edge tech." },
  { id: "ai", name: "Artificial Intelligence", icon: Brain, desc: "Machine learning, neural networks, robotics, and intelligent systems." },
  { id: "mech", name: "Mechanical Engineering", icon: Cog, desc: "Design, manufacturing, thermodynamics, and automotive systems." },
  { id: "civil", name: "Civil Engineering", icon: Building2, desc: "Structural design, construction, urban planning, and infrastructure." },
  { id: "ece", name: "Electronics & Communication", icon: Cpu, desc: "Circuit design, signal processing, embedded systems, and IoT." },
  { id: "medical", name: "Medical / Nursing", icon: Heart, desc: "Healthcare, patient care, anatomy, and clinical practice." },
  { id: "law", name: "Law", icon: Scale, desc: "Legal studies, constitutional law, corporate law, and jurisprudence." },
  { id: "bba", name: "Business Administration", icon: Briefcase, desc: "Management, finance, marketing, and entrepreneurship." },
];

const StepCourse = ({ formData, updateFormData, onNext, onPrev }: Props) => {
  const handleSelect = (id: string) => {
    updateFormData({ selectedCourse: id });
  };

  const handleNext = () => {
    if (!formData.selectedCourse) return;
    onNext();
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <Laptop className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Select Your Course</h3>
          <p className="text-sm text-muted-foreground font-body">Choose one program to apply for</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {courses.map((course) => {
          const Icon = course.icon;
          const selected = formData.selectedCourse === course.id;
          return (
            <button
              key={course.id}
              onClick={() => handleSelect(course.id)}
              className={`course-card text-left group ${selected ? "selected" : ""}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-colors ${selected ? "bg-gold/20" : "bg-secondary"} group-hover:bg-gold/20`}>
                <Icon className={`w-6 h-6 transition-colors ${selected ? "text-gold" : "text-muted-foreground"} group-hover:text-gold`} />
              </div>
              <h4 className="font-display text-sm font-semibold text-foreground mb-1 leading-tight">{course.name}</h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{course.desc}</p>
            </button>
          );
        })}
      </div>

      {!formData.selectedCourse && (
        <p className="text-sm text-muted-foreground font-body text-center mb-4">Please select a course to continue</p>
      )}

      {/* Toggles */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-secondary">
        <label className="flex items-center gap-3 cursor-pointer flex-1">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formData.hostelRequired}
              onChange={(e) => updateFormData({ hostelRequired: e.target.checked })}
            />
            <div className="w-11 h-6 bg-muted rounded-full peer-checked:bg-gold transition-colors" />
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-card rounded-full shadow transition-transform peer-checked:translate-x-5" />
          </div>
          <span className="text-sm font-body text-foreground">Hostel Required</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer flex-1">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formData.transportRequired}
              onChange={(e) => updateFormData({ transportRequired: e.target.checked })}
            />
            <div className="w-11 h-6 bg-muted rounded-full peer-checked:bg-gold transition-colors" />
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-card rounded-full shadow transition-transform peer-checked:translate-x-5" />
          </div>
          <span className="text-sm font-body text-foreground">Transport Required</span>
        </label>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="btn-navy flex items-center gap-2 font-body">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button onClick={handleNext} className={`btn-gold flex items-center gap-2 font-body ${!formData.selectedCourse ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StepCourse;
