import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Placements", path: "/placements" },
    { name: "Contact Us", path: "/contact" },
  ];

  const academicLinks = [
    { name: "Computer Science", path: "/courses#cse" },
    { name: "Mechanical Engineering", path: "/courses#me" },
    { name: "Civil Engineering", path: "/courses#ce" },
    { name: "Electrical Engineering", path: "/courses#ee" },
    { name: "Electronics & Comm.", path: "/courses#ece" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Bajrang</span>
                <span className="text-xs opacity-80">Engineering College</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Empowering future engineers with quality education, innovative research, 
              and industry-ready skills since 1995.
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
                  Bajrang Nagar, NH-48, Near Industrial Area,
                  <br />
                  Rajasthan - 302001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 opacity-80" />
                <a href="tel:+911234567890" className="text-sm opacity-80 hover:opacity-100">
                  +91-1234-567890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 opacity-80" />
                <a href="mailto:info@bajrangcollege.edu.in" className="text-sm opacity-80 hover:opacity-100">
                  info@bajrangcollege.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-4 text-sm md:flex-row">
          <p className="opacity-80">
            © {new Date().getFullYear()} Bajrang Engineering College. All rights reserved.
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
