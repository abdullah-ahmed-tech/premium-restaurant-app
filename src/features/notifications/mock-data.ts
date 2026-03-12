/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  type: "offer" | "order" | "loyalty" | "general";
  time: string;
  isRead: boolean;
};

export const notificationsData: NotificationItem[] = [
  {
    id: "n1",
    title: "20% OFF on breakfast combos",
    body: "Use BREAK20 today from 8 AM to 12 PM and enjoy a premium breakfast offer.",
    type: "offer",
    time: "10 min ago",
    isRead: false,
  },
  {
    id: "n2",
    title: "Your order is on the way",
    body: "Order #BB-1042 is now out for delivery and expected soon.",
    type: "order",
    time: "35 min ago",
    isRead: false,
  },
  {
    id: "n3",
    title: "You earned loyalty points",
    body: "15 new points were added to your rewards account after your recent order.",
    type: "loyalty",
    time: "2 hrs ago",
    isRead: true,
  },
  {
    id: "n4",
    title: "New dessert collection available",
    body: "Check out the latest handcrafted desserts now added to the menu.",
    type: "general",
    time: "Yesterday",
    isRead: true,
  },
];