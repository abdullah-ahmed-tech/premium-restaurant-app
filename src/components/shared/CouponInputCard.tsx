import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard, AppInput } from "../ui";

type CouponInputCardProps = {
  couponCode: string;
  onChangeCoupon: (value: string) => void;
  onApplyCoupon: () => void;
};

export function CouponInputCard({
  couponCode,
  onChangeCoupon,
  onApplyCoupon,
}: CouponInputCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Coupon Code</Text>
      <Text style={styles.subtitle}>
        Add a promotional code before checkout.
      </Text>

      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <AppInput
            value={couponCode}
            onChangeText={onChangeCoupon}
            placeholder="Enter coupon code"
          />
        </View>

        <View style={styles.buttonWrap}>
          <AppButton
            title="Apply"
            onPress={onApplyCoupon}
            fullWidth={false}
          />
        </View>
      </View>
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
    marginBottom: 4,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: spacing.sm,
  },
  inputWrap: {
    flex: 1,
  },
  buttonWrap: {
    paddingBottom: 1,
  },
});