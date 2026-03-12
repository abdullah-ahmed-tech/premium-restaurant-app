import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type ProductCardProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
};

export function ProductCard({
  id,
  name,
  category,
  price,
  rating,
  reviewsCount,
  image,
  isPopular,
  isNew,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/product/${id}`)}
      style={styles.pressable}
    >
      <AppCard style={styles.card} padded={false}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.badgesRow}>
            {isPopular ? <AppBadge label="Popular" variant="primary" /> : null}
            {isNew ? <AppBadge label="New" variant="success" /> : null}
          </View>

          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.category}>{category}</Text>

          <View style={styles.metaRow}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color={colors.warning} />
              <Text style={styles.ratingText}>
                {rating} ({reviewsCount})
              </Text>
            </View>

            <Text style={styles.price}>{price} EGP</Text>
          </View>
        </View>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 240,
    marginRight: spacing.md,
  },
  card: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: colors.surfaceAlt,
  },
  content: {
    padding: spacing.md,
  },
  badgesRow: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.sm,
    minHeight: 28,
  },
  name: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: 4,
  },
  category: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  price: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "800",
  },
});