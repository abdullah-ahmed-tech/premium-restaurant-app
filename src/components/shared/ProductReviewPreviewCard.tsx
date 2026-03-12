import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type ProductReviewPreviewCardProps = {
  reviews: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
};

export function ProductReviewPreviewCard({
  reviews,
}: ProductReviewPreviewCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Customer Preview</Text>

      {reviews.map((review, index) => {
        const isLast = index === reviews.length - 1;

        return (
          <View
            key={review.id}
            style={[styles.reviewRow, isLast && styles.reviewRowLast]}
          >
            <View style={styles.topRow}>
              <View>
                <Text style={styles.userName}>{review.userName}</Text>
                <Text style={styles.date}>{review.date}</Text>
              </View>

              <AppBadge label={`${review.rating}★`} variant="warning" />
            </View>

            <Text style={styles.comment}>{review.comment}</Text>
          </View>
        );
      })}
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
  reviewRow: {
    paddingBottom: spacing.md,
    marginBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  reviewRowLast: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  userName: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 2,
  },
  date: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  comment: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    lineHeight: 21,
  },
});