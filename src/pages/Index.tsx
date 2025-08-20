import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
