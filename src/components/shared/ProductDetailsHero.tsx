import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type ProductDetailsHeroProps = {
  image: string;
  category: string;
  name: string;
  description: string;
  rating: number;
  reviewsCount: number;
  calories: number;
  prepTime: string;
  isPopular?: boolean;
  isRecommended?: boolean;
};

export function ProductDetailsHero({
  image,
  category,
  name,
  description,
  rating,
  reviewsCount,
  calories,
  prepTime,
  isPopular,
  isRecommended,
}: ProductDetailsHeroProps) {
  return (
    <AppCard style={styles.card} padded={false}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageInner}
      >
        <View style={styles.imageOverlay}>
          <AppBadge label={category} variant="primary" />
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.badgesRow}>
          {isPopular ? <AppBadge label="Popular" variant="primary" /> : null}
          {isRecommended ? <AppBadge label="Chef Pick" variant="success" /> : null}
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.metaWrap}>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={16} color={colors.warning} />
            <Text style={styles.metaText}>
              {rating} ({reviewsCount})
            </Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={16} color={colors.primary} />
            <Text style={styles.metaText}>{calories} cal</Text>
          </View>

          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={16} color={colors.primary} />
            <Text style={styles.metaText}>{prepTime}</Text>
          </View>
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 260,
    justifyContent: "flex-start",
  },
  imageInner: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  },
  imageOverlay: {
    padding: spacing.md,
  },
  content: {
    padding: spacing.lg,
  },
  badgesRow: {
    flexDirection: "row",
    gap: spacing.xs,
    minHeight: 28,
    marginBottom: spacing.sm,
  },
  name: {
    ...typography.h2,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  metaWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: 6,
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
});