/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary product details data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type ProductOption = {
  id: string;
  label: string;
  price: number;
};

export type ProductReviewPreview = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
};

export type ProductDetails = {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  calories: number;
  prepTime: string;
  ingredients: string[];
  options: ProductOption[];
  reviews: ProductReviewPreview[];
  isPopular?: boolean;
  isRecommended?: boolean;
};

export const productDetailsMap: Record<string, ProductDetails> = {
  "101": {
    id: "101",
    name: "Spanish Latte",
    category: "Coffee",
    description: "Creamy espresso-based latte with rich milk texture.",
    longDescription:
      "A smooth signature coffee crafted with balanced espresso, silky milk, and a lightly sweet finish. Ideal for users who prefer a premium coffee experience with a soft, rich body.",
    price: 95,
    rating: 4.8,
    reviewsCount: 214,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    calories: 210,
    prepTime: "8 - 12 min",
    ingredients: ["Espresso", "Milk", "Sweet Cream", "Foamed Milk"],
    options: [
      { id: "op1", label: "Extra Shot", price: 20 },
      { id: "op2", label: "Oat Milk", price: 15 },
      { id: "op3", label: "Large Size", price: 25 },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Mariam A.",
        rating: 5,
        comment: "Excellent texture and very balanced flavor.",
        date: "12 Mar 2026",
      },
      {
        id: "r2",
        userName: "Omar K.",
        rating: 4,
        comment: "Very good coffee, especially with extra shot.",
        date: "10 Mar 2026",
      },
    ],
    isPopular: true,
  },

  "102": {
    id: "102",
    name: "Classic Beef Burger",
    category: "Burgers",
    description: "Grilled beef burger with cheddar, lettuce, and signature sauce.",
    longDescription:
      "Premium grilled beef patty served in a soft bun with cheddar cheese, fresh lettuce, tomato, and a house-made burger sauce. A strong main-course option for lunch and dinner.",
    price: 185,
    rating: 4.7,
    reviewsCount: 168,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    calories: 590,
    prepTime: "12 - 18 min",
    ingredients: ["Beef Patty", "Cheddar", "Lettuce", "Tomato", "Burger Sauce"],
    options: [
      { id: "op4", label: "Extra Cheese", price: 25 },
      { id: "op5", label: "Potato Bun", price: 15 },
      { id: "op6", label: "Fries Combo", price: 45 },
    ],
    reviews: [
      {
        id: "r3",
        userName: "Sarah M.",
        rating: 5,
        comment: "Juicy burger and very premium packaging.",
        date: "11 Mar 2026",
      },
      {
        id: "r4",
        userName: "Hassan T.",
        rating: 4,
        comment: "Good taste and generous portion size.",
        date: "09 Mar 2026",
      },
    ],
    isRecommended: true,
  },

  "103": {
    id: "103",
    name: "Chocolate Pancake",
    category: "Breakfast",
    description: "Fluffy pancakes topped with chocolate sauce.",
    longDescription:
      "A comforting breakfast plate with warm fluffy pancakes finished with rich chocolate drizzle. Suitable for breakfast lovers and dessert-oriented users alike.",
    price: 140,
    rating: 4.9,
    reviewsCount: 312,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    calories: 430,
    prepTime: "10 - 15 min",
    ingredients: ["Pancake Batter", "Chocolate Sauce", "Butter", "Cream"],
    options: [
      { id: "op7", label: "Extra Chocolate", price: 20 },
      { id: "op8", label: "Add Fruits", price: 25 },
    ],
    reviews: [
      {
        id: "r5",
        userName: "Nour E.",
        rating: 5,
        comment: "One of the best breakfast desserts on the menu.",
        date: "12 Mar 2026",
      },
    ],
    isPopular: true,
  },

  "201": {
    id: "201",
    name: "Iced Caramel Macchiato",
    category: "Coffee",
    description: "Cold layered coffee with caramel drizzle and foam.",
    longDescription:
      "A refreshing layered iced coffee with espresso, milk, caramel syrup, and light foam. Great for users who prefer cold premium coffee options.",
    price: 110,
    rating: 4.8,
    reviewsCount: 187,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    calories: 240,
    prepTime: "7 - 10 min",
    ingredients: ["Espresso", "Milk", "Caramel", "Ice", "Foam"],
    options: [
      { id: "op9", label: "Extra Caramel", price: 15 },
      { id: "op10", label: "Oat Milk", price: 15 },
    ],
    reviews: [
      {
        id: "r6",
        userName: "Dina F.",
        rating: 5,
        comment: "Perfect for hot days and tastes premium.",
        date: "08 Mar 2026",
      },
    ],
    isPopular: true,
  },

  "202": {
    id: "202",
    name: "Molten Lava Cake",
    category: "Desserts",
    description: "Warm chocolate dessert with a soft molten center.",
    longDescription:
      "A signature chocolate dessert served warm with a gooey center and rich cocoa flavor. One of the strongest dessert items visually and in user appeal.",
    price: 125,
    rating: 4.9,
    reviewsCount: 274,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    calories: 390,
    prepTime: "9 - 14 min",
    ingredients: ["Dark Chocolate", "Butter", "Cocoa", "Cream", "Sugar"],
    options: [
      { id: "op11", label: "Vanilla Ice Cream", price: 30 },
      { id: "op12", label: "Extra Chocolate Sauce", price: 15 },
    ],
    reviews: [
      {
        id: "r7",
        userName: "Layla S.",
        rating: 5,
        comment: "Outstanding dessert and highly recommended.",
        date: "12 Mar 2026",
      },
    ],
    isPopular: true,
  },

  "203": {
    id: "203",
    name: "Chicken Ranch Pizza",
    category: "Pizza",
    description: "Thin crust pizza with ranch sauce and grilled chicken.",
    longDescription:
      "A savory pizza built on thin crust with creamy ranch sauce, grilled chicken, and a premium baked finish. Works very well as a sharing item.",
    price: 220,
    rating: 4.6,
    reviewsCount: 151,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    calories: 710,
    prepTime: "15 - 22 min",
    ingredients: ["Pizza Dough", "Ranch Sauce", "Chicken", "Mozzarella"],
    options: [
      { id: "op13", label: "Extra Mozzarella", price: 30 },
      { id: "op14", label: "Large Size", price: 50 },
    ],
    reviews: [
      {
        id: "r8",
        userName: "Youssef R.",
        rating: 4,
        comment: "Good flavor and nice balance in the sauce.",
        date: "07 Mar 2026",
      },
    ],
  },

  "204": {
    id: "204",
    name: "Fresh Orange Juice",
    category: "Drinks",
    description: "Freshly squeezed orange juice served chilled.",
    longDescription:
      "A clean, refreshing juice option prepared from fresh oranges and served cold. A lighter beverage choice for health-conscious customers.",
    price: 70,
    rating: 4.7,
    reviewsCount: 98,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?q=80&w=1200&auto=format&fit=crop",
    calories: 120,
    prepTime: "5 - 7 min",
    ingredients: ["Fresh Orange", "Ice"],
    options: [{ id: "op15", label: "Large Size", price: 15 }],
    reviews: [
      {
        id: "r9",
        userName: "Reem H.",
        rating: 5,
        comment: "Very fresh and clean taste.",
        date: "06 Mar 2026",
      },
    ],
  },

  m1: {
    id: "m1",
    name: "Spanish Latte",
    category: "Coffee",
    description: "Creamy espresso-based latte with rich milk texture.",
    longDescription:
      "A smooth signature coffee crafted with balanced espresso, silky milk, and a lightly sweet finish. Ideal for users who prefer a premium coffee experience with a soft, rich body.",
    price: 95,
    rating: 4.8,
    reviewsCount: 214,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    calories: 210,
    prepTime: "8 - 12 min",
    ingredients: ["Espresso", "Milk", "Sweet Cream", "Foamed Milk"],
    options: [
      { id: "op1", label: "Extra Shot", price: 20 },
      { id: "op2", label: "Oat Milk", price: 15 },
      { id: "op3", label: "Large Size", price: 25 },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Mariam A.",
        rating: 5,
        comment: "Excellent texture and very balanced flavor.",
        date: "12 Mar 2026",
      },
    ],
    isPopular: true,
  },

  m2: {
    id: "m2",
    name: "Iced Caramel Macchiato",
    category: "Coffee",
    description: "Cold layered coffee with caramel drizzle and foam.",
    longDescription:
      "A refreshing layered iced coffee with espresso, milk, caramel syrup, and light foam. Great for users who prefer cold premium coffee options.",
    price: 110,
    rating: 4.7,
    reviewsCount: 187,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    calories: 240,
    prepTime: "7 - 10 min",
    ingredients: ["Espresso", "Milk", "Caramel", "Ice", "Foam"],
    options: [
      { id: "op9", label: "Extra Caramel", price: 15 },
      { id: "op10", label: "Oat Milk", price: 15 },
    ],
    reviews: [
      {
        id: "r6",
        userName: "Dina F.",
        rating: 5,
        comment: "Perfect for hot days and tastes premium.",
        date: "08 Mar 2026",
      },
    ],
    isPopular: true,
  },

  m3: {
    id: "m3",
    name: "Molten Lava Cake",
    category: "Desserts",
    description: "Warm chocolate dessert served with soft center.",
    longDescription:
      "A signature chocolate dessert served warm with a gooey center and rich cocoa flavor. One of the strongest dessert items visually and in user appeal.",
    price: 125,
    rating: 4.9,
    reviewsCount: 274,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    calories: 390,
    prepTime: "9 - 14 min",
    ingredients: ["Dark Chocolate", "Butter", "Cocoa", "Cream", "Sugar"],
    options: [
      { id: "op11", label: "Vanilla Ice Cream", price: 30 },
      { id: "op12", label: "Extra Chocolate Sauce", price: 15 },
    ],
    reviews: [
      {
        id: "r7",
        userName: "Layla S.",
        rating: 5,
        comment: "Outstanding dessert and highly recommended.",
        date: "12 Mar 2026",
      },
    ],
    isRecommended: true,
  },

  m4: {
    id: "m4",
    name: "Chocolate Pancake",
    category: "Breakfast",
    description: "Stacked fluffy pancakes topped with chocolate sauce.",
    longDescription:
      "A comforting breakfast plate with warm fluffy pancakes finished with rich chocolate drizzle. Suitable for breakfast lovers and dessert-oriented users alike.",
    price: 140,
    rating: 4.9,
    reviewsCount: 312,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    calories: 430,
    prepTime: "10 - 15 min",
    ingredients: ["Pancake Batter", "Chocolate Sauce", "Butter", "Cream"],
    options: [
      { id: "op7", label: "Extra Chocolate", price: 20 },
      { id: "op8", label: "Add Fruits", price: 25 },
    ],
    reviews: [
      {
        id: "r5",
        userName: "Nour E.",
        rating: 5,
        comment: "One of the best breakfast desserts on the menu.",
        date: "12 Mar 2026",
      },
    ],
  },

  m5: {
    id: "m5",
    name: "Classic Beef Burger",
    category: "Burgers",
    description: "Grilled beef patty with cheddar, lettuce, and sauce.",
    longDescription:
      "Premium grilled beef patty served in a soft bun with cheddar cheese, fresh lettuce, tomato, and a house-made burger sauce. A strong main-course option for lunch and dinner.",
    price: 185,
    rating: 4.7,
    reviewsCount: 168,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    calories: 590,
    prepTime: "12 - 18 min",
    ingredients: ["Beef Patty", "Cheddar", "Lettuce", "Tomato", "Burger Sauce"],
    options: [
      { id: "op4", label: "Extra Cheese", price: 25 },
      { id: "op5", label: "Potato Bun", price: 15 },
      { id: "op6", label: "Fries Combo", price: 45 },
    ],
    reviews: [
      {
        id: "r3",
        userName: "Sarah M.",
        rating: 5,
        comment: "Juicy burger and very premium packaging.",
        date: "11 Mar 2026",
      },
    ],
    isPopular: true,
  },

  m6: {
    id: "m6",
    name: "Chicken Ranch Pizza",
    category: "Pizza",
    description: "Thin crust pizza with ranch sauce and grilled chicken.",
    longDescription:
      "A savory pizza built on thin crust with creamy ranch sauce, grilled chicken, and a premium baked finish. Works very well as a sharing item.",
    price: 220,
    rating: 4.6,
    reviewsCount: 151,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    calories: 710,
    prepTime: "15 - 22 min",
    ingredients: ["Pizza Dough", "Ranch Sauce", "Chicken", "Mozzarella"],
    options: [
      { id: "op13", label: "Extra Mozzarella", price: 30 },
      { id: "op14", label: "Large Size", price: 50 },
    ],
    reviews: [
      {
        id: "r8",
        userName: "Youssef R.",
        rating: 4,
        comment: "Good flavor and nice balance in the sauce.",
        date: "07 Mar 2026",
      },
    ],
    isRecommended: true,
  },

  m7: {
    id: "m7",
    name: "Fresh Orange Juice",
    category: "Drinks",
    description: "Freshly squeezed orange juice served chilled.",
    longDescription:
      "A clean, refreshing juice option prepared from fresh oranges and served cold. A lighter beverage choice for health-conscious customers.",
    price: 70,
    rating: 4.7,
    reviewsCount: 98,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?q=80&w=1200&auto=format&fit=crop",
    calories: 120,
    prepTime: "5 - 7 min",
    ingredients: ["Fresh Orange", "Ice"],
    options: [{ id: "op15", label: "Large Size", price: 15 }],
    reviews: [
      {
        id: "r9",
        userName: "Reem H.",
        rating: 5,
        comment: "Very fresh and clean taste.",
        date: "06 Mar 2026",
      },
    ],
    isRecommended: true,
  },

  m8: {
    id: "m8",
    name: "Vanilla Cheesecake",
    category: "Desserts",
    description: "Smooth cheesecake with vanilla notes and biscuit base.",
    longDescription:
      "A smooth dessert option with creamy vanilla flavor and soft biscuit base. A premium café dessert suitable for dine-in and delivery.",
    price: 135,
    rating: 4.8,
    reviewsCount: 143,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
    calories: 410,
    prepTime: "6 - 9 min",
    ingredients: ["Cream Cheese", "Vanilla", "Biscuit Base", "Cream"],
    options: [{ id: "op16", label: "Extra Sauce", price: 15 }],
    reviews: [
      {
        id: "r10",
        userName: "Nadine P.",
        rating: 5,
        comment: "Soft texture and elegant presentation.",
        date: "05 Mar 2026",
      },
    ],
  },
};