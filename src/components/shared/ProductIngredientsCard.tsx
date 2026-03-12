import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type ProductIngredientsCardProps = {
  longDescription: string;
  ingredients: string[];
};

export function ProductIngredientsCard({
  longDescription,
  ingredients,
}: ProductIngredientsCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>About This Item</Text>
      <Text style={styles.description}>{longDescription}</Text>

      <Text style={styles.subTitle}>Ingredients</Text>
      <View style={styles.tagsWrap}>
        {ingredients.map((item) => (
          <AppBadge key={item} label={item} variant="neutral" />
        ))}
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
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  subTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },
  tagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
  },
});