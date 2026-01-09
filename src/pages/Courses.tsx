import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Cog, Building2, Zap, Radio, Wrench } from "lucide-react";

const programs = [
  { icon: Cpu, title: "Computer Science & Engineering", code: "CSE", seats: 120, description: "Programming, AI/ML, Data Science, Cloud Computing, Cybersecurity" },
  { icon: Cog, title: "Mechanical Engineering", code: "ME", seats: 60, description: "Design, Manufacturing, Thermodynamics, Robotics, CAD/CAM" },
  { icon: Building2, title: "Civil Engineering", code: "CE", seats: 60, description: "Structural Design, Construction, Environmental Engineering" },
  { icon: Zap, title: "Electrical Engineering", code: "EE", seats: 60, description: "Power Systems, Control Systems, Renewable Energy" },
  { icon: Radio, title: "Electronics & Communication", code: "ECE", seats: 60, description: "VLSI, Embedded Systems, Communication Networks" },
  { icon: Wrench, title: "Automobile Engineering", code: "AE", seats: 30, description: "Vehicle Dynamics, EV Technology, Automotive Design" },
];

const Courses = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">Courses & Departments</h1>
        <p className="mt-4 text-lg opacity-80">B.Tech Programs - 4 Year Undergraduate Degrees</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.code} id={p.code.toLowerCase()} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><p.icon className="h-6 w-6 text-primary" /></div>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>
                <div className="flex gap-4 text-sm"><span>🎓 4 Years</span><span>👥 {p.seats} Seats</span></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
