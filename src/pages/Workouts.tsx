import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

const Workouts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Workout Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our expert-designed workouts to match your fitness level and goals
          </p>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} {...workout} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workouts;
