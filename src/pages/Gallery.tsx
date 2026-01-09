import Layout from "@/components/layout/Layout";
import { useState } from "react";

const images = [
  { src: "/images/gallery/computer-lab.jpg", category: "Labs", title: "Computer Lab" },
  { src: "/images/gallery/auditorium.jpg", category: "Infrastructure", title: "Auditorium" },
  { src: "/images/gallery/school-bus.jpg", category: "Transport", title: "School Transport" },
  { src: "/images/gallery/main-block.jpg", category: "Infrastructure", title: "Main Block" },
  { src: "/images/gallery/library.jpg", category: "Library", title: "Central Library" },
];

const categories = ["All", "Labs", "Infrastructure", "Transport", "Library"];

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
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "bg-primary text-white" : "bg-secondary text-white hover:bg-primary/10"}`}>{c}</button>
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
