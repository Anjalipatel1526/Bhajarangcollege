import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const news = [
  { title: "Admissions Open 2025-26", date: "Jan 5, 2025", category: "Admissions", desc: "Applications now being accepted for all B.Tech programs." },
  { title: "TechnoVerse 2025", date: "Feb 15-17, 2025", category: "Events", desc: "Annual technical fest featuring competitions and workshops." },
  { title: "TCS Campus Drive", date: "Jan 20, 2025", category: "Placements", desc: "On-campus recruitment for 2025 batch students." },
  { title: "AI/ML Workshop", date: "Jan 25, 2025", category: "Workshop", desc: "Hands-on workshop on practical AI applications." },
  { title: "Sports Day 2025", date: "Feb 5, 2025", category: "Events", desc: "Annual sports meet with inter-department competitions." },
  { title: "Industry Visit to L&T", date: "Feb 10, 2025", category: "Academic", desc: "Educational visit for Mechanical Engineering students." },
];

const NewsEvents = () => (
  <Layout>
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="heading-primary text-primary-foreground">News & Events</h1>
        <p className="mt-4 text-lg opacity-80">Stay updated with campus activities</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Card key={n.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-accent text-accent-foreground">{n.category}</Badge>
                <CardTitle className="text-lg">{n.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{n.desc}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" />{n.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default NewsEvents;
