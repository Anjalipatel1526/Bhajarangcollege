import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-lg opacity-80">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Send us a Message</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Name</Label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /></div>
                  <div><Label htmlFor="subject">Subject</Label><Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required /></div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required /></div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", content: "Bajrang Nagar, NH-48, Near Industrial Area, Rajasthan - 302001, India" },
                { icon: Phone, title: "Phone", content: "+91-1234-567890, +91-1234-567891" },
                { icon: Mail, title: "Email", content: "info@bajrangcollege.edu.in" },
                { icon: Clock, title: "Office Hours", content: "Mon-Sat: 9:00 AM - 5:00 PM" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl bg-secondary p-4">
                  <item.icon className="h-6 w-6 shrink-0 text-primary" />
                  <div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.content}</p></div>
                </div>
              ))}

              <div className="overflow-hidden rounded-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.7!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAuMCJOIDc1wrA0MicwLjAiRQ!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" title="College Location" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
