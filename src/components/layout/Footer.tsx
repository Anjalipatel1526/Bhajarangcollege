import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Linkedin } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
      toast({
        title: "Enquiry Sent!",
        description: "We have received your message and will get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Placements", path: "/placements" },
  ];

  const academicLinks = [
    { name: "Computer Science", path: "/courses" },
    { name: "Mechanical Engineering", path: "/courses" },
    { name: "Civil Engineering", path: "/courses" },
    { name: "Electrical Engineering", path: "/courses" },
    { name: "MBA", path: "/courses" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/school/bhajarang-engineering-college", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white overflow-hidden p-0.5">
                <img src="/logo.png" alt="Bhajarang Engineering College" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Bhajarang</span>
                <span className="text-xs opacity-80">Engineering College</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Quality technical and management education focused on innovation, skills, and career success.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  4XQX+738, Veppambaattu, Chennai, Tamil Nadu 602024
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 opacity-80" />
                <a href="tel:+919444626262" className="text-sm opacity-80 hover:opacity-100">
                  +91-94446-26262
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 opacity-80" />
                <a href="mailto:info@bhajarang.com" className="text-sm opacity-80 hover:opacity-100">
                  info@bhajarang.com
                </a>
              </li>
              <li className="pt-2">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors group">
                      <MessageSquare className="h-4 w-4 bg-yellow-500 rounded-sm text-black p-0.5 group-hover:bg-white group-hover:text-primary transition-colors" />
                      Send Message
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Send us an Enquiry</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you shortly.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEnquirySubmit} className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-4 text-sm md:flex-row">
          <p className="opacity-80">
            © Bhajarang Engineering College. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="opacity-80 transition-opacity hover:opacity-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="opacity-80 transition-opacity hover:opacity-100">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
