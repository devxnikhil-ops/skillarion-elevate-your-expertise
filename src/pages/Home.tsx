import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/home/WhyUs";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import FloatingCTA from "@/components/FloatingCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <FeaturedPrograms />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FloatingCTA />
    </>
  );
};

export default Home;
