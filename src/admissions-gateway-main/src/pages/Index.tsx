import AnimatedBackground from "@gateway/components/AnimatedBackground";

import WelcomePanel from "@gateway/components/WelcomePanel";
import ApplicationWizard from "@gateway/components/ApplicationWizard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <WelcomePanel />
      <ApplicationWizard />
      <footer className="text-center py-6">
        <p className="text-xs font-body text-primary-foreground/40">
          © 2026 Prestige University. All rights reserved. | Admission Helpline: 1800-123-456
        </p>
      </footer>
    </div>
  );
};

export default Index;
