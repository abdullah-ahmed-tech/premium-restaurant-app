import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type ReviewSummaryCardProps = {
  averageRating: number;
  totalReviews: number;
  recommendationRate: number;
  breakdown: { stars: number; count: number }[];
};

export function ReviewSummaryCard({
  averageRating,
  totalReviews,
  recommendationRate,
  breakdown,
}: ReviewSummaryCardProps) {
  const maxCount = Math.max(...breakdown.map((item) => item.count), 1);

  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.ratingValue}>{averageRating}</Text>
          <Text style={styles.ratingHint}>{totalReviews.toLocaleString()} reviews</Text>
        </View>

        <View style={styles.rightBox}>
          <Text style={styles.recommendLabel}>Recommendation</Text>
          <Text style={styles.recommendValue}>{recommendationRate}%</Text>
        </View>
      </View>

      <View style={styles.breakdownWrap}>
        {breakdown.map((item) => {
          const width = `${(item.count / maxCount) * 100}%`;

          return (
            <View key={item.stars} style={styles.breakdownRow}>
              <Text style={styles.starLabel}>{item.stars}★</Text>

              <View style={styles.track}>
                <View style={[styles.fill, { width }]} />
              </View>

              <Text style={styles.countLabel}>{item.count}</Text>
            </View>
          );
        })}
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
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  ratingValue: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 38,
  },
  ratingHint: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: 4,
  },
  rightBox: {
    alignItems: "flex-end",
  },
  recommendLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  recommendValue: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "800",
  },
  breakdownWrap: {
    gap: spacing.sm,
  },
  breakdownRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  starLabel: {
    width: 26,
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  track: {
    flex: 1,
    height: 9,
    borderRadius: 999,
    backgroundColor: colors.surfaceAlt,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  countLabel: {
    width: 42,
    textAlign: "right",
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
  },
});