import { Library, Wifi, Home, Dumbbell, Utensils, Bus } from "lucide-react";

const facilities = [
  {
    icon: Library,
    title: "Central Library",
    description: "Digital library with 50,000+ books, journals, and online resources",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&auto=format&fit=crop",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "High-speed internet connectivity across the entire campus",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop",
  },
  {
    icon: Home,
    title: "Hostel Facilities",
    description: "Separate hostels for boys and girls with modern amenities",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&auto=format&fit=crop",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities including gym and swimming pool",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop",
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description: "Hygienic food court serving nutritious meals at affordable prices",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&auto=format&fit=crop",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Fleet of buses covering major routes for day scholars",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Campus Life
          </span>
          <h2 className="heading-primary mb-4">World-Class Facilities</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our campus is equipped with modern facilities to ensure a comfortable 
            and enriching experience for all students.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group overflow-hidden rounded-xl bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <facility.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
