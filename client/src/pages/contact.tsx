import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  );
}
