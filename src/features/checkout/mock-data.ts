/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type PaymentMethod = {
  id: string;
  type: "card" | "cash" | "wallet";
  label: string;
  details: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "pm1",
    type: "card",
    label: "Visa ending in 4821",
    details: "Saved card • Default",
  },
  {
    id: "pm2",
    type: "wallet",
    label: "Mobile Wallet",
    details: "Fast checkout flow",
  },
  {
    id: "pm3",
    type: "cash",
    label: "Cash on Delivery",
    details: "Pay when order arrives",
  },
];

export const checkoutAddress = {
  title: "Home Address",
  addressLine: "12 Nile Street, Downtown, Cairo",
  contactName: "Abdullah Ahmed",
  phone: "+20 100 000 0000",
};

export const checkoutItems = [
  { id: "i1", name: "Spanish Latte", qty: 2, total: 230 },
  { id: "i2", name: "Molten Lava Cake", qty: 1, total: 125 },
  { id: "i3", name: "Classic Beef Burger", qty: 1, total: 210 },
];

export const checkoutSummary = {
  subtotal: 565,
  deliveryFee: 35,
  serviceFee: 12,
  vat: 85,
  discount: 45,
  grandTotal: 652,
};