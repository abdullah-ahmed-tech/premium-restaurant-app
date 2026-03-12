import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type BranchInfoCardProps = {
  name: string;
  address: string;
  hours: string;
  phone: string;
};

export function BranchInfoCard({
  name,
  address,
  hours,
  phone,
}: BranchInfoCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.label}>Address</Text>
      <Text style={styles.value}>{address}</Text>

      <Text style={styles.label}>Hours</Text>
      <Text style={styles.value}>{hours}</Text>

      <Text style={styles.label}>Phone</Text>
      <Text style={styles.value}>{phone}</Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  name: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
    marginTop: spacing.xs,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
});