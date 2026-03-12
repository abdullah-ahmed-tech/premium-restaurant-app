/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type MenuCategory = {
  id: string;
  label: string;
};

export type MenuItemOption = {
  id: string;
  label: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  calories?: number;
  options?: MenuItemOption[];
};

export const menuCategories: MenuCategory[] = [
  { id: "coffee", label: "Coffee" },
  { id: "desserts", label: "Desserts" },
  { id: "breakfast", label: "Breakfast" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Spanish Latte",
    description: "Creamy espresso-based latte with rich milk texture.",
    categoryId: "coffee",
    price: 95,
    rating: 4.8,
    reviewsCount: 214,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    isRecommended: true,
    calories: 210,
    options: [
      { id: "o1", label: "Extra Shot", price: 20 },
      { id: "o2", label: "Oat Milk", price: 15 },
    ],
  },
  {
    id: "m2",
    name: "Iced Caramel Macchiato",
    description: "Cold layered coffee with caramel drizzle and foam.",
    categoryId: "coffee",
    price: 110,
    rating: 4.7,
    reviewsCount: 187,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    calories: 240,
  },
  {
    id: "m3",
    name: "Molten Lava Cake",
    description: "Warm chocolate dessert served with soft center.",
    categoryId: "desserts",
    price: 125,
    rating: 4.9,
    reviewsCount: 274,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    isRecommended: true,
    calories: 390,
  },
  {
    id: "m4",
    name: "Chocolate Pancake",
    description: "Stacked fluffy pancakes topped with chocolate sauce.",
    categoryId: "breakfast",
    price: 140,
    rating: 4.9,
    reviewsCount: 312,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    calories: 430,
  },
  {
    id: "m5",
    name: "Classic Beef Burger",
    description: "Grilled beef patty with cheddar, lettuce, and sauce.",
    categoryId: "burgers",
    price: 185,
    rating: 4.7,
    reviewsCount: 168,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
    calories: 590,
    options: [
      { id: "o3", label: "Extra Cheese", price: 25 },
      { id: "o4", label: "Potato Bun", price: 15 },
    ],
  },
  {
    id: "m6",
    name: "Chicken Ranch Pizza",
    description: "Thin crust pizza with ranch sauce and grilled chicken.",
    categoryId: "pizza",
    price: 220,
    rating: 4.6,
    reviewsCount: 151,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    isRecommended: true,
    calories: 710,
  },
  {
    id: "m7",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice served chilled.",
    categoryId: "drinks",
    price: 70,
    rating: 4.7,
    reviewsCount: 98,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?q=80&w=1200&auto=format&fit=crop",
    calories: 120,
  },
  {
    id: "m8",
    name: "Vanilla Cheesecake",
    description: "Smooth cheesecake with vanilla notes and biscuit base.",
    categoryId: "desserts",
    price: 135,
    rating: 4.8,
    reviewsCount: 143,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
    calories: 410,
  },
];