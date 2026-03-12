/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type RestaurantBranch = {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
};

export const restaurantInfo = {
  brandName: "Brew & Bite Cafe",
  description:
    "A premium restaurant and cafe experience combining handcrafted coffee, quality meals, and modern dining atmosphere.",
  cuisine: "Cafe • Breakfast • Desserts • Burgers • Pizza",
  deliveryTime: "25 - 35 min",
  averageRating: 4.8,
  reviewsLabel: "2.4k+ reviews",
  supportEmail: "support@brewandbite.com",
  instagram: "@brewandbite",
};

export const restaurantBranches: RestaurantBranch[] = [
  {
    id: "b1",
    name: "Downtown Branch",
    address: "12 Nile Street, Downtown, Cairo",
    hours: "9:00 AM - 12:00 AM",
    phone: "+20 100 111 2222",
  },
  {
    id: "b2",
    name: "New Cairo Branch",
    address: "45 Business Hub, New Cairo, Cairo",
    hours: "10:00 AM - 1:00 AM",
    phone: "+20 100 333 4444",
  },
];