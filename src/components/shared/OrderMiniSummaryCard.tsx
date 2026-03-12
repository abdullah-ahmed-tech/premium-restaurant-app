import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type OrderMiniSummaryCardProps = {
  itemsCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  orderType: string;
  address: string;
  items: string[];
};

export function OrderMiniSummaryCard({
  itemsCount,
  subtotal,
  deliveryFee,
  total,
  paymentMethod,
  orderType,
  address,
  items,
}: OrderMiniSummaryCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.metaBlock}>
        <Text style={styles.metaLabel}>Order Type</Text>
        <Text style={styles.metaValue}>{orderType}</Text>
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.metaLabel}>Payment</Text>
        <Text style={styles.metaValue}>{paymentMethod}</Text>
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.metaLabel}>Delivery Address</Text>
        <Text style={styles.metaValue}>{address}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.itemsTitle}>Items ({itemsCount})</Text>
      <View style={styles.itemsWrap}>
        {items.map((item, index) => (
          <Text key={`${item}-${index}`} style={styles.itemText}>
            • {item}
          </Text>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Subtotal</Text>
        <Text style={styles.priceValue}>{subtotal} EGP</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Delivery Fee</Text>
        <Text style={styles.priceValue}>{deliveryFee} EGP</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>{total} EGP</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  metaBlock: {
    marginBottom: spacing.sm,
  },
  metaLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  metaValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  itemsTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },
  itemsWrap: {
    gap: spacing.xs,
  },
  itemText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.xs + 2,
  },
  priceLabel: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },
  priceValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 19,
    fontWeight: "900",
  },
});