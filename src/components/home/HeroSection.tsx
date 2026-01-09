import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-highlight">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="flex min-h-[600px] flex-col items-center justify-center py-20 text-center lg:min-h-[700px] lg:py-32">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            Admissions Open for 2025-26
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            Shaping Tomorrow's
            <span className="block text-accent">Engineers Today</span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Join Bajrang Engineering College - Where innovation meets excellence. 
            Discover world-class education, industry partnerships, and a pathway to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
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
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/courses">
                Explore Courses
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-16">
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "5000+", label: "Students Enrolled" },
              { value: "150+", label: "Expert Faculty" },
              { value: "95%", label: "Placement Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
