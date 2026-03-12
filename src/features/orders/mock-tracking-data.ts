/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type TrackingStepStatus = "completed" | "current" | "upcoming";

export type TrackingStep = {
  id: string;
  title: string;
  subtitle: string;
  status: TrackingStepStatus;
  time: string;
};

export const activeOrderTracking = {
  orderNumber: "#BB-1042",
  statusLabel: "On The Way",
  estimatedArrival: "15 - 20 min",
  placedAt: "12 Mar 2026 • 8:10 PM",
  paymentMethod: "Paid Online",
  orderType: "Delivery",
  address: "12 Nile Street, Downtown, Cairo",
};

export const trackingSteps: TrackingStep[] = [
  {
    id: "s1",
    title: "Order Confirmed",
    subtitle: "Your order has been received successfully.",
    status: "completed",
    time: "8:10 PM",
  },
  {
    id: "s2",
    title: "Preparing",
    subtitle: "The kitchen is preparing your items.",
    status: "completed",
    time: "8:14 PM",
  },
  {
    id: "s3",
    title: "Out for Delivery",
    subtitle: "Your order is currently on the way.",
    status: "current",
    time: "8:28 PM",
  },
  {
    id: "s4",
    title: "Delivered",
    subtitle: "The order will be marked completed upon arrival.",
    status: "upcoming",
    time: "--",
  },
];

export const driverInfo = {
  name: "Omar Salah",
  role: "Delivery Captain",
  vehicle: "Motorbike • ABC-3241",
  phone: "+20 101 234 5678",
  avatar:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
};

export const orderMiniSummary = {
  itemsCount: 3,
  subtotal: 430,
  deliveryFee: 35,
  total: 477,
  items: [
    "Spanish Latte x2",
    "Molten Lava Cake x1",
    "Classic Beef Burger x1",
  ],
};