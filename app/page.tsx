import Hero from "@/components/Hero";
import HeroSplit from "@/components/HeroSplit";
import FeaturesBento from "@/components/FeaturesBento";
import AudioSection from "@/components/AudioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-white text-[#202124] selection:bg-[#e8f0fe] selection:text-[#1a73e8] font-sans overflow-hidden">
        <main>
          <Hero />
          <HeroSplit />
          <FeaturesBento />
          <AudioSection />
        </main>
        <Footer />
      </div>
  );
}