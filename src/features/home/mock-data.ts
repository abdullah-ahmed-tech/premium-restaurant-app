/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type HomeCategory = {
  id: string;
  name: string;
  icon: string;
};

export type HomeProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
};

export type HomePromo = {
  id: string;
  title: string;
  subtitle: string;
  code: string;
};

export const homeCategories: HomeCategory[] = [
  { id: "1", name: "Coffee", icon: "cafe-outline" },
  { id: "2", name: "Desserts", icon: "ice-cream-outline" },
  { id: "3", name: "Breakfast", icon: "restaurant-outline" },
  { id: "4", name: "Burgers", icon: "fast-food-outline" },
  { id: "5", name: "Pizza", icon: "pizza-outline" },
  { id: "6", name: "Drinks", icon: "wine-outline" },
];

export const featuredProducts: HomeProduct[] = [
  {
    id: "101",
    name: "Spanish Latte",
    category: "Coffee",
    price: 95,
    rating: 4.8,
    reviewsCount: 214,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: "102",
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 185,
    rating: 4.7,
    reviewsCount: 168,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "103",
    name: "Chocolate Pancake",
    category: "Breakfast",
    price: 140,
    rating: 4.9,
    reviewsCount: 312,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    isNew: true,
  },
];

export const popularProducts: HomeProduct[] = [
  {
    id: "201",
    name: "Iced Caramel Macchiato",
    category: "Coffee",
    price: 110,
    rating: 4.8,
    reviewsCount: 187,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: "202",
    name: "Molten Lava Cake",
    category: "Desserts",
    price: 125,
    rating: 4.9,
    reviewsCount: 274,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "203",
    name: "Chicken Ranch Pizza",
    category: "Pizza",
    price: 220,
    rating: 4.6,
    reviewsCount: 151,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "204",
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 70,
    rating: 4.7,
    reviewsCount: 98,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?q=80&w=1200&auto=format&fit=crop",
    isNew: true,
  },
];

export const promoOffers: HomePromo[] = [
  {
    id: "p1",
    title: "20% OFF on breakfast combos",
    subtitle: "Available daily from 8 AM to 12 PM",
    code: "BREAK20",
  },
  {
    id: "p2",
    title: "Buy 1 dessert, get 1 coffee free",
    subtitle: "Valid on selected items this week",
    code: "SWEETFREE",
  },
];

export const loyaltySummary = {
  points: 245,
  nextRewardAt: 300,
};

export const restaurantQuickInfo = {
  name: "Brew & Bite Cafe",
  openHours: "Open today • 9:00 AM - 12:00 AM",
  deliveryTime: "25 - 35 min",
  rating: 4.8,
  reviews: "2.4k+ reviews",
};