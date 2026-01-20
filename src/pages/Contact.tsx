import Contact from "@/components/Contact";
import QuickContact from "@/components/contact/QuickContact";
import OfficeHours from "@/components/contact/OfficeHours";
import LocationMap from "@/components/contact/LocationMap";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Contact />
      <QuickContact />
      <OfficeHours />
      <LocationMap />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
