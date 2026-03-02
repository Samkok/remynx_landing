import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Transformation from "@/components/sections/Transformation";
import Countdown from "@/components/sections/Countdown";
import Features from "@/components/sections/Features";
import TargetAudience from "@/components/sections/TargetAudience";
import Screenshots from "@/components/sections/Screenshots";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Transformation />
      <Countdown />
      <Features />
      <TargetAudience />
      <Screenshots />
      <FinalCTA />
    </>
  );
}
