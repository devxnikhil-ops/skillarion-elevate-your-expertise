import Services from "@/components/Services";
import TechnologyStack from "@/components/services/TechnologyStack";
import ProgramBenefits from "@/components/services/ProgramBenefits";
import Curriculum from "@/components/services/Curriculum";
import Eligibility from "@/components/services/Eligibility";
import FAQ from "@/components/services/FAQ";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Services />
      <TechnologyStack />
      <ProgramBenefits />
      <Curriculum />
      <Eligibility />
      <FAQ />
    </div>
  );
};

export default ServicesPage;
