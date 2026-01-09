import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Cog, Building2, Zap, Radio, Wrench } from "lucide-react";

const programs = [
  { icon: Cpu, title: "Computer Science & Engineering", code: "CSE", seats: 120, description: "Learn computing, programming, and emerging technologies with hands-on projects to become industry-ready professionals" },
  { icon: Cog, title: "Mechanical Engineering", code: "ME", seats: 60, description: "Gain in-depth knowledge of mechanics, design, and manufacturing, with hands-on projects that prepare you for industry challenges" },
  { icon: Building2, title: "Civil Engineering", code: "CE", seats: 60, description: "Learn to design, construct, and manage infrastructure projects with practical training and industry-focused skills" },
  { icon: Zap, title: "Electrical and Electronics Engineering", code: "EEE", seats: 60, description: "Develop expertise in electrical systems, electronics, and power technology through hands-on labs and industry-oriented learning" },
  { icon: Radio, title: "Electronics & Communication Engineering", code: "ECE", seats: 60, description: "Learn to design and develop electronic systems, communication networks, and embedded technologies with practical, hands-on training" },
  { icon: Wrench, title: "Information Technology", code: "IT", seats: 60, description: "Master software development, networking, and emerging technologies with practical projects to become industry-ready professionals" },
  { icon: Wrench, title: "Artificial Intelligence and Data Science", code: "AI&DS", seats: 60, description: "Learn to develop intelligent systems, analyze data, and apply AI & machine learning techniques through hands-on projects and real-world applications" },
  { icon: Wrench, title: "Master of Business Administration", code: "MBA", seats: 60, description: "Develop leadership, management, and strategic skills through industry-focused learning and real-world business exposure" },
];

const Courses = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h5 className="heading-primary text-primary-foreground">Engineering & Management Programs</h5>
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
                <p className="mb-4 text-sm text-foreground">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
