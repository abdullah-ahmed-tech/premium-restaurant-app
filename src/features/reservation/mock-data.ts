/**
 * MOCK DATA FILE
 * --------------------------------------------------
 * This file contains temporary mock data for UI development.
 * It will be removed and replaced with API integration
 * during the Backend phase.
 */

// TODO: BACKEND_INTEGRATION
// Replace all data in this file with API responses in backend phase.

export type ReservationDateOption = {
  id: string;
  label: string;
  fullDate: string;
};

export type ReservationTimeSlot = {
  id: string;
  label: string;
  available: boolean;
};

export type SeatingOption = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export const reservationDates: ReservationDateOption[] = [
  { id: "d1", label: "Today", fullDate: "12 Mar 2026" },
  { id: "d2", label: "Tomorrow", fullDate: "13 Mar 2026" },
  { id: "d3", label: "Sat", fullDate: "14 Mar 2026" },
  { id: "d4", label: "Sun", fullDate: "15 Mar 2026" },
  { id: "d5", label: "Mon", fullDate: "16 Mar 2026" },
];

export const reservationTimeSlots: ReservationTimeSlot[] = [
  { id: "t1", label: "10:00 AM", available: true },
  { id: "t2", label: "11:30 AM", available: true },
  { id: "t3", label: "01:00 PM", available: true },
  { id: "t4", label: "03:00 PM", available: false },
  { id: "t5", label: "05:30 PM", available: true },
  { id: "t6", label: "07:00 PM", available: true },
  { id: "t7", label: "08:30 PM", available: false },
  { id: "t8", label: "10:00 PM", available: true },
];

export const seatingOptions: SeatingOption[] = [
  {
    id: "s1",
    title: "Indoor",
    subtitle: "Comfortable air-conditioned seating",
    icon: "home-outline",
  },
  {
    id: "s2",
    title: "Outdoor",
    subtitle: "Open-air atmosphere with city view",
    icon: "sunny-outline",
  },
  {
    id: "s3",
    title: "Family Area",
    subtitle: "Larger seating arrangement for groups",
    icon: "people-outline",
  },
];

export const reservationPolicy = {
  title: "Reservation Policy",
  description:
    "Tables are held لمدة 15 دقيقة فقط بعد وقت الحجز. During backend phase, real availability and confirmation status will replace this mock flow.",
};