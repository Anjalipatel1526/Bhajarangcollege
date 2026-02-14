import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Cog, Building2, Zap, Radio, Globe, Brain, Briefcase, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Cpu,
    title: "Computer Science & Engineering",
    code: "CSE",
    description: "Master the fundamentals of computing, algorithms, and software design. Prepare for high-demand careers in software development and system architecture.",
    image: "/images/courses/cse.png"
  },
  {
    icon: Globe,
    title: "Information Technology",
    code: "IT",
    description: "Explore the vast world of networking, web technologies, and information systems. Bridge the gap between hardware and software in the digital era.",
    image: "/images/courses/it.png"
  },
  {
    icon: Radio,
    title: "Electronics & Comm. Engineering",
    code: "ECE",
    description: "Design the future of communication systems and embedded devices. Gain hands-on experience with modern electronics and signal processing.",
    image: "/images/courses/ece.png"
  },
  {
    icon: Zap,
    title: "Electrical & Electronics Engineering",
    code: "EEE",
    description: "Power the world with expertise in electrical systems and renewable energy. Blends core electrical concepts with modern electronic applications.",
    image: "/images/courses/eee.png"
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    code: "ME",
    description: "Innovate in the fields of robotics, manufacturing, and automotive systems. Apply principles of mechanics and materials to solve real-world problems.",
    image: "/images/courses/mech.png"
  },
  {
    icon: Building2,
    title: "Civil Engineering",
    code: "CE",
    description: "Build the infrastructure of tomorrow. Focus on structural design, urban planning, and sustainable construction practices.",
    image: "/images/courses/civil.png"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & Data Science",
    code: "AI&DS",
    description: "Dive into the cutting-edge realms of machine learning and big data. Develop intelligent systems that drive decision-making and automation.",
    image: "/images/courses/ai.png"
  },
  {
    icon: Briefcase,
    title: "Master of Business Administration",
    code: "MBA",
    description: "Cultivate strategic leadership and management skills. Prepare for executive roles with a focus on marketing, finance, and human resources.",
    image: "/images/courses/mba.jpg"
  },
];

const Courses = () => (
  <Layout>
    {/* Page Header */}
    <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90 z-10" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="container-custom text-center relative z-20">
        <h1 className="heading-primary text-primary-foreground mb-6">Academic Programs</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
          Empowering the next generation of innovators with world-class technical education.
          Our industry-aligned curriculum and state-of-the-art facilities ensure you are ready to lead in the global workforce.
        </p>
      </div>
    </section>

    {/* Programs Grid */}
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.code} className="group flex flex-col overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image / Visual Placeholder */}
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-secondary/5 z-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Visual Suggestion</p>
                    <p className="text-sm text-foreground/80">{p.title} related image</p>
                  </div>
                </div>
                {/* Once images are uploaded, this logic will display them */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-0 data-[loaded=true]:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                    (e.target as HTMLImageElement).setAttribute('data-loaded', 'true');
                  }}
                />


              </div>

              <CardHeader className="pt-6">

                <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {p.description}
                </p>
              </CardContent>

              <CardFooter className="pt-2 pb-6">
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-white" variant="outline">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Bar */}
    <section className="bg-secondary py-16 text-primary-foreground">
      <div className="container-custom text-center">
        <h2 className="heading-secondary text-white mb-6">Ready to Start Your Journey?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Admissions for the upcoming academic year are now open. Secure your future with Bhajarang Engineering College.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8">
            Apply Online
          </Button>
          <Button size="lg" variant="outline" className="text-primary border-white/20 hover:bg-white/10 hover:text-white font-semibold text-lg px-8">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
