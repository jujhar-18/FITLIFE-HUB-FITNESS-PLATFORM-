import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DietCard from "@/components/DietCard";
import { dietPlans } from "@/data/dietPlans";

const DietPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nutrition Plans for Every Goal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Science-backed meal plans designed to fuel your workouts and achieve your fitness objectives
          </p>
        </div>
      </section>

      {/* Diet Plans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dietPlans.map((plan) => (
              <DietCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DietPlans;
