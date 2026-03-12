import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CartItemCard } from "../../components/shared/CartItemCard";
import { CartSummaryCard } from "../../components/shared/CartSummaryCard";
import { CouponInputCard } from "../../components/shared/CouponInputCard";
import { DeliveryMethodSelector } from "../../components/shared/DeliveryMethodSelector";
import { AppBadge, AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
  availableCoupons,
  deliveryFeeMap,
  initialCartItems,
  serviceFee,
  vatPercentage,
  type DeliveryMethod,
} from "../../features/cart/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("delivery");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQty = (itemId: string, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== itemId) return item;

          const nextQty = type === "inc" ? item.qty + 1 : item.qty - 1;
          return { ...item, qty: nextQty };
        })
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const applyCoupon = () => {
    const normalized = couponCode.trim().toUpperCase();
    const exists = availableCoupons.some(
      (coupon) => coupon.code.toUpperCase() === normalized
    );

    setAppliedCoupon(exists ? normalized : null);
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const optionsTotal =
        item.selectedOptions?.reduce((acc, option) => acc + option.price, 0) ?? 0;

      return sum + (item.price + optionsTotal) * item.qty;
    }, 0);
  }, [cartItems]);

  const deliveryFee = deliveryFeeMap[deliveryMethod];
  const vat = Math.round((subtotal + deliveryFee + serviceFee) * vatPercentage);
  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const total = Math.max(subtotal + deliveryFee + serviceFee + vat - discount, 0);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );

  return (
    <ScreenContainer>
      <SectionHeader
        title="Your Cart"
        subtitle="Review order details before checkout"
      />

      <AppCard style={styles.topCard}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.topTitle}>Active Order</Text>
            <Text style={styles.topSubtitle}>
              {totalItems} items currently selected
            </Text>
          </View>
          <AppBadge label={deliveryMethod.toUpperCase()} variant="primary" />
        </View>
      </AppCard>

      <SectionHeader
        title="Delivery Method"
        subtitle="Select how the customer will receive the order"
      />

      <DeliveryMethodSelector
        value={deliveryMethod}
        onChange={setDeliveryMethod}
      />

      <CouponInputCard
        couponCode={couponCode}
        onChangeCoupon={setCouponCode}
        onApplyCoupon={applyCoupon}
      />

      {appliedCoupon ? (
        <AppCard style={styles.appliedCard}>
          <Text style={styles.appliedTitle}>Coupon Applied</Text>
          <Text style={styles.appliedText}>
            {appliedCoupon} has been applied successfully with a mock discount.
          </Text>
        </AppCard>
      ) : null}

      <SectionHeader
        title="Cart Items"
        subtitle="Editable list with quantity controls"
      />

      {cartItems.length === 0 ? (
        <AppCard style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>
            Add products from the menu to continue the order flow.
          </Text>
        </AppCard>
      ) : (
        cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            qty={item.qty}
            image={item.image}
            notes={item.notes}
            selectedOptions={item.selectedOptions}
            onIncrease={() => updateQty(item.id, "inc")}
            onDecrease={() => updateQty(item.id, "dec")}
            onRemove={() => removeItem(item.id)}
          />
        ))
      )}

      <CartSummaryCard
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        serviceFee={serviceFee}
        vat={vat}
        discount={discount}
        total={total}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topCard: {
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  topTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  topSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  appliedCard: {
    marginBottom: spacing.md,
    backgroundColor: "#EAF8F0",
    borderColor: "#D5F0DF",
  },
  appliedTitle: {
    color: colors.success,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
  appliedText: {
    color: colors.textPrimary,
    fontSize: 13,
    lineHeight: 20,
  },
  emptyCard: {
    alignItems: "center",
    paddingVertical: spacing.xl,
    marginBottom: spacing.md,
  },
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    maxWidth: 260,
  },
});