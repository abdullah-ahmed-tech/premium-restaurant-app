import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "react-native";
import { DeliveryDriverCard } from "../../components/shared/DeliveryDriverCard";
import { OrderMiniSummaryCard } from "../../components/shared/OrderMiniSummaryCard";
import { TrackingStatusHeader } from "../../components/shared/TrackingStatusHeader";
import { TrackingTimeline } from "../../components/shared/TrackingTimeline";
import { AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
  activeOrderTracking,
  driverInfo,
  orderMiniSummary,
  trackingSteps,
} from "../../features/orders/mock-tracking-data";
import { colors, spacing } from "../../theme";

export default function OrderTrackingScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="Track Order"
        subtitle="Live-style order progress interface for delivery flow"
      />

      <TrackingStatusHeader
        orderNumber={activeOrderTracking.orderNumber}
        statusLabel={activeOrderTracking.statusLabel}
        estimatedArrival={activeOrderTracking.estimatedArrival}
        placedAt={activeOrderTracking.placedAt}
      />

      <TrackingTimeline steps={trackingSteps} />

      <DeliveryDriverCard
        name={driverInfo.name}
        role={driverInfo.role}
        vehicle={driverInfo.vehicle}
        phone={driverInfo.phone}
        avatar={driverInfo.avatar}
      />

      <OrderMiniSummaryCard
        itemsCount={orderMiniSummary.itemsCount}
        subtotal={orderMiniSummary.subtotal}
        deliveryFee={orderMiniSummary.deliveryFee}
        total={orderMiniSummary.total}
        paymentMethod={activeOrderTracking.paymentMethod}
        orderType={activeOrderTracking.orderType}
        address={activeOrderTracking.address}
        items={orderMiniSummary.items}
      />

      <AppCard style={styles.noteCard}>
        <Text style={styles.noteTitle}>Tracking Flow Note</Text>
        <Text style={styles.noteText}>
          This screen is currently powered by mock tracking data only. In the backend phase,
          order status updates, rider assignment, and ETA will come from real APIs.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    marginBottom: spacing.xl,
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