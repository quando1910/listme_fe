import Image from "next/image";
import HeroSection from "@/shared/components/partials/home/HeroSection";
import CardGroupSection from "@/shared/components/partials/home/CardGroupSection";
import StepSection from "@/shared/components/partials/home/StepSection";
import CVSection from "@/shared/components/partials/home/CVSection";
import NewsSection from "@/shared/components/partials/home/NewsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardGroupSection />
      <StepSection />
      <CVSection />
      <NewsSection />
    </div>
  );
}
