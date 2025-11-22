import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, CheckCircle2 } from "lucide-react";
import { dietPlans } from "@/data/dietPlans";

const DietPlanDetail = () => {
  const { id } = useParams();
  const plan = dietPlans.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Diet Plan Not Found</h1>
          <Button asChild>
            <Link to="/diet-plans">Back to Diet Plans</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/diet-plans">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Diet Plans
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {plan.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {plan.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="px-4 py-2 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">Daily Calories: </span>
              <span className="font-semibold text-foreground">{plan.calories}</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg border border-border flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Goal: </span>
              <span className="font-semibold text-primary">{plan.goal}</span>
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
                  <CardTitle>Macro Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-3xl font-bold text-primary">{plan.macros.protein}</p>
                      <p className="text-sm text-muted-foreground mt-1">Protein</p>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-3xl font-bold text-primary">{plan.macros.carbs}</p>
                      <p className="text-sm text-muted-foreground mt-1">Carbs</p>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-3xl font-bold text-primary">{plan.macros.fats}</p>
                      <p className="text-sm text-muted-foreground mt-1">Fats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Sample Meals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Breakfast</h3>
                    <ul className="space-y-2">
                      {plan.meals.breakfast.map((meal, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Lunch</h3>
                    <ul className="space-y-2">
                      {plan.meals.lunch.map((meal, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Dinner</h3>
                    <ul className="space-y-2">
                      {plan.meals.dinner.map((meal, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Snacks</h3>
                    <ul className="space-y-2">
                      {plan.meals.snacks.map((meal, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-card border-primary/50">
                <CardHeader>
                  <CardTitle>Get Personalized Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Work with our nutrition experts to create a customized meal plan tailored to your specific needs and preferences.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/membership">View Membership Plans</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Have questions about nutrition or need advice on meal planning? Our team is here to help!
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact Us</Link>
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

export default DietPlanDetail;
