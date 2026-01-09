import Layout from "@/components/layout/Layout";
import { Home, Dumbbell, Users, Music } from "lucide-react";

const CampusLife = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">Campus Life</h1>
        <p className="mt-4 text-lg opacity-80">Experience vibrant student life</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { icon: Home, title: "Hostel Facilities", desc: "Separate hostels for boys and girls with 24/7 security, Wi-Fi, mess, and recreation rooms.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop" },
            { icon: Dumbbell, title: "Sports Complex", desc: "Cricket, football, basketball courts, indoor games, gym, and swimming pool.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop" },
            { icon: Users, title: "Student Clubs", desc: "Technical clubs, cultural societies, NSS, and entrepreneurship cells for holistic development.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop" },
            { icon: Music, title: "Cultural Events", desc: "Annual fest, tech symposiums, cultural programs, and inter-college competitions.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop" },
          ].map((item) => (
            <div key={item.title} className="overflow-hidden rounded-xl bg-secondary">
              <img src={item.image} alt={item.title} className="aspect-video w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CampusLife;
