import About from "@/components/About";
import OurStory from "@/components/about/OurStory";
import Vision from "@/components/about/Vision";
import OurValues from "@/components/about/OurValues";
import Team from "@/components/about/Team";
import Achievements from "@/components/about/Achievements";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <About />
      <Vision />
      <OurStory />
      <OurValues />
      <Team />
      <Achievements />
    </div>
  );
};

export default AboutPage;
