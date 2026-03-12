import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";

type PaymentMethodCardProps = {
  type: "card" | "cash" | "wallet";
  label: string;
  details: string;
  selected?: boolean;
  onPress?: () => void;
};

function getIcon(type: PaymentMethodCardProps["type"]) {
  switch (type) {
    case "card":
      return "card-outline";
    case "wallet":
      return "wallet-outline";
    default:
      return "cash-outline";
  }
}

export function PaymentMethodCard({
  type,
  label,
  details,
  selected = false,
  onPress,
}: PaymentMethodCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <View style={[styles.iconWrap, selected && styles.iconWrapSelected]}>
        <Ionicons
          name={getIcon(type)}
          size={20}
          color={selected ? "#FFFFFF" : colors.primary}
        />
      </View>

      <View style={styles.textWrap}>
        <Text style={[styles.label, selected && styles.labelSelected]}>
          {label}
        </Text>
        <Text style={styles.details}>{details}</Text>
      </View>

      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected ? <View style={styles.radioDot} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapSelected: {
    backgroundColor: colors.primary,
  },
  textWrap: {
    flex: 1,
  },
  label: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 2,
  },
  labelSelected: {
    color: colors.primaryDark,
  },
  details: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: radius.round,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
  },
});