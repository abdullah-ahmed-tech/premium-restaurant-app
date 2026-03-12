import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { DeliveryMethod } from "../../features/cart/mock-data";
import { colors, radius, spacing } from "../../theme";

type DeliveryMethodSelectorProps = {
  value: DeliveryMethod;
  onChange: (value: DeliveryMethod) => void;
};

const options: {
  id: DeliveryMethod;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { id: "delivery", label: "Delivery", icon: "bicycle-outline" },
  { id: "pickup", label: "Pickup", icon: "bag-handle-outline" },
  { id: "dinein", label: "Dine In", icon: "restaurant-outline" },
];

export function DeliveryMethodSelector({
  value,
  onChange,
}: DeliveryMethodSelectorProps) {
  return (
    <View style={styles.row}>
      {options.map((option) => {
        const active = value === option.id;

        return (
          <Pressable
            key={option.id}
            onPress={() => onChange(option.id)}
            style={[styles.card, active && styles.cardActive]}
          >
            <View style={[styles.iconWrap, active && styles.iconWrapActive]}>
              <Ionicons
                name={option.icon}
                size={18}
                color={active ? "#FFFFFF" : colors.primary}
              />
            </View>
            <Text style={[styles.label, active && styles.labelActive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: "center",
  },
  cardActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  iconWrapActive: {
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  labelActive: {
    color: colors.primaryDark,
  },
});