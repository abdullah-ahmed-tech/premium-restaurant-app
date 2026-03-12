import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { CheckoutAddressCard } from "../../components/shared/CheckoutAddressCard";
import { CheckoutOrderSummaryCard } from "../../components/shared/CheckoutOrderSummaryCard";
import { PaymentMethodCard } from "../../components/shared/PaymentMethodCard";
import { AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
    checkoutAddress,
    checkoutItems,
    checkoutSummary,
    paymentMethods,
} from "../../features/checkout/mock-data";
import { colors, spacing } from "../../theme";

export default function CheckoutScreen() {
  const [selectedPaymentId, setSelectedPaymentId] = useState(paymentMethods[0]?.id ?? "pm1");

  return (
    <ScreenContainer>
      <SectionHeader
        title="Checkout & Payment"
        subtitle="Finalize order details and choose payment method"
      />

      <CheckoutAddressCard
        title={checkoutAddress.title}
        addressLine={checkoutAddress.addressLine}
        contactName={checkoutAddress.contactName}
        phone={checkoutAddress.phone}
      />

      <SectionHeader
        title="Payment Method"
        subtitle="Choose how the customer will pay"
      />

      {paymentMethods.map((method) => (
        <PaymentMethodCard
          key={method.id}
          type={method.type}
          label={method.label}
          details={method.details}
          selected={selectedPaymentId === method.id}
          onPress={() => setSelectedPaymentId(method.id)}
        />
      ))}

      <AppCard style={styles.noteCard}>
        <Text style={styles.noteTitle}>Payment Flow Note</Text>
        <Text style={styles.noteText}>
          This screen is UI-ready for online card payment, wallet flow, and cash on delivery.
          Real gateway integration will be connected in backend phase.
        </Text>
      </AppCard>

      <CheckoutOrderSummaryCard
        items={checkoutItems}
        subtotal={checkoutSummary.subtotal}
        deliveryFee={checkoutSummary.deliveryFee}
        serviceFee={checkoutSummary.serviceFee}
        vat={checkoutSummary.vat}
        discount={checkoutSummary.discount}
        grandTotal={checkoutSummary.grandTotal}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },
  noteTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  noteText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});