/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type ReviewBreakdownItem = {
  stars: number;
  count: number;
};

export type ReviewItem = {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  itemName?: string;
};

export const reviewSummary = {
  averageRating: 4.8,
  totalReviews: 2431,
  recommendationRate: 96,
};

export const reviewBreakdown: ReviewBreakdownItem[] = [
  { stars: 5, count: 1850 },
  { stars: 4, count: 420 },
  { stars: 3, count: 95 },
  { stars: 2, count: 38 },
  { stars: 1, count: 28 },
];

export const recentReviews: ReviewItem[] = [
  {
    id: "r1",
    userName: "Mariam A.",
    rating: 5,
    date: "12 Mar 2026",
    comment: "Excellent coffee quality and very smooth delivery experience.",
    itemName: "Spanish Latte",
  },
  {
    id: "r2",
    userName: "Omar K.",
    rating: 4,
    date: "11 Mar 2026",
    comment: "The burger was great and the packaging looked premium.",
    itemName: "Classic Beef Burger",
  },
  {
    id: "r3",
    userName: "Sarah M.",
    rating: 5,
    date: "10 Mar 2026",
    comment: "Desserts are outstanding. The molten lava cake is highly recommended.",
    itemName: "Molten Lava Cake",
  },
];