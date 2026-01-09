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
          <p className="mt-4 text-lg opacity-80">Shaping Engineering Excellence Since 2001</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <h2 className="heading-secondary mb-6">Our Legacy</h2>
              <p className="mb-4 text-muted-foreground">Bhajarang Engineering College was established with a vision to deliver quality technical education and develop future-ready engineers. Over the years, the institution has grown into a reputed center for academic excellence and innovation.</p>
              <p className="mb-4 text-muted-foreground">The campus features well-equipped laboratories, a central library, sports facilities, and comfortable hostels, providing a supportive learning environment for students.</p>
              <p className="text-muted-foreground">The college is AICTE approved, affiliated to Anna University, and offers NBA-accredited programs, ensuring high academic standards and industry relevance.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, value: "2001", label: "Established" },
                { icon: Users, value: "500+", label: "Students" },
                { icon: Award, value: "NBA", label: "Accredited" },
                { icon: MapPin, value: "25 Acres", label: "Campus" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-secondary p-6 text-center">
                  <s.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-white">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-16">
            <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
              <h2 className="heading-secondary mb-6">Our Vision</h2>
              <p className="text-lg text-white">
                Our vision is to be a center of excellence in engineering and management education.
                We strive to nurture innovative, skilled, and ethical professionals.
                Through quality education and industry relevance, we aim to contribute to national and global development.
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-16">
              <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
                <h2 className="heading-secondary mb-6">Our Mission</h2>
                <p className="text-lg text-white">
                  Our mission is to provide quality technical and management education through a strong academic foundation.
                  We aim to promote practical learning, innovation, and industry readiness.
                  By nurturing ethical values and professional skills, we prepare students for successful careers and responsible citizenship.
                </p>
              </div>

              <div>
                <h2 className="heading-secondary mb-8 text-center">Core Values</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {values.map((v) => (
                    <div key={v.title} className="flex gap-4 rounded-xl bg-secondary p-6">
                      <v.icon className="h-8 w-8 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">{v.title}</h3>
                        <p className="text-sm text-white">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
