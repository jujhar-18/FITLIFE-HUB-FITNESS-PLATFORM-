import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainerCard from "@/components/TrainerCard";
import trainerMale from "@/assets/trainer-male-1.jpg";
import trainerFemale from "@/assets/trainer-female-1.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus Johnson",
      specialization: "Strength & Conditioning",
      experience: "8",
      bio: "Former professional athlete with expertise in building functional strength and athletic performance.",
      image: trainerMale,
    },
    {
      name: "Sarah Martinez",
      specialization: "Yoga & Mindfulness",
      experience: "6",
      bio: "Certified yoga instructor passionate about combining physical fitness with mental wellness.",
      image: trainerFemale,
    },
    {
      name: "David Chen",
      specialization: "HIIT & Cardio",
      experience: "5",
      bio: "High-energy trainer specializing in fat loss and cardiovascular conditioning programs.",
      image: trainerMale,
    },
    {
      name: "Emily Roberts",
      specialization: "Nutrition & Weight Loss",
      experience: "7",
      bio: "Registered dietitian and personal trainer helping clients achieve sustainable weight loss results.",
      image: trainerFemale,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Trainers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work with certified professionals dedicated to helping you achieve your fitness goals
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainers;
