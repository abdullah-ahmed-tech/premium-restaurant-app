import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type RestaurantInfoOverviewCardProps = {
  brandName: string;
  description: string;
  cuisine: string;
  deliveryTime: string;
  averageRating: number;
  reviewsLabel: string;
  supportEmail: string;
  instagram: string;
};

export function RestaurantInfoOverviewCard({
  brandName,
  description,
  cuisine,
  deliveryTime,
  averageRating,
  reviewsLabel,
  supportEmail,
  instagram,
}: RestaurantInfoOverviewCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.brandName}>{brandName}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.metaBlock}>
        <Text style={styles.label}>Cuisine</Text>
        <Text style={styles.value}>{cuisine}</Text>
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.label}>Delivery Time</Text>
        <Text style={styles.value}>{deliveryTime}</Text>
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.label}>Rating</Text>
        <Text style={styles.value}>
          {averageRating} • {reviewsLabel}
        </Text>
      </View>

      <View style={styles.metaBlock}>
        <Text style={styles.label}>Support Email</Text>
        <Text style={styles.value}>{supportEmail}</Text>
      </View>

      <View style={styles.metaBlockLast}>
        <Text style={styles.label}>Instagram</Text>
        <Text style={styles.value}>{instagram}</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  brandName: {
    ...typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 21,
    marginBottom: spacing.md,
  },
  metaBlock: {
    marginBottom: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  metaBlockLast: {
    marginBottom: 0,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
});