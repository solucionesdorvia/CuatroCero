import Navigation from "@/components/navigation";
import PlansSection from "@/components/plans-section";

export default function Plans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <PlansSection />
      </div>
    </div>
  );
}
