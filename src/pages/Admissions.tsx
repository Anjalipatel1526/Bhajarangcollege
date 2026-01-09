import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll contact you soon. Your application has been saved.",
          duration: 5000,
        });
        setFormData({ name: "", email: "", phone: "", course: "" });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-primary-foreground">Admissions 2026-27</h1>
          <p className="mt-4 text-lg opacity-80">Start your journey with us</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">


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
                        <SelectItem value="it">Information technology</SelectItem>
                        <SelectItem value="ai & ds">Artificial Intelligence & Data Science</SelectItem>
                        <SelectItem value="mba">Master of Business Administration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card><CardHeader><CardTitle>Eligibility</CardTitle></CardHeader><CardContent className="text-muted-foreground">10+2 with Physics, Chemistry, and Mathematics with minimum 75% marks</CardContent></Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
