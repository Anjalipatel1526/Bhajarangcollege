import { GraduationCap, Users, FlaskConical, Briefcase, Award, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "NBA Accredited",
    description: "Programs accredited by the National Board of Accreditation",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "150+ highly qualified professors with industry experience",
  },
  {
    icon: FlaskConical,
    title: "Modern Labs",
    description: "State-of-the-art laboratories with latest equipment",
  },
  {
    icon: Briefcase,
    title: "95% Placements",
    description: "Excellent placement record with top companies",
  },
  {
    icon: BookOpen,
    title: "Rich Library",
    description: "Digital library with 50,000+ books and journals",
  },
  {
    icon: GraduationCap,
    title: "5000+ Alumni",
    description: "Strong alumni network across the globe",
  },
];

const HighlightsSection = () => {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="heading-primary">Our Key Highlights</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
