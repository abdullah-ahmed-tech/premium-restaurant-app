/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type CartItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
  image: string;
  notes?: string;
  selectedOptions?: { id: string; label: string; price: number }[];
};

export type DeliveryMethod = "delivery" | "pickup" | "dinein";

export const initialCartItems: CartItem[] = [
  {
    id: "c1",
    name: "Spanish Latte",
    category: "Coffee",
    price: 95,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    selectedOptions: [
      { id: "o1", label: "Extra Shot", price: 20 },
      { id: "o2", label: "Oat Milk", price: 15 },
    ],
    notes: "Less ice please",
  },
  {
    id: "c2",
    name: "Molten Lava Cake",
    category: "Desserts",
    price: 125,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c3",
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 185,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    selectedOptions: [{ id: "o3", label: "Extra Cheese", price: 25 }],
  },
];

export const availableCoupons = [
  {
    code: "BREAK20",
    title: "20% OFF on breakfast combos",
  },
  {
    code: "SWEETFREE",
    title: "Buy 1 dessert, get 1 coffee free",
  },
];

export const deliveryFeeMap = {
  delivery: 35,
  pickup: 0,
  dinein: 0,
};

export const serviceFee = 12;
export const vatPercentage = 0.14;