import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Calendar, CreditCard } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "We'll contact you soon." });
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  const steps = [
    { icon: FileText, title: "Online Application", desc: "Fill out the form below" },
    { icon: Calendar, title: "Entrance Exam", desc: "JEE Main / State CET" },
    { icon: CheckCircle, title: "Counseling", desc: "Document verification" },
    { icon: CreditCard, title: "Fee Payment", desc: "Confirm your seat" },
  ];

  return (
    <Layout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-primary-foreground">Admissions 2025-26</h1>
          <p className="mt-4 text-lg opacity-80">Start your engineering journey with us</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-center gap-4 rounded-xl bg-secondary p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{i + 1}</div>
                <div><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Apply Now</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Full Name</Label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
                  <div><Label htmlFor="phone">Phone</Label><Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /></div>
                  <div><Label>Preferred Course</Label>
                    <Select value={formData.course} onValueChange={(v) => setFormData({ ...formData, course: v })}>
                      <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cse">Computer Science</SelectItem>
                        <SelectItem value="me">Mechanical</SelectItem>
                        <SelectItem value="ce">Civil</SelectItem>
                        <SelectItem value="ee">Electrical</SelectItem>
                        <SelectItem value="ece">Electronics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card><CardHeader><CardTitle>Eligibility</CardTitle></CardHeader><CardContent className="text-muted-foreground">10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks. Valid JEE Main / State CET score.</CardContent></Card>
              <Card><CardHeader><CardTitle>Important Dates</CardTitle></CardHeader><CardContent className="space-y-2 text-sm text-muted-foreground"><p>📅 Application Deadline: March 31, 2025</p><p>📅 Counseling Begins: June 15, 2025</p><p>📅 Classes Start: August 1, 2025</p></CardContent></Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
