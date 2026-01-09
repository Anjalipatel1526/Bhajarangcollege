import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building } from "lucide-react";

const stats = [
  { value: "₹24 LPA", label: "Highest Package", icon: TrendingUp },
  { value: "₹6.5 LPA", label: "Average Package", icon: TrendingUp },
  { value: "95%", label: "Placement Rate", icon: Users },
  { value: "200+", label: "Companies Visit", icon: Building },
];

const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "HCL",
  "Tech Mahindra",
  "L&T",
  "Accenture",
  "IBM",
  "Microsoft",
  "Amazon",
];

const PlacementsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Career Excellence
            </span>
            <h2 className="heading-primary mb-6">
              Exceptional Placement Record
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our dedicated Training and Placement Cell works tirelessly to connect 
              students with leading companies. With a strong industry network and 
              comprehensive training programs, we ensure our graduates are job-ready.
            </p>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-secondary p-4 text-center"
                >
                  <div className="mb-1 text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/placements">
                View Placement Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Companies Grid */}
          <div className="rounded-2xl bg-secondary p-8">
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
              Our Recruiting Partners
            </h3>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
              {companies.map((company) => (
                <div
                  key={company}
                  className="flex h-16 items-center justify-center rounded-lg bg-background p-3 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:shadow-md hover:text-primary"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
