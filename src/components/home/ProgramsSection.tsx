import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cpu, Cog, Building2, Zap, Radio, Wrench } from "lucide-react";

const programs = [
  {
    icon: Cpu,
    title: "Computer Science & Engineering",
    code: "CSE",
    duration: "4 Years",
    seats: "120 Seats",
    description: "Learn programming, AI, ML, data science, and software development.",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    code: "ME",
    duration: "4 Years",
    seats: "60 Seats",
    description: "Master design, manufacturing, thermodynamics, and robotics.",
  },
  {
    icon: Building2,
    title: "Civil Engineering",
    code: "CE",
    duration: "4 Years",
    seats: "60 Seats",
    description: "Build infrastructure with structural design and construction expertise.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    code: "EE",
    duration: "4 Years",
    seats: "60 Seats",
    description: "Power systems, electronics, and renewable energy solutions.",
  },
  {
    icon: Radio,
    title: "Electronics & Communication",
    code: "ECE",
    duration: "4 Years",
    seats: "60 Seats",
    description: "Communication systems, embedded systems, and VLSI design.",
  },
  {
    icon: Wrench,
    title: "Automobile Engineering",
    code: "AE",
    duration: "4 Years",
    seats: "30 Seats",
    description: "Vehicle dynamics, EV technology, and automotive systems.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Academic Programs
          </span>
          <h2 className="heading-primary mb-4">Popular Engineering Programs</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our range of undergraduate engineering programs designed 
            to prepare you for a successful career.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.code}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {program.code}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
                  <span>🎓 {program.duration}</span>
                  <span>👥 {program.seats}</span>
                </div>
                <Link
                  to={`/courses#${program.code.toLowerCase()}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/courses">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
