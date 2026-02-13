import { useState, useRef, useCallback } from "react";
import type { FormData } from "../ApplicationWizard";
import { Upload, ChevronLeft, ChevronRight, X, Image, FileText } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED = ["image/jpeg", "image/png", "application/pdf"];

interface UploadFieldProps {
  label: string;
  required?: boolean;
  file: File | null;
  fieldKey: string;
  onUpload: (field: string, file: File | null) => void;
}

const UploadField = ({ label, required, file, fieldKey, onUpload }: UploadFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback((f: File) => {
    setError("");
    if (!ALLOWED.includes(f.type)) {
      setError("Only PDF, JPG, PNG allowed");
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("File must be under 2MB");
      return;
    }
    onUpload(fieldKey, f);
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  }, [fieldKey, onUpload]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const remove = () => {
    onUpload(fieldKey, null);
    setPreview(null);
    setError("");
  };

  return (
    <div>
      <label className="block text-sm font-medium font-body text-foreground mb-1.5">
        {label} {required && "*"}
      </label>
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${dragOver ? "border-gold bg-gold/5" : "border-input hover:border-gold/50"}`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground font-body">
            Drag & drop or <span className="text-gold font-semibold">browse</span>
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1 font-body">PDF, JPG, PNG — Max 2MB</p>
          <input ref={inputRef} type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
        </div>
      ) : (
        <div className="border rounded-lg p-4 flex items-center gap-3 bg-secondary">
          {preview ? (
            <img src={preview} alt="preview" className="w-12 h-12 object-cover rounded" />
          ) : (
            <FileText className="w-10 h-10 text-gold" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-body text-foreground truncate">{file.name}</p>
            <p className="text-xs text-muted-foreground font-body">{(file.size / 1024).toFixed(0)} KB</p>
          </div>
          <button onClick={remove} className="text-muted-foreground hover:text-destructive transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      {error && <p className="text-xs text-destructive mt-1 font-body">{error}</p>}
    </div>
  );
};

const StepDocuments = ({ formData, updateFormData, onNext, onPrev }: Props) => {
  const handleUpload = (field: string, file: File | null) => {
    updateFormData({ [field]: file } as Partial<FormData>);
  };

  const handleNext = () => {
    if (!formData.passportPhoto || !formData.twelfthMarksheet) return;
    onNext();
  };

  const canProceed = formData.passportPhoto && formData.twelfthMarksheet;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <Image className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">Document Upload</h3>
          <p className="text-sm text-muted-foreground font-body">Upload required documents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <UploadField label="Passport Photo" required file={formData.passportPhoto} fieldKey="passportPhoto" onUpload={handleUpload} />
        <UploadField label="12th Marksheet" required file={formData.twelfthMarksheet} fieldKey="twelfthMarksheet" onUpload={handleUpload} />
        <UploadField label="10th Marksheet" file={formData.tenthMarksheet} fieldKey="tenthMarksheet" onUpload={handleUpload} />
        <UploadField label="Community Certificate" file={formData.communityCert} fieldKey="communityCert" onUpload={handleUpload} />
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onPrev} className="btn-navy flex items-center gap-2 font-body">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button onClick={handleNext} className={`btn-gold flex items-center gap-2 font-body ${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Review Application <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StepDocuments;
