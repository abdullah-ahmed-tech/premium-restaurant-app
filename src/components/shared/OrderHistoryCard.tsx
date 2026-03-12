import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type OrderHistoryCardProps = {
  orderNumber: string;
  status: "Delivered" | "Preparing" | "On The Way" | "Cancelled";
  total: number;
  date: string;
  itemsCount: number;
};

function getStatusVariant(status: OrderHistoryCardProps["status"]) {
  switch (status) {
    case "Delivered":
      return "success" as const;
    case "Preparing":
      return "warning" as const;
    case "On The Way":
      return "primary" as const;
    case "Cancelled":
      return "error" as const;
    default:
      return "neutral" as const;
  }
}

export function OrderHistoryCard({
  orderNumber,
  status,
  total,
  date,
  itemsCount,
}: OrderHistoryCardProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/order/tracking")}>
      <AppCard style={styles.card}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.orderNumber}>{orderNumber}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <AppBadge label={status} variant={getStatusVariant(status)} />
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.meta}>{itemsCount} items</Text>
          <Text style={styles.total}>{total} EGP</Text>
        </View>

        <Text style={styles.linkText}>Tap to track order</Text>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  orderNumber: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  date: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
  },
  total: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "900",
  },
  linkText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "700",
  },
});