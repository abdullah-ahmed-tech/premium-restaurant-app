import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type KitchenQueueCardProps = {
  orderNumber: string;
  type: "Delivery" | "Pickup" | "Dine In";
  status: "New" | "Preparing" | "Ready";
  itemsCount: number;
  eta: string;
};

function getVariant(status: KitchenQueueCardProps["status"]) {
  switch (status) {
    case "New":
      return "warning" as const;
    case "Preparing":
      return "primary" as const;
    case "Ready":
      return "success" as const;
    default:
      return "neutral" as const;
  }
}

export function KitchenQueueCard({
  orderNumber,
  type,
  status,
  itemsCount,
  eta,
}: KitchenQueueCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.orderNumber}>{orderNumber}</Text>
          <Text style={styles.meta}>
            {type} • {itemsCount} items
          </Text>
        </View>

        <AppBadge label={status} variant={getVariant(status)} />
      </View>

      <Text style={styles.eta}>ETA: {eta}</Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  orderNumber: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 2,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
  eta: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "800",
  },
});