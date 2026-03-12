import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type TrackingStatusHeaderProps = {
  orderNumber: string;
  statusLabel: string;
  estimatedArrival: string;
  placedAt: string;
};

export function TrackingStatusHeader({
  orderNumber,
  statusLabel,
  estimatedArrival,
  placedAt,
}: TrackingStatusHeaderProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.orderNumber}>{orderNumber}</Text>
          <Text style={styles.placedAt}>Placed at {placedAt}</Text>
        </View>

        <AppBadge label={statusLabel} variant="primary" />
      </View>

      <View style={styles.etaWrap}>
        <Text style={styles.etaLabel}>Estimated arrival</Text>
        <Text style={styles.etaValue}>{estimatedArrival}</Text>
      </View>
    </AppCard>
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
    ...typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: 4,
  },
  placedAt: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  etaWrap: {
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  etaLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  etaValue: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "900",
  },
});