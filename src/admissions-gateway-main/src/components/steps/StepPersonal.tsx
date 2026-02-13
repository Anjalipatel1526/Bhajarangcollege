import { useState } from "react";
import type { FormData } from "../ApplicationWizard";
import { User, ChevronRight } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
}

const StepPersonal = ({ formData, updateFormData, onNext }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.parentName.trim()) e.parentName = "Parent name is required";
    if (!formData.dob) e.dob = "Date of birth is required";
    if (!formData.gender) e.gender = "Gender is required";
    if (!/^\d{10}$/.test(formData.mobile)) e.mobile = "Enter valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    if (formData.aadhaar && !/^\d{12}$/.test(formData.aadhaar)) e.aadhaar = "Aadhaar must be 12 digits";
    if (!formData.address.trim()) e.address = "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    const allFields = ["fullName", "parentName", "dob", "gender", "mobile", "email", "address"];
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
          <User className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Personal Information</h3>
          <p className="text-sm text-muted-foreground font-body">Please fill in your personal details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Full Name *</label>
          <input
            className={inputClass("fullName")}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            onBlur={() => handleBlur("fullName")}
          />
          {touched.fullName && errors.fullName && <p className="text-xs text-destructive mt-1 font-body">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Parent/Guardian Name *</label>
          <input
            className={inputClass("parentName")}
            placeholder="Enter parent/guardian name"
            value={formData.parentName}
            onChange={(e) => updateFormData({ parentName: e.target.value })}
            onBlur={() => handleBlur("parentName")}
          />
          {touched.parentName && errors.parentName && <p className="text-xs text-destructive mt-1 font-body">{errors.parentName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Date of Birth *</label>
          <input
            type="date"
            className={inputClass("dob")}
            value={formData.dob}
            onChange={(e) => updateFormData({ dob: e.target.value })}
            onBlur={() => handleBlur("dob")}
          />
          {touched.dob && errors.dob && <p className="text-xs text-destructive mt-1 font-body">{errors.dob}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Gender *</label>
          <select
            className={inputClass("gender")}
            value={formData.gender}
            onChange={(e) => updateFormData({ gender: e.target.value })}
            onBlur={() => handleBlur("gender")}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {touched.gender && errors.gender && <p className="text-xs text-destructive mt-1 font-body">{errors.gender}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Mobile Number *</label>
          <input
            className={inputClass("mobile")}
            placeholder="10-digit mobile number"
            maxLength={10}
            value={formData.mobile}
            onChange={(e) => updateFormData({ mobile: e.target.value.replace(/\D/g, "") })}
            onBlur={() => handleBlur("mobile")}
          />
          {touched.mobile && errors.mobile && <p className="text-xs text-destructive mt-1 font-body">{errors.mobile}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Email ID *</label>
          <input
            type="email"
            className={inputClass("email")}
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            onBlur={() => handleBlur("email")}
          />
          {touched.email && errors.email && <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Aadhaar Number</label>
          <input
            className={inputClass("aadhaar")}
            placeholder="12-digit Aadhaar number"
            maxLength={12}
            value={formData.aadhaar}
            onChange={(e) => updateFormData({ aadhaar: e.target.value.replace(/\D/g, "") })}
            onBlur={() => handleBlur("aadhaar")}
          />
          {touched.aadhaar && errors.aadhaar && <p className="text-xs text-destructive mt-1 font-body">{errors.aadhaar}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Category</label>
          <select
            className={inputClass("category")}
            value={formData.category}
            onChange={(e) => updateFormData({ category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="EWS">EWS</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium font-body text-foreground mb-1.5">Address *</label>
          <textarea
            className={inputClass("address")}
            placeholder="Enter your full address"
            rows={3}
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            onBlur={() => handleBlur("address")}
          />
          {touched.address && errors.address && <p className="text-xs text-destructive mt-1 font-body">{errors.address}</p>}
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button onClick={handleNext} className="btn-gold flex items-center gap-2 font-body">
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StepPersonal;
