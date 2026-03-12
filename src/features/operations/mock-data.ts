/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type KitchenQueueItem = {
  id: string;
  orderNumber: string;
  type: "Delivery" | "Pickup" | "Dine In";
  status: "New" | "Preparing" | "Ready";
  itemsCount: number;
  eta: string;
};

export const operationsStats = [
  {
    id: "s1",
    title: "Active Orders",
    value: "18",
    subtitle: "Across delivery, pickup, dine-in",
  },
  {
    id: "s2",
    title: "Kitchen Queue",
    value: "7",
    subtitle: "Currently in preparation",
  },
  {
    id: "s3",
    title: "Ready for Handover",
    value: "4",
    subtitle: "Waiting for pickup or rider",
  },
  {
    id: "s4",
    title: "POS Sync",
    value: "Healthy",
    subtitle: "No issues in the current mock state",
  },
];

export const kitchenQueue: KitchenQueueItem[] = [
  {
    id: "k1",
    orderNumber: "#BB-1051",
    type: "Delivery",
    status: "New",
    itemsCount: 3,
    eta: "18 min",
  },
  {
    id: "k2",
    orderNumber: "#BB-1050",
    type: "Pickup",
    status: "Preparing",
    itemsCount: 2,
    eta: "10 min",
  },
  {
    id: "k3",
    orderNumber: "#BB-1049",
    type: "Dine In",
    status: "Ready",
    itemsCount: 5,
    eta: "Ready now",
  },
];

export const posIntegration = {
  posStatus: "Connected",
  kitchenDisplayStatus: "Connected",
  paymentGatewayStatus: "Sandbox Connected",
  lastSync: "12 Mar 2026 • 9:42 PM",
  note:
    "This UI represents the restaurant operations layer only. Real POS, kitchen, and payment integrations will be implemented in backend phase.",
};