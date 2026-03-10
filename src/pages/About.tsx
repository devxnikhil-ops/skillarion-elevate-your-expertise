import About from "@/components/About";
import Vision from "@/components/about/Vision";
import OurValues from "@/components/about/OurValues";
import Team from "@/components/about/Team";
import Achievements from "@/components/about/Achievements";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <About />
      <Vision />
      <OurValues />
      <Team />
      <Achievements />
    </div>
  );
};

export default AboutPage;
