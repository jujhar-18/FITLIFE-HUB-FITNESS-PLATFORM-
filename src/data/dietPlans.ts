export interface DietPlan {
  id: string;
  title: string;
  description: string;
  calories: string;
  goal: string;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
  meals: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  guidelines: string[];
}

export const dietPlans: DietPlan[] = [
  {
    id: "fat-loss",
    title: "Fat Loss Plan",
    description: "Scientifically designed calorie deficit plan to help you lose fat while preserving muscle",
    calories: "1800-2000 cal/day",
    goal: "Fat Loss",
    macros: {
      protein: "40%",
      carbs: "30%",
      fats: "30%",
    },
    meals: {
      breakfast: [
        "Greek yogurt with berries and almonds",
        "Egg white omelet with vegetables",
        "Protein smoothie with spinach and banana",
      ],
      lunch: [
        "Grilled chicken breast with quinoa and steamed broccoli",
        "Turkey and avocado wrap with mixed greens",
        "Salmon salad with olive oil dressing",
      ],
      dinner: [
        "Lean beef stir-fry with mixed vegetables",
        "Baked cod with sweet potato and asparagus",
        "Chicken breast with cauliflower rice and green beans",
      ],
      snacks: [
        "Apple with almond butter",
        "Protein shake",
        "Carrot sticks with hummus",
      ],
    },
    guidelines: [
      "Drink at least 8-10 glasses of water daily",
      "Eat protein with every meal",
      "Limit processed foods and added sugars",
      "Time your carbs around workouts",
      "Get 7-9 hours of sleep for optimal results",
    ],
  },
  {
    id: "muscle-gain",
    title: "Muscle Gain Plan",
    description: "High-protein, calorie-surplus plan designed to build lean muscle mass",
    calories: "2800-3200 cal/day",
    goal: "Muscle Gain",
    macros: {
      protein: "35%",
      carbs: "45%",
      fats: "20%",
    },
    meals: {
      breakfast: [
        "Oatmeal with protein powder, peanut butter, and banana",
        "Scrambled eggs with whole grain toast and avocado",
        "Protein pancakes with berries and Greek yogurt",
      ],
      lunch: [
        "Grilled chicken with brown rice and mixed vegetables",
        "Beef and quinoa bowl with black beans and salsa",
        "Tuna pasta with olive oil and vegetables",
      ],
      dinner: [
        "Salmon with sweet potato and roasted Brussels sprouts",
        "Turkey meatballs with whole wheat pasta and marinara",
        "Lean steak with baked potato and green beans",
      ],
      snacks: [
        "Protein shake with milk and banana",
        "Trail mix with nuts and dried fruit",
        "Cottage cheese with pineapple",
        "Rice cakes with peanut butter",
      ],
    },
    guidelines: [
      "Eat 5-6 meals throughout the day",
      "Consume 1g of protein per pound of body weight",
      "Don't skip post-workout nutrition",
      "Stay hydrated - aim for 1 gallon of water daily",
      "Be consistent with meal timing",
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian Plan",
    description: "Balanced plant-based nutrition for optimal health and fitness",
    calories: "2000-2200 cal/day",
    goal: "Balanced Nutrition",
    macros: {
      protein: "30%",
      carbs: "45%",
      fats: "25%",
    },
    meals: {
      breakfast: [
        "Tofu scramble with vegetables and whole grain toast",
        "Overnight oats with chia seeds, berries, and nuts",
        "Smoothie bowl with plant protein powder and granola",
      ],
      lunch: [
        "Chickpea and quinoa salad with tahini dressing",
        "Lentil soup with whole grain bread",
        "Buddha bowl with tempeh, brown rice, and vegetables",
      ],
      dinner: [
        "Black bean and sweet potato tacos",
        "Vegetable stir-fry with tofu and brown rice",
        "Eggplant parmesan with side salad",
      ],
      snacks: [
        "Hummus with vegetable sticks",
        "Mixed nuts and seeds",
        "Apple slices with almond butter",
      ],
    },
    guidelines: [
      "Ensure adequate B12 and iron intake",
      "Combine different protein sources",
      "Include omega-3 rich foods like flaxseeds and walnuts",
      "Eat a variety of colorful vegetables",
      "Consider supplementing with vitamin D",
    ],
  },
  {
    id: "keto",
    title: "Keto Plan",
    description: "Low-carb, high-fat diet for fat loss and metabolic health",
    calories: "1600-1800 cal/day",
    goal: "Fat Loss",
    macros: {
      protein: "25%",
      carbs: "5%",
      fats: "70%",
    },
    meals: {
      breakfast: [
        "Eggs cooked in butter with bacon and avocado",
        "Keto smoothie with coconut milk, MCT oil, and berries",
        "Cheese omelet with spinach and mushrooms",
      ],
      lunch: [
        "Caesar salad with grilled chicken (no croutons)",
        "Bunless burger with cheese, bacon, and side salad",
        "Tuna salad with mixed greens and olive oil",
      ],
      dinner: [
        "Grilled salmon with butter sauce and asparagus",
        "Steak with cauliflower mash and sautéed spinach",
        "Chicken thighs with zucchini noodles and pesto",
      ],
      snacks: [
        "Cheese cubes and pepperoni",
        "Macadamia nuts",
        "Celery with cream cheese",
      ],
    },
    guidelines: [
      "Stay under 20-50g net carbs daily",
      "Drink plenty of water and electrolytes",
      "Include MCT oil or coconut oil for energy",
      "Monitor ketone levels initially",
      "Increase sodium intake to prevent keto flu",
    ],
  },
];
