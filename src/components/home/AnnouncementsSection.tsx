import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Bell } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Admissions Open for B.Tech 2025-26",
    date: "January 5, 2025",
    category: "Admissions",
    isNew: true,
    description: "Applications are now being accepted for all engineering programs. Apply before March 31, 2025.",
  },
  {
    id: 2,
    title: "Annual Technical Fest 'TechnoVerse 2025'",
    date: "February 15-17, 2025",
    category: "Events",
    isNew: true,
    description: "Join us for three days of innovation, competitions, and workshops featuring industry experts.",
  },
  {
    id: 3,
    title: "Campus Placement Drive by TCS",
    date: "January 20, 2025",
    category: "Placements",
    isNew: false,
    description: "TCS will conduct on-campus recruitment for 2025 batch students. Register by January 15.",
  },
  {
    id: 4,
    title: "Workshop on AI & Machine Learning",
    date: "January 25, 2025",
    category: "Workshop",
    isNew: false,
    description: "A hands-on workshop on practical applications of AI/ML in industry. Open to all students.",
  },
];

const AnnouncementsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Stay Updated
            </span>
            <h2 className="heading-secondary">Latest Announcements</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/news-events">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {announcements.map((item) => (
            <Card key={item.id} className="group transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant={item.isNew ? "default" : "secondary"} className={item.isNew ? "bg-accent text-accent-foreground" : ""}>
                    {item.category}
                  </Badge>
                  {item.isNew && (
                    <Badge variant="outline" className="border-accent text-accent">
                      <Bell className="mr-1 h-3 w-3" />
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
