import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppButton, AppCard } from "../ui";
import { QuantityStepper } from "./QuantityStepper";

type MenuProductRowCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  calories?: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function MenuProductRowCard({
  id,
  name,
  description,
  price,
  rating,
  reviewsCount,
  image,
  isPopular,
  isRecommended,
  calories,
  quantity,
  onIncrease,
  onDecrease,
}: MenuProductRowCardProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/product/${id}`)}>
      <AppCard style={styles.card} padded={false}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.badgesRow}>
            {isPopular ? <AppBadge label="Popular" variant="primary" /> : null}
            {isRecommended ? <AppBadge label="Chef Pick" variant="success" /> : null}
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.ratingWrap}>
              <Ionicons name="star" size={16} color={colors.warning} />
              <Text style={styles.metaText}>
                {rating} ({reviewsCount})
              </Text>
            </View>

            {calories ? <Text style={styles.metaText}>{calories} cal</Text> : null}
          </View>

          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.price}>{price} EGP</Text>
              <Text style={styles.priceHint}>Base price</Text>
            </View>

            {quantity > 0 ? (
              <QuantityStepper
                value={quantity}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            ) : (
              <AppButton title="Add" onPress={onIncrease} fullWidth={false} />
            )}
          </View>
        </View>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 170,
    backgroundColor: colors.surfaceAlt,
  },
  content: {
    padding: spacing.md,
  },
  badgesRow: {
    flexDirection: "row",
    gap: spacing.xs,
    minHeight: 28,
    marginBottom: spacing.sm,
  },
  name: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },
  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: 6,
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  price: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "800",
  },
  priceHint: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
});