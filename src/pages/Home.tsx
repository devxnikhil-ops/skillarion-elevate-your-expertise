import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/home/WhyUs";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import MOUComparison from "@/components/home/MOUComparison";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import FloatingCTA from "@/components/FloatingCTA";
import StandOut from "@/components/home/StandOut";

const Home = () => {
  return (
    <>
      <Hero />
      <StandOut />
      <Stats />
      <WhyUs />
      <FeaturedPrograms />
      <MOUComparison />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FloatingCTA />
    </>
  );
};

export default Home;
