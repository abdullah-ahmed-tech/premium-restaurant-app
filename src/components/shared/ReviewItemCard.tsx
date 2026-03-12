import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type ReviewItemCardProps = {
  userName: string;
  rating: number;
  date: string;
  comment: string;
  itemName?: string;
};

export function ReviewItemCard({
  userName,
  rating,
  date,
  comment,
  itemName,
}: ReviewItemCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <AppBadge label={`${rating}★`} variant="warning" />
      </View>

      {itemName ? <Text style={styles.itemName}>{itemName}</Text> : null}
      <Text style={styles.comment}>{comment}</Text>
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
    marginBottom: spacing.sm,
  },
  userName: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 2,
  },
  date: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  itemName: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  comment: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    lineHeight: 21,
  },
});