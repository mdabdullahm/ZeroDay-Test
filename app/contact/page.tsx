import ContactCTA from "@/components/contact/ContactCTA";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import HowCanWeHelp from "@/components/contact/HowCanWeHelp";
import PostContactProcess from "@/components/contact/PostContactProcess";
import PrivacySafetyNotice from "@/components/contact/PrivacySafetyNotice";
import ResponsibleDisclosure from "@/components/contact/ResponsibleDisclosure";
import SecureForm from "@/components/contact/SecureForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <ContactHero />
      {/* How Can We Help  section 2 */}
      <HowCanWeHelp/>
      {/* Secure Contact Form section 3 */}
      <SecureForm/>
      {/* Responsible Disclosure section 4 */}
      <ResponsibleDisclosure/>
      {/* Communication Nodes section 5 */}
      <ContactMethods/>
      {/* Post-Uplink Protocol section 6 */}
      <PostContactProcess/>
      {/* Legal & Privacy Safeguard section 7 */}
      <PrivacySafetyNotice/>
      {/* Universal FAQ section 8 */}
      <ContactFAQ/>
      {/* Final CTA section 9 */}
      <ContactCTA/>
    </div>
  );
}