import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

import aboutCampusImg from "@/assets/about-campus.jpg";

const AboutSection = () => {
  const highlights = [
    "AICTE Approved & Anna University Affiliated",
    "Industry-Oriented Engineering Programs",
    "Modern Infrastructure & Advanced Laboratories",
    "Focused on Skill Development & Career Success",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <img
                src={aboutCampusImg}
                alt="Bhajarang Engineering College Campus"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              About Us
            </span>
            <h4 className="mb-6 text-xl font-bold whitespace-nowrap text-foreground">
              Building Future Leaders in Engineering
            </h4>
            <p className="mb-6 text-lg text-muted-foreground">
              Established in 2001, Bhajarang Engineering College is committed to delivering quality technical education with a strong focus on academic excellence and practical learning. The institution prepares students to meet real-world engineering challenges with confidence and competence.
              <br></br>
            </p>
            <p className="mb-8 text-muted-foreground">
              With experienced faculty, well-equipped laboratories, and a student-centric learning environment, the college nurtures innovative thinkers, skilled professionals, and responsible engineers. Strong industry exposure and hands-on training ensure graduates are career-ready and future-focused.
              <br></br>
            </p>

            {/* Highlights */}
            <ul className="mb-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
