import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop";

const stats = [
  { value: "₹15 LPA", label: "Highest Package", icon: TrendingUp },
  { value: "₹5.5 LPA", label: "Average Package", icon: TrendingUp },
  { value: "90%", label: "Placement Rate", icon: Users },
  { value: "50+", label: "Companies Visit", icon: Building },
];

const companies = [
  { name: "TCS", logo: "/images/recruiters/tcs-logo.png" },
  { name: "Infosys", logo: "/images/recruiters/infosys-logo.png" },
  { name: "Wipro", logo: "/images/recruiters/wipro-logo.png" },
  { name: "Cognizant", logo: "/images/recruiters/cognizant-logo.png" },
  { name: "Capgemini", logo: "/images/recruiters/capgemini-logo-v3.jpg" },
  { name: "HCL", logo: "/images/recruiters/hcl-logo-v2.png" },
  { name: "Tech Mahindra", logo: "/images/recruiters/tech-mahindra-logo-v2.png" },
  { name: "Accenture", logo: "/images/recruiters/accenture-logo.jpg" },
  { name: "IBM", logo: "/images/recruiters/ibm-logo.png" },
  { name: "Hinduja Global Services", logo: "/images/recruiters/hgs-logo-v2.png" },
  { name: "Accurate Steel Forging", logo: "/images/recruiters/accurate-steel-logo.jpg" },
  { name: "4W TECHNOLOGIES", logo: "/images/recruiters/4w-logo.png" },
  { name: "Microsoft", logo: "/images/recruiters/microsoft-logo-v2.png" },
];

const PlacementsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Content Side */}
          <div className="text-center">
            <h5 className="heading-primary mb-5">
              Exceptional Placement Records
            </h5>
            <p className="mb-8 text-lg text-muted-foreground mx-auto max-w-3xl">
              A strong placement support system connecting students with leading companies and career opportunities.
            </p>

            {/* Stats Grid */}
            <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-secondary p-4 text-center transition-transform hover:scale-105"
                >
                  <div className="mb-1 text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Companies Grid */}
            <div className="p-8">
              <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
                Our Recruiting Partners
              </h3>
              <div className="relative w-full overflow-hidden">
                <LogoLoop
                  logos={companies.map(company => ({
                    src: company.logo,
                    alt: company.name,
                    name: company.name
                  }))}
                />
              </div>

              <div className="mt-8 flex justify-center">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/placements" className="flex items-center gap-2">
                    View Placement Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
