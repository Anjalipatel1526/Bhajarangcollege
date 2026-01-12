import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, BookOpen, GraduationCap, Users, Building, ClipboardCheck, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ApplicationForm from "@/components/admissions/ApplicationForm";
import landingBg from "@/assets/landing-bg.jpg";
import laboratory from "@/assets/laboratory.jpg";
import library from "@/assets/library.jpg";
import aboutCampus from "@/assets/about-campus.jpg";

const Admissions = () => {

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call for presentation, given the backend might not be running for the user
    setTimeout(() => {

      setFormData({ name: "", email: "", phone: "", course: "" });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${landingBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 text-white animate-fade-in-up">
          <h1 className="heading-primary mb-6 text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            Join the Future of Engineering
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl font-light leading-relaxed text-gray-200">
            Bhajarang Engineering College continues its legacy of excellence with merit-based, accessible, and world-class education. Start your journey towards a successful career today.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-lg transition-transform hover:scale-105" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for 2026-27
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Bhajarang */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="heading-secondary mb-6 text-primary">Why Choose Bhajarang?</h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between academic theory and industry reality. With state-of-the-art facilities and a curriculum designed by experts, we prepare you for the challenges of tomorrow.
              </p>
              <ul className="space-y-4">
                {[
                  "AICTE Approved & University Affiliated",
                  "Industry-Focused Curriculum with Practical Exposure",
                  "Experienced Faculty from Top Institutions",
                  "Modern Infrastructure & Smart Classrooms",
                  "Excellent Placement Support & Career Guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={laboratory}
                alt="Students in laboratory"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Admission Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Simple Admission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've streamlined our admission procedure to make it as hassle-free as possible for students and parents.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: FileText, title: "1. Check Eligibility", desc: "Review academic requirements for your desired course." },
              { icon: ClipboardCheck, title: "2. Submit Application", desc: "Fill out the online form or visit our campus." },
              { icon: Users, title: "3. Counseling", desc: "Document verification and seat allotment." },
              { icon: CheckCircle2, title: "4. Confirmation", desc: "Pay fees and confirm your admission." }
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Eligibility Criteria */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src={library}
                alt="Students studying"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="heading-secondary mb-8">Eligibility Criteria</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Undergraduate
                  </h3>
                  <div className="bg-secondary/20 p-6 rounded-xl border-l-4 border-primary">
                    <p className="text-lg leading-relaxed">
                      Passed 10+2 examination with Physics, Chemistry, and Mathematics as compulsory subjects. Obtained at least <strong>60% marks</strong>in the above subjects taken together.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Postgraduate (MBA)
                  </h3>
                  <div className="bg-secondary/20 p-6 rounded-xl border-l-4 border-accent">
                    <p className="text-lg leading-relaxed">
                      Passed Bachelor's Degree of minimum 3 years duration. Obtained at least <strong>50% marks</strong>in the qualifying examination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Programs & 6. Support */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Programs CTA */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Academic Programs</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                We offer a wide range of undergraduate and postgraduate programs designed to equip you with the skills needed for a successful career in the ever-evolving tech industry.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-4 font-semibold">
                <Link to="/courses">Explore Programs</Link>
              </Button>
            </div>

            {/* Support */}
            <div className="space-y-6 md:pl-12 border-l border-primary-foreground/20">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Users className="w-8 h-8" />
                Support & Guidance
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Our collaborative admissions team is here to help you every step of the way, from choosing the right course to finalizing your documentation.
              </p>
              <ul className="text-sm space-y-2 opacity-90">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Personalized Counseling Sessions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Scholarship & Financial Aid Assistance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Complete Documentation Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action / Form */}
      <section id="apply-form" className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl overflow-hidden border-0">
              <div className="grid md:grid-cols-5 bg-white">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Start Your Application</h3>
                    <p className="opacity-90 mb-6">Take the first step towards a brilliant career. Fill out the form and our team will get back to you.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">+91 94446 26262</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5" />
                      <span className="font-medium">Admission Office, Block A</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-primary">Ready to Apply?</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Click the button below to open the official application form for the academic session 2026-27.
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full md:w-auto text-lg py-6 px-10 bg-primary hover:bg-primary/90">
                        Start Application
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <ApplicationForm onSuccess={() => { }} />
                    </DialogContent>
                  </Dialog>

                  <p className="text-xs text-muted-foreground mt-6">
                    Application fee details will be sent to your registered email after submission.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
