import Layout from "@/components/layout/Layout";
import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop", category: "Campus", title: "Main Building" },
  { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop", category: "Library", title: "Central Library" },
  { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop", category: "Labs", title: "Computer Lab" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop", category: "Events", title: "Cultural Fest" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop", category: "Sports", title: "Gym Facility" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop", category: "Events", title: "Annual Day" },
  { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop", category: "Hostel", title: "Hostel Block" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop", category: "Labs", title: "Workshop" },
];

const categories = ["All", "Campus", "Labs", "Events", "Sports", "Library", "Hostel"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? images : images.filter((i) => i.category === filter);

  return (
    <Layout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-primary-foreground">Gallery</h1>
          <p className="mt-4 text-lg opacity-80">Explore our campus in pictures</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-primary/10"}`}>{c}</button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-xl">
                <img src={img.src} alt={img.title} className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
