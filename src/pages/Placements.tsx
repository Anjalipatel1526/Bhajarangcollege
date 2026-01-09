import Layout from "@/components/layout/Layout";
import { TrendingUp, Users, Building, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "₹24 LPA", label: "Highest Package" },
  { icon: TrendingUp, value: "₹6.5 LPA", label: "Average Package" },
  { icon: Users, value: "95%", label: "Placement Rate" },
  { icon: Building, value: "200+", label: "Companies" },
];

const companies = ["TCS", "Infosys", "Wipro", "Cognizant", "Capgemini", "HCL", "Tech Mahindra", "L&T", "Accenture", "IBM", "Microsoft", "Amazon", "Google", "Deloitte", "Oracle", "SAP"];

const Placements = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">Placements</h1>
        <p className="mt-4 text-lg opacity-80">Exceptional career opportunities</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-secondary p-6 text-center">
              <s.icon className="mx-auto mb-2 h-8 w-8 text-accent" />
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="heading-secondary mb-8 text-center">Our Recruiters</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((c) => (
            <div key={c} className="flex h-16 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">{c}</div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Placements;
