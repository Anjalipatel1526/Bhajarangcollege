import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const faculty = [
  { name: "Dr. Rajesh Kumar", dept: "Computer Science", qual: "Ph.D. IIT Delhi", exp: "20 years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop" },
  { name: "Dr. Priya Sharma", dept: "Mechanical", qual: "Ph.D. IIT Bombay", exp: "15 years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop" },
  { name: "Dr. Amit Verma", dept: "Civil", qual: "Ph.D. NIT Trichy", exp: "18 years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
  { name: "Dr. Sunita Patel", dept: "Electrical", qual: "Ph.D. IISc Bangalore", exp: "12 years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop" },
  { name: "Dr. Vikram Singh", dept: "Electronics", qual: "Ph.D. IIT Kanpur", exp: "16 years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop" },
  { name: "Dr. Meera Joshi", dept: "Computer Science", qual: "Ph.D. IIIT Hyderabad", exp: "10 years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop" },
];

const Faculty = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">Our Faculty</h1>
        <p className="mt-4 text-lg opacity-80">150+ Experienced Educators</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <Card key={f.name} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img src={f.image} alt={f.name} className="mx-auto mb-4 h-24 w-24 rounded-full object-cover" />
                <h3 className="font-semibold text-foreground">{f.name}</h3>
                <p className="text-sm text-accent">{f.dept}</p>
                <p className="mt-2 text-xs text-muted-foreground">{f.qual}</p>
                <p className="text-xs text-muted-foreground">{f.exp} experience</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;
