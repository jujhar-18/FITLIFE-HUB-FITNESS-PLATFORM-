import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    advice: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters <= 0 || weightInKg <= 0) {
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    
    let category = "";
    let advice = "";
    
    if (bmi < 18.5) {
      category = "Underweight";
      advice = "Consider increasing your caloric intake and incorporating strength training to build healthy muscle mass. Consult with our nutritionists for a personalized meal plan.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      advice = "Great job! Maintain your healthy weight through regular exercise and balanced nutrition. Keep up the excellent work!";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      advice = "Focus on a combination of cardio and strength training, along with a calorie-controlled diet. Our fat loss programs can help you achieve a healthy weight.";
    } else {
      category = "Obese";
      advice = "We recommend working with our professional trainers and nutritionists to create a safe, effective weight loss plan tailored to your needs. Small, consistent changes make a big difference!";
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, advice });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-blue-500";
      case "Normal Weight":
        return "text-primary";
      case "Overweight":
        return "text-yellow-500";
      case "Obese":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Calculator className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            BMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your Body Mass Index and get personalized health recommendations
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Calculate Your BMI</CardTitle>
                <CardDescription>
                  Enter your height and weight to calculate your Body Mass Index
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={calculateBMI} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="e.g., 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      min="1"
                      step="0.1"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g., 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      min="1"
                      step="0.1"
                      className="bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Calculate BMI
                  </Button>
                </form>

                {result && (
                  <div className="mt-8 p-6 bg-muted/50 rounded-lg space-y-4 animate-fade-in">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                      <p className="text-5xl font-bold text-foreground">{result.bmi}</p>
                      <p className={`text-xl font-semibold mt-2 ${getCategoryColor(result.category)}`}>
                        {result.category}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-2">Personalized Advice</h3>
                      <p className="text-muted-foreground">{result.advice}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* BMI Reference Chart */}
            <Card className="mt-8 bg-card">
              <CardHeader>
                <CardTitle>BMI Reference Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
                    <span className="text-sm font-medium text-foreground">Underweight</span>
                    <span className="text-sm text-muted-foreground">BMI &lt; 18.5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm font-medium text-foreground">Normal Weight</span>
                    <span className="text-sm text-muted-foreground">BMI 18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
                    <span className="text-sm font-medium text-foreground">Overweight</span>
                    <span className="text-sm text-muted-foreground">BMI 25 - 29.9</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                    <span className="text-sm font-medium text-foreground">Obese</span>
                    <span className="text-sm text-muted-foreground">BMI ≥ 30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BMICalculator;
