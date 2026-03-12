import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

type ReservationTimeSlotsProps = {
  slots: {
    id: string;
    label: string;
    available: boolean;
  }[];
  selectedTimeId: string;
  onSelect: (id: string) => void;
};

export function ReservationTimeSlots({
  slots,
  selectedTimeId,
  onSelect,
}: ReservationTimeSlotsProps) {
  return (
    <View style={styles.grid}>
      {slots.map((slot) => {
        const active = slot.id === selectedTimeId;
        const disabled = !slot.available;

        return (
          <Pressable
            key={slot.id}
            onPress={() => {
              if (!disabled) onSelect(slot.id);
            }}
            style={[
              styles.slot,
              active && styles.slotActive,
              disabled && styles.slotDisabled,
            ]}
          >
            <Text
              style={[
                styles.label,
                active && styles.labelActive,
                disabled && styles.labelDisabled,
              ]}
            >
              {slot.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  slot: {
    minWidth: "47%",
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  slotActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  slotDisabled: {
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.border,
    opacity: 0.65,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  labelActive: {
    color: "#FFFFFF",
  },
  labelDisabled: {
    color: colors.textMuted,
  },
});