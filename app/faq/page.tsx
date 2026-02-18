import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <FAQHero />
      <FAQList />
    </div>
  );
}