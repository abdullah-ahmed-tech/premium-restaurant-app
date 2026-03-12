import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type CheckoutOrderSummaryCardProps = {
  items: { id: string; name: string; qty: number; total: number }[];
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  vat: number;
  discount: number;
  grandTotal: number;
};

export function CheckoutOrderSummaryCard({
  items,
  subtotal,
  deliveryFee,
  serviceFee,
  vat,
  discount,
  grandTotal,
}: CheckoutOrderSummaryCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Checkout Summary</Text>

      <View style={styles.itemsWrap}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemLabel}>
              {item.name} x{item.qty}
            </Text>
            <Text style={styles.itemValue}>{item.total} EGP</Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{subtotal} EGP</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery Fee</Text>
        <Text style={styles.value}>{deliveryFee} EGP</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Service Fee</Text>
        <Text style={styles.value}>{serviceFee} EGP</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>VAT</Text>
        <Text style={styles.value}>{vat} EGP</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={styles.discount}>- {discount} EGP</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>To Pay</Text>
        <Text style={styles.totalValue}>{grandTotal} EGP</Text>
      </View>

      <View style={styles.buttonWrap}>
        <AppButton title="Pay Now" />
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
  itemsWrap: {
    gap: spacing.sm,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.md,
  },
  itemLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
  },
  itemValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "800",
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xs + 1,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  discount: {
    color: colors.success,
    fontSize: 14,
    fontWeight: "800",
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "900",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "900",
  },
  buttonWrap: {
    marginTop: spacing.md,
  },
});