import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type CartSummaryCardProps = {
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  vat: number;
  discount: number;
  total: number;
};

export function CartSummaryCard({
  subtotal,
  deliveryFee,
  serviceFee,
  vat,
  discount,
  total,
}: CartSummaryCardProps) {
  const router = useRouter();

  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Order Summary</Text>

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
        <Text style={styles.discountValue}>- {discount} EGP</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Grand Total</Text>
        <Text style={styles.totalValue}>{total} EGP</Text>
      </View>

      <View style={styles.buttonWrap}>
        <AppButton title="Proceed to Checkout" onPress={() => router.push("/checkout")} />
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xs + 2,
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
  discountValue: {
    color: colors.success,
    fontSize: 14,
    fontWeight: "800",
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "800",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "900",
  },
  buttonWrap: {
    marginTop: spacing.md,
  },
});