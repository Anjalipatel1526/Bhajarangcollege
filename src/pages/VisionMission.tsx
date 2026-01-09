import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const VisionMission = () => {
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
          <h1 className="heading-primary text-primary-foreground">Vision & Mission</h1>
          <p className="mt-4 text-lg opacity-80">Guiding principles that drive our institution</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
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

export default VisionMission;
