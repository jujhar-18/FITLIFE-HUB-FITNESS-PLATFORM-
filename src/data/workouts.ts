import workoutWeights from "@/assets/workout-weights.jpg";
import workoutCardio from "@/assets/workout-cardio.jpg";
import workoutYoga from "@/assets/workout-yoga.jpg";
import workoutHiit from "@/assets/workout-hiit.jpg";

export interface Workout {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  equipment: string[];
  steps: string[];
  benefits: string[];
}

export const workouts: Workout[] = [
  {
    id: "weight-training",
    title: "Weight Training",
    description: "Build strength and muscle with comprehensive resistance training",
    duration: "45-60 min",
    difficulty: "Intermediate",
    image: workoutWeights,
    equipment: ["Dumbbells", "Barbells", "Bench", "Weight Plates"],
    steps: [
      "Start with a 5-minute dynamic warm-up",
      "Perform compound exercises: Squats (4 sets x 8-12 reps)",
      "Bench Press: 4 sets x 8-12 reps",
      "Deadlifts: 3 sets x 6-10 reps",
      "Overhead Press: 3 sets x 8-12 reps",
      "Accessory work: Bicep Curls and Tricep Extensions (3 sets each)",
      "Cool down with stretching for 5-10 minutes",
    ],
    benefits: [
      "Increases muscle mass and strength",
      "Boosts metabolism and burns calories",
      "Improves bone density",
      "Enhances overall functional fitness",
    ],
  },
  {
    id: "cardio-blast",
    title: "Cardio Blast",
    description: "High-energy cardiovascular workout to burn calories and improve endurance",
    duration: "30-45 min",
    difficulty: "Beginner",
    image: workoutCardio,
    equipment: ["Treadmill", "Bike", "Jump Rope"],
    steps: [
      "Warm up with light jogging for 5 minutes",
      "Interval training: 2 minutes high intensity, 1 minute recovery (repeat 8 times)",
      "Steady state cardio for 10 minutes at moderate intensity",
      "Hill sprints or incline work for 5 minutes",
      "Cool down with walking and dynamic stretching",
    ],
    benefits: [
      "Improves cardiovascular health",
      "Burns maximum calories",
      "Increases stamina and endurance",
      "Reduces stress and improves mood",
    ],
  },
  {
    id: "yoga-flow",
    title: "Yoga Flow",
    description: "Mindful practice combining flexibility, balance, and inner peace",
    duration: "60 min",
    difficulty: "Beginner",
    image: workoutYoga,
    equipment: ["Yoga Mat", "Blocks (optional)", "Strap (optional)"],
    steps: [
      "Begin with centering and breathing exercises (5 minutes)",
      "Sun Salutation sequence (5 rounds)",
      "Standing poses: Warrior I, II, and Triangle pose",
      "Balance poses: Tree pose and Eagle pose",
      "Seated forward folds and twists",
      "Hip openers and gentle backbends",
      "Final relaxation in Savasana (10 minutes)",
    ],
    benefits: [
      "Increases flexibility and range of motion",
      "Reduces stress and anxiety",
      "Improves balance and posture",
      "Enhances mind-body connection",
    ],
  },
  {
    id: "hiit-workout",
    title: "HIIT Workout",
    description: "Intense interval training for maximum fat burn in minimum time",
    duration: "20-30 min",
    difficulty: "Advanced",
    image: workoutHiit,
    equipment: ["Bodyweight", "Mat", "Optional: Light Dumbbells"],
    steps: [
      "Warm up with jumping jacks and dynamic stretches (5 minutes)",
      "Circuit 1: Burpees (30 sec), Rest (15 sec) - repeat 4 times",
      "Circuit 2: Mountain Climbers (30 sec), Rest (15 sec) - repeat 4 times",
      "Circuit 3: Jump Squats (30 sec), Rest (15 sec) - repeat 4 times",
      "Circuit 4: High Knees (30 sec), Rest (15 sec) - repeat 4 times",
      "Finisher: 2-minute plank hold",
      "Cool down with stretching (5 minutes)",
    ],
    benefits: [
      "Maximum calorie burn in minimal time",
      "Boosts metabolism for hours after workout",
      "Improves cardiovascular fitness",
      "Can be done anywhere with no equipment",
    ],
  },
];
