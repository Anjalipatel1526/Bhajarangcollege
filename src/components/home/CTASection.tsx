import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-accent to-accent/80 py-16 text-accent-foreground lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-lg opacity-90">
              Take the first step towards a successful career. Apply now for 
              B.Tech admissions 2025-26 and join our community of future engineers.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/admissions">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
            >
              <a href="tel:+911234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
