import Layout from "@/components/layout/Layout";
import { Award, Users, Calendar, MapPin, CheckCircle, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    { icon: Target, title: "Excellence", description: "Striving for the highest standards in education and research" },
    { icon: Heart, title: "Integrity", description: "Upholding ethical practices and academic honesty" },
    { icon: CheckCircle, title: "Innovation", description: "Fostering creativity and entrepreneurial thinking" },
    { icon: Eye, title: "Inclusivity", description: "Creating an environment where everyone can thrive" },
  ];

  return (
    <Layout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-primary-foreground">About Us</h1>
          <p className="mt-4 text-lg opacity-80">Shaping Engineering Excellence Since 1995</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <h2 className="heading-secondary mb-6">Our Legacy</h2>
              <p className="mb-4 text-muted-foreground">Bhajarang Engineering College was established in 1995 with a vision to provide world-class technical education. Over three decades, we have grown into one of the premier engineering institutions in India.</p>
              <p className="mb-4 text-muted-foreground">Our campus spans 50 acres and houses state-of-the-art laboratories, a central library, sports facilities, and comfortable hostels for students from across the country.</p>
              <p className="text-muted-foreground">We are affiliated with the state technical university and approved by AICTE, with NBA accreditation for our major programs.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, value: "1995", label: "Established" },
                { icon: Users, value: "5000+", label: "Students" },
                { icon: Award, value: "NBA", label: "Accredited" },
                { icon: MapPin, value: "50 Acres", label: "Campus" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-secondary p-6 text-center">
                  <s.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-16">
            <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
              <Eye className="mx-auto mb-6 h-16 w-16 text-accent" />
              <h2 className="heading-secondary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be a globally recognized institution of excellence in engineering education,
                fostering innovation, research, and ethical leadership to create engineers who
                contribute meaningfully to society and drive technological advancement.
              </p>
            </div>

            <div className="rounded-2xl border p-8 text-center md:p-12">
              <Target className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="heading-secondary mb-6">Our Mission</h2>
              <ul className="space-y-4 text-left text-muted-foreground">
                <li className="flex gap-3"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" /> Provide quality technical education with emphasis on practical learning and industry relevance.</li>
                <li className="flex gap-3"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" /> Foster research, innovation, and entrepreneurship among students and faculty.</li>
                <li className="flex gap-3"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" /> Develop partnerships with industries for enhanced learning and placement opportunities.</li>
                <li className="flex gap-3"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" /> Instill ethical values, social responsibility, and leadership qualities in students.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-secondary mb-8 text-center">Core Values</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 rounded-xl bg-secondary p-6">
                    <v.icon className="h-8 w-8 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">{v.title}</h3>
                      <p className="text-sm text-muted-foreground">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;
