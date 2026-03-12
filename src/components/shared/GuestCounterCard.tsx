import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";
import { QuantityStepper } from "./QuantityStepper";

type GuestCounterCardProps = {
  guests: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function GuestCounterCard({
  guests,
  onDecrease,
  onIncrease,
}: GuestCounterCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Number of Guests</Text>
          <Text style={styles.subtitle}>
            Select the expected party size for the reservation.
          </Text>
        </View>

        <QuantityStepper
          value={guests}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    maxWidth: 220,
  },
});