import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "CSE 2020",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    quote:
      "Bajrang Engineering College provided me with the perfect foundation for my career. The faculty's guidance and practical exposure helped me secure my dream job at Google.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Project Manager at L&T",
    batch: "Civil 2019",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    quote:
      "The industry connections and hands-on project experience at BEC gave me a competitive edge. I'm grateful for the opportunities this institution provided.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Data Scientist at Amazon",
    batch: "CSE 2021",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
    quote:
      "The modern curriculum and focus on emerging technologies like AI and ML prepared me well for the tech industry. BEC truly shapes future-ready engineers.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Design Engineer at Tata Motors",
    batch: "Mechanical 2020",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    quote:
      "From well-equipped labs to supportive professors, everything at BEC is designed to help students succeed. The placement cell's efforts are commendable.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            What Our Alumni Say
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-primary-foreground/5 p-8 backdrop-blur-sm md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute left-8 top-8 h-12 w-12 text-accent/30" />

            {/* Testimonial Content */}
            <div className="relative text-center">
              <p className="mb-8 text-lg leading-relaxed md:text-xl">
                "{currentTestimonial.quote}"
              </p>

              <div className="flex flex-col items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-accent"
                />
                <div>
                  <h4 className="text-lg font-semibold">{currentTestimonial.name}</h4>
                  <p className="text-sm text-primary-foreground/70">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-sm text-accent">{currentTestimonial.batch}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4 md:-left-6 md:-right-6 md:px-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-accent"
                    : "bg-primary-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
