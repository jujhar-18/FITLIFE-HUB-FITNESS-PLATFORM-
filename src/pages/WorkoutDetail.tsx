import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import { workouts } from "@/data/workouts";

const WorkoutDetail = () => {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Workout Not Found</h1>
          <Button asChild>
            <Link to="/workouts">Back to Workouts</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/workouts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Workouts
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {workout.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-foreground">
              <span className="flex items-center gap-2 px-4 py-2 bg-card/80 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                {workout.duration}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card/80 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                {workout.difficulty}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>About This Workout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{workout.description}</p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Workout Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {workout.steps.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <p className="text-muted-foreground flex-1 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {workout.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Equipment Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {workout.equipment.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/50">
                <CardHeader>
                  <CardTitle>Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join FitLife Hub to access this workout and hundreds more with personalized guidance.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/membership">View Membership Plans</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkoutDetail;
