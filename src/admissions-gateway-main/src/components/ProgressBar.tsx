import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  labels: string[];
  onStepClick: (step: number) => void;
}

const ProgressBar = ({ currentStep, labels, onStepClick }: ProgressBarProps) => {
  const percentage = ((currentStep - 1) / (labels.length - 1)) * 100;

  return (
    <div className="mb-8 mt-4">
      {/* Percentage */}
      <div className="text-center mb-4">
        <span className="text-sm font-body font-semibold text-primary-foreground/80">
          {Math.round((currentStep / labels.length) * 100)}% Complete
        </span>
      </div>

      {/* Steps */}
      <div className="relative flex items-center justify-between max-w-2xl mx-auto">
        {/* Track */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted rounded-full">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              background: "linear-gradient(90deg, hsl(var(--emerald)), hsl(var(--gold)))",
            }}
          />
        </div>

        {labels.map((label, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <button
              key={label}
              onClick={() => stepNum <= currentStep && onStepClick(stepNum)}
              className="relative flex flex-col items-center gap-2 z-10"
            >
              <div
                className={`progress-step ${isCompleted ? "completed" : isActive ? "active" : "inactive"}`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNum}
              </div>
              <span
                className={`text-xs font-body font-medium ${
                  isActive
                    ? "text-gold"
                    : isCompleted
                    ? "text-emerald"
                    : "text-primary-foreground/40"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
