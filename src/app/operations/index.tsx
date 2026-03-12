import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native";
import { KitchenQueueCard } from "../../components/shared/KitchenQueueCard";
import { OperationsStatCard } from "../../components/shared/OperationsStatCard";
import { POSIntegrationCard } from "../../components/shared/POSIntegrationCard";
import { AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
    kitchenQueue,
    operationsStats,
    posIntegration,
} from "../../features/operations/mock-data";
import { colors, spacing } from "../../theme";

export default function OperationsScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="Restaurant Operations"
        subtitle="POS, kitchen queue, and systems integration overview"
      />

      <View style={styles.statsGrid}>
        {operationsStats.map((stat) => (
          <OperationsStatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
          />
        ))}
      </View>

      <SectionHeader
        title="Kitchen Queue"
        subtitle="Operational order statuses for restaurant team"
      />

      {kitchenQueue.map((item) => (
        <KitchenQueueCard
          key={item.id}
          orderNumber={item.orderNumber}
          type={item.type}
          status={item.status}
          itemsCount={item.itemsCount}
          eta={item.eta}
        />
      ))}

      <POSIntegrationCard
        posStatus={posIntegration.posStatus}
        kitchenDisplayStatus={posIntegration.kitchenDisplayStatus}
        paymentGatewayStatus={posIntegration.paymentGatewayStatus}
        lastSync={posIntegration.lastSync}
        note={posIntegration.note}
      />

      <AppCard style={styles.footerCard}>
        <Text style={styles.footerTitle}>Operations Coverage</Text>
        <Text style={styles.footerText}>
          This screen represents the restaurant-side operational layer:
          queue monitoring, POS state, kitchen visibility, and payment gateway readiness.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  footerCard: {
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
  },
  footerTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});