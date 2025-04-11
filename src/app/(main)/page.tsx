import CTASection from "@/components/home/CTASection";
import FeatureSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="w-full px-5 md:px-10 max-w-[1400px] mx-auto">
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
