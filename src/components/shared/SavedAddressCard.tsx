import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type SavedAddressCardProps = {
  label: string;
  addressLine: string;
  area: string;
  isDefault?: boolean;
};

export function SavedAddressCard({
  label,
  addressLine,
  area,
  isDefault,
}: SavedAddressCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.row}>
        <View style={styles.textWrap}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.address}>{addressLine}</Text>
          <Text style={styles.area}>{area}</Text>
        </View>

        {isDefault ? <AppBadge label="Default" variant="primary" /> : null}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  textWrap: {
    flex: 1,
  },
  label: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  address: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  area: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});