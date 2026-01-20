import Partners from "@/components/Partners";
import PartnershipBenefits from "@/components/partners/PartnershipBenefits";
import IndustryDomains from "@/components/partners/IndustryDomains";
import PartnershipProcess from "@/components/partners/PartnershipProcess";
import PartnerTestimonials from "@/components/partners/PartnerTestimonials";
import BecomePartner from "@/components/partners/BecomePartner";

const PartnersPage = () => {
  return (
    <div className="min-h-screen">
      <Partners />
      <PartnershipBenefits />
      <IndustryDomains />
      <PartnershipProcess />
      <PartnerTestimonials />
      <BecomePartner />
    </div>
  );
};

export default PartnersPage;
