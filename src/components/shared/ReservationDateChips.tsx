import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { colors, radius, spacing } from "../../theme";

type ReservationDateChipsProps = {
  dates: {
    id: string;
    label: string;
    fullDate: string;
  }[];
  selectedDateId: string;
  onSelect: (id: string) => void;
};

export function ReservationDateChips({
  dates,
  selectedDateId,
  onSelect,
}: ReservationDateChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {dates.map((date) => {
        const active = date.id === selectedDateId;

        return (
          <Pressable
            key={date.id}
            onPress={() => onSelect(date.id)}
            style={[styles.chip, active && styles.chipActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
              {date.label}
            </Text>
            <Text style={[styles.fullDate, active && styles.fullDateActive]}>
              {date.fullDate}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.md,
    paddingRight: spacing.md,
  },
  chip: {
    minWidth: 110,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginRight: spacing.sm,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },
  labelActive: {
    color: "#FFFFFF",
  },
  fullDate: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },
  fullDateActive: {
    color: "#FBEFE6",
  },
});