import Navigation from "@/components/navigation";
import StoreSection from "@/components/store-section";

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <StoreSection />
      </div>
    </div>
  );
}
