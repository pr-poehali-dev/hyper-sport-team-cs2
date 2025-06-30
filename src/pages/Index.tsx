import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import StreamingSection from "@/components/StreamingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <TeamSection />
      <StreamingSection />
    </div>
  );
};

export default Index;
