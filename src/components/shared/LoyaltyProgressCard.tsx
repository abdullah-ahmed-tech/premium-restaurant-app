import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type LoyaltyProgressCardProps = {
  points: number;
  nextRewardAt: number;
  tier: string;
  rewardTitle: string;
};

export function LoyaltyProgressCard({
  points,
  nextRewardAt,
  tier,
  rewardTitle,
}: LoyaltyProgressCardProps) {
  const progress = Math.min((points / nextRewardAt) * 100, 100);
  const left = Math.max(nextRewardAt - points, 0);

  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.title}>Loyalty & Rewards</Text>
          <Text style={styles.subtitle}>
            Earn more points to unlock your next reward.
          </Text>
        </View>
        <AppBadge label={tier} variant="success" />
      </View>

      <View style={styles.pointsRow}>
        <Text style={styles.pointsValue}>{points} pts</Text>
        <Text style={styles.pointsHint}>{left} pts left</Text>
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.rewardText}>Next reward: {rewardTitle}</Text>
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
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  pointsValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "900",
  },
  pointsHint: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
  },
  track: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceAlt,
    overflow: "hidden",
    marginBottom: spacing.sm,
  },
  fill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  rewardText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
});