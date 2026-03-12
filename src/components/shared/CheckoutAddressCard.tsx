import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type CheckoutAddressCardProps = {
  title: string;
  addressLine: string;
  contactName: string;
  phone: string;
};

export function CheckoutAddressCard({
  title,
  addressLine,
  contactName,
  phone,
}: CheckoutAddressCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{addressLine}</Text>
      <Text style={styles.meta}>{contactName}</Text>
      <Text style={styles.meta}>{phone}</Text>

      <Text style={styles.actionHint}>Delivery location selected for this order.</Text>

      <AppButton title="Change Address" variant="outline" />
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 2,
  },
  actionHint: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
});