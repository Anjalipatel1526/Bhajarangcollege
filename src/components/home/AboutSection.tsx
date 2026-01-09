import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "AICTE Approved & University Affiliated",
    "NBA Accredited Programs",
    "Modern Infrastructure & Labs",
    "Industry-Academia Partnerships",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop"
                alt="Bajrang Engineering College Campus"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 text-accent-foreground shadow-lg md:-bottom-8 md:-right-8">
              <div className="text-3xl font-bold md:text-4xl">30+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              About Us
            </span>
            <h2 className="heading-primary mb-6">
              Building Future Leaders in Engineering
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Established in 1995, Bajrang Engineering College has been at the forefront 
              of technical education in India. We combine rigorous academics with practical 
              learning to produce industry-ready graduates.
            </p>
            <p className="mb-8 text-muted-foreground">
              Our state-of-the-art campus, experienced faculty, and strong industry 
              connections create an environment where students thrive. We believe in 
              nurturing not just engineers, but innovative thinkers and problem solvers 
              who will shape the future.
            </p>

            {/* Highlights */}
            <ul className="mb-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
