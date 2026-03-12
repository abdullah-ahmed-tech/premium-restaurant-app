import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { heroImages } from "../../features/home/hero-images";
import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";
import { HeroImageSlider } from "./HeroImageSlider";

type HomeHeroProps = {
  restaurantName: string;
  openHours: string;
  deliveryTime: string;
  rating: number;
  reviews: string;
};

export function HomeHero({
  restaurantName,
  openHours,
  deliveryTime,
  rating,
  reviews,
}: HomeHeroProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeroImageSlider slides={heroImages} />

      <AppCard style={styles.infoCard}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.description}>
          Fresh coffee, signature meals, and handcrafted desserts in one place.
        </Text>

        <View style={styles.metaList}>
          <View style={styles.metaRow}>
            <Ionicons name="time-outline" size={18} color={colors.primary} />
            <Text style={styles.metaText}>{openHours}</Text>
          </View>

          <View style={styles.metaRow}>
            <Ionicons name="bicycle-outline" size={18} color={colors.primary} />
            <Text style={styles.metaText}>{deliveryTime}</Text>
          </View>

          <View style={styles.metaRow}>
            <Ionicons name="star" size={18} color={colors.warning} />
            <Text style={styles.metaText}>
              {rating} • {reviews}
            </Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <View style={styles.actionItem}>
            <AppButton title="Order Now" onPress={() => router.push("/menu")} />
          </View>

          <View style={styles.actionItem}>
            <AppButton
              title="Book Table"
              variant="secondary"
              onPress={() => router.push("/reservation")}
            />
          </View>
        </View>
      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  infoCard: {
    marginTop: spacing.sm,
    padding: spacing.lg,
  },
  restaurantName: {
    ...typography.h1,
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 26,
  },
  metaList: {
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: spacing.sm,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  actionsRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  actionItem: {
    flex: 1,
  },
});