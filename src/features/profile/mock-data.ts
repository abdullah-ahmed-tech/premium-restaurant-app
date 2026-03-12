/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type SavedAddress = {
  id: string;
  label: string;
  addressLine: string;
  area: string;
  isDefault?: boolean;
};

export type OrderHistoryItem = {
  id: string;
  orderNumber: string;
  status: "Delivered" | "Preparing" | "On The Way" | "Cancelled";
  total: number;
  date: string;
  itemsCount: number;
};

export type ProfileMenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export const profileUser = {
  name: "Abdullah Ahmed",
  email: "abdullah@example.com",
  phone: "+20 100 000 0000",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  memberSince: "Member since Jan 2026",
};

export const loyaltyData = {
  points: 245,
  nextRewardAt: 300,
  tier: "Gold Member",
  rewardTitle: "Free Signature Dessert",
};

export const savedAddresses: SavedAddress[] = [
  {
    id: "a1",
    label: "Home",
    addressLine: "12 Nile Street, Downtown",
    area: "Cairo, Egypt",
    isDefault: true,
  },
  {
    id: "a2",
    label: "Office",
    addressLine: "45 Business Hub, New Cairo",
    area: "Cairo, Egypt",
  },
];

export const orderHistory: OrderHistoryItem[] = [
  {
    id: "o1",
    orderNumber: "#BB-1048",
    status: "Delivered",
    total: 425,
    date: "12 Mar 2026",
    itemsCount: 4,
  },
  {
    id: "o2",
    orderNumber: "#BB-1042",
    status: "Preparing",
    total: 210,
    date: "11 Mar 2026",
    itemsCount: 2,
  },
  {
    id: "o3",
    orderNumber: "#BB-1033",
    status: "Delivered",
    total: 580,
    date: "09 Mar 2026",
    itemsCount: 5,
  },
];

export const profileMenuItems: ProfileMenuItem[] = [
  {
    id: "m0",
    title: "Login / Register",
    subtitle: "Preview authentication screens and entry flow",
    icon: "log-in-outline",
  },
  {
    id: "m1",
    title: "Notifications",
    subtitle: "Offers, order alerts, and updates",
    icon: "notifications-outline",
  },
  {
    id: "m2",
    title: "Payment Methods",
    subtitle: "Manage saved cards and checkout methods",
    icon: "card-outline",
  },
  {
    id: "m3",
    title: "Reviews & Ratings",
    subtitle: "View your feedback and submitted reviews",
    icon: "star-outline",
  },
  {
    id: "m4",
    title: "Help & Support",
    subtitle: "Get assistance for orders and reservations",
    icon: "help-circle-outline",
  },
  {
    id: "m5",
    title: "Restaurant Info",
    subtitle: "Working hours, branches, and contact details",
    icon: "information-circle-outline",
  },
  {
    id: "m6",
    title: "Operations Dashboard",
    subtitle: "POS, kitchen queue, and restaurant systems",
    icon: "grid-outline",
  },
];