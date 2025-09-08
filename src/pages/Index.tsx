import Hero from "@/components/Hero";
import Grandmasters from "./Grandmasters";
import Gallery from "./Gallery";

const Index = () => {
  return (
    <div className="bg-background">
      {/* Home / Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Grandmasters Section */}
      <section id="grandmasters" className="min-h-screen">
        <Grandmasters />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen">
        <Gallery />
      </section>
    </div>
  );
};

export default Index;
