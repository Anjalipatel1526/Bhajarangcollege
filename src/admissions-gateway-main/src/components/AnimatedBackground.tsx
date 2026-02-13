import campusBg1 from "@gateway/assets/campus-bg-1.jpg";
import campusBg2 from "@gateway/assets/campus-bg-2.jpg";
import campusBg3 from "@gateway/assets/campus-bg-3.jpg";

const images = [campusBg1, campusBg2, campusBg3];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            animation: `bgCrossfade${i === 0 ? "" : i + 1} 18s infinite`,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsla(220,55%,8%,0.75) 0%, hsla(220,50%,12%,0.65) 50%, hsla(220,55%,8%,0.8) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
