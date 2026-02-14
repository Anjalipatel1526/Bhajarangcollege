const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/about-main.jpg)`,
        }}
      />
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
