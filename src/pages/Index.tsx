import Hero from "@/components/Hero";
import Grandmasters from "./Grandmasters";
import Events from "./Events";

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

      {/* Events Section */}
      <section id="events" className="min-h-screen">
        <Events />
      </section>
    </div>
  );
};

export default Index;
