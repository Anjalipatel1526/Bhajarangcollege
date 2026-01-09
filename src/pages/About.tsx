import Layout from "@/components/layout/Layout";
import { Award, Users, Calendar, MapPin } from "lucide-react";

const About = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">About Us</h1>
        <p className="mt-4 text-lg opacity-80">Shaping Engineering Excellence Since 1995</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-secondary mb-6">Our Legacy</h2>
            <p className="mb-4 text-muted-foreground">Bajrang Engineering College was established in 1995 with a vision to provide world-class technical education. Over three decades, we have grown into one of the premier engineering institutions in India.</p>
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
      </div>
    </section>
  </Layout>
);

export default About;
