import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type DeliveryDriverCardProps = {
  name: string;
  role: string;
  vehicle: string;
  phone: string;
  avatar: string;
};

export function DeliveryDriverCard({
  name,
  role,
  vehicle,
  phone,
  avatar,
}: DeliveryDriverCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Delivery Partner</Text>

      <View style={styles.row}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <View style={styles.infoWrap}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.meta}>{role}</Text>
          <Text style={styles.meta}>{vehicle}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <View style={styles.actionItem}>
          <AppButton title="Call" variant="secondary" />
        </View>
        <View style={styles.actionItem}>
          <AppButton title="Message" variant="outline" />
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
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.round,
    backgroundColor: colors.surfaceAlt,
  },
  infoWrap: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 4,
  },
  meta: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  phone: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 2,
  },
  actionsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  actionItem: {
    flex: 1,
  },
});