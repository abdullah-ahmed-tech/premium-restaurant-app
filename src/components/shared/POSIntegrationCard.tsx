import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type POSIntegrationCardProps = {
  posStatus: string;
  kitchenDisplayStatus: string;
  paymentGatewayStatus: string;
  lastSync: string;
  note: string;
};

export function POSIntegrationCard({
  posStatus,
  kitchenDisplayStatus,
  paymentGatewayStatus,
  lastSync,
  note,
}: POSIntegrationCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Restaurant Systems Integration</Text>

      <View style={styles.row}>
        <Text style={styles.label}>POS</Text>
        <AppBadge label={posStatus} variant="success" />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Kitchen Display</Text>
        <AppBadge label={kitchenDisplayStatus} variant="success" />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Payment Gateway</Text>
        <AppBadge label={paymentGatewayStatus} variant="primary" />
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.metaLabel}>Last Sync</Text>
        <Text style={styles.metaValue}>{lastSync}</Text>
      </View>

      <Text style={styles.note}>{note}</Text>
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
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  metaBlock: {
    marginTop: spacing.md,
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
  },
  note: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});