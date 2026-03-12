import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GuestCounterCard } from "../../components/shared/GuestCounterCard";
import { ReservationDateChips } from "../../components/shared/ReservationDateChips";
import { ReservationTimeSlots } from "../../components/shared/ReservationTimeSlots";
import { SeatingOptionCard } from "../../components/shared/SeatingOptionCard";
import { AppButton, AppCard, AppInput, ScreenContainer, SectionHeader } from "../../components/ui";
import {
  reservationDates,
  reservationPolicy,
  reservationTimeSlots,
  seatingOptions,
} from "../../features/reservation/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function ReservationScreen() {
  const [selectedDateId, setSelectedDateId] = useState(reservationDates[0]?.id ?? "d1");
  const [selectedTimeId, setSelectedTimeId] = useState(
    reservationTimeSlots.find((slot) => slot.available)?.id ?? ""
  );
  const [guests, setGuests] = useState(2);
  const [selectedSeatingId, setSelectedSeatingId] = useState(seatingOptions[0]?.id ?? "s1");
  const [specialRequest, setSpecialRequest] = useState("");

  const selectedDate = useMemo(
    () => reservationDates.find((date) => date.id === selectedDateId),
    [selectedDateId]
  );

  const selectedTime = useMemo(
    () => reservationTimeSlots.find((slot) => slot.id === selectedTimeId),
    [selectedTimeId]
  );

  const selectedSeating = useMemo(
    () => seatingOptions.find((seat) => seat.id === selectedSeatingId),
    [selectedSeatingId]
  );

  return (
    <ScreenContainer>
      <SectionHeader
        title="Table Reservation"
        subtitle="Choose date, time, guests, and preferred seating"
      />

      <AppCard style={styles.heroCard}>
        <Text style={styles.heroTitle}>Reserve Your Spot</Text>
        <Text style={styles.heroText}>
          Smooth reservation flow now in UI form, later connected to real table availability.
        </Text>
      </AppCard>

      <SectionHeader
        title="Select Date"
        subtitle="Available reservation days"
      />

      <ReservationDateChips
        dates={reservationDates}
        selectedDateId={selectedDateId}
        onSelect={setSelectedDateId}
      />

      <SectionHeader
        title="Select Time"
        subtitle="Unavailable slots are disabled"
      />

      <ReservationTimeSlots
        slots={reservationTimeSlots}
        selectedTimeId={selectedTimeId}
        onSelect={setSelectedTimeId}
      />

      <GuestCounterCard
        guests={guests}
        onDecrease={() => setGuests((prev) => Math.max(prev - 1, 1))}
        onIncrease={() => setGuests((prev) => Math.min(prev + 1, 20))}
      />

      <SectionHeader
        title="Seating Preference"
        subtitle="Choose the dining area"
      />

      {seatingOptions.map((option) => (
        <SeatingOptionCard
          key={option.id}
          title={option.title}
          subtitle={option.subtitle}
          icon={option.icon}
          selected={selectedSeatingId === option.id}
          onPress={() => setSelectedSeatingId(option.id)}
        />
      ))}

      <SectionHeader
        title="Special Request"
        subtitle="Optional customer note for reservation"
      />

      <AppCard style={styles.noteCard}>
        <AppInput
          value={specialRequest}
          onChangeText={setSpecialRequest}
          placeholder="Birthday setup, quiet table, window seating..."
          multiline
          numberOfLines={4}
          style={styles.textArea}
        />
      </AppCard>

      <AppCard style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Reservation Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Date</Text>
          <Text style={styles.summaryValue}>{selectedDate?.fullDate ?? "-"}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Time</Text>
          <Text style={styles.summaryValue}>{selectedTime?.label ?? "-"}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Guests</Text>
          <Text style={styles.summaryValue}>{guests}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Seating</Text>
          <Text style={styles.summaryValue}>{selectedSeating?.title ?? "-"}</Text>
        </View>

        {specialRequest.trim() ? (
          <View style={[styles.summaryRow, styles.summaryRowTop]}>
            <Text style={styles.summaryLabel}>Request</Text>
            <Text style={styles.summaryValue}>{specialRequest.trim()}</Text>
          </View>
        ) : null}

        <View style={styles.buttonWrap}>
          <AppButton title="Confirm Reservation" />
        </View>
      </AppCard>

      <AppCard style={styles.policyCard}>
        <Text style={styles.policyTitle}>{reservationPolicy.title}</Text>
        <Text style={styles.policyText}>{reservationPolicy.description}</Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    marginBottom: spacing.md,
  },
  heroTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  heroText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  noteCard: {
    marginBottom: spacing.md,
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: "top",
    paddingTop: spacing.md,
  },
  summaryCard: {
    marginBottom: spacing.md,
  },
  summaryTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.md,
    paddingVertical: spacing.xs + 2,
  },
  summaryRowTop: {
    alignItems: "flex-start",
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },
  summaryValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    maxWidth: "60%",
    textAlign: "right",
  },
  buttonWrap: {
    marginTop: spacing.md,
  },
  policyCard: {
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
  },
  policyTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  policyText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});