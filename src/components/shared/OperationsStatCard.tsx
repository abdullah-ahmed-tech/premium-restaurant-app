import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors, spacing } from "../../theme";
import { AppCard } from "../ui";

type OperationsStatCardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export function OperationsStatCard({
  title,
  value,
  subtitle,
}: OperationsStatCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: "47%",
  },
  title: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: spacing.xs,
  },
  value: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textPrimary,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },
});