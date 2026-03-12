import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type RestaurantInfoHighlightCardProps = {
  brandName: string;
  hours: string;
  deliveryTime: string;
  rating: string;
};

export function RestaurantInfoHighlightCard({
  brandName,
  hours,
  deliveryTime,
  rating,
}: RestaurantInfoHighlightCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.brandBadge}>
          <Ionicons name="storefront-outline" size={18} color="#FFFFFF" />
        </View>

        <View style={styles.brandTextWrap}>
          <Text style={styles.brandLabel}>Restaurant Overview</Text>
          <Text style={styles.brandName}>{brandName}</Text>
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.infoBox}>
          <Ionicons name="time-outline" size={18} color={colors.primary} />
          <Text style={styles.infoTitle}>Hours</Text>
          <Text style={styles.infoValue}>{hours}</Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="bicycle-outline" size={18} color={colors.primary} />
          <Text style={styles.infoTitle}>Delivery</Text>
          <Text style={styles.infoValue}>{deliveryTime}</Text>
        </View>

        <View style={styles.infoBoxWide}>
          <Ionicons name="star" size={18} color={colors.warning} />
          <Text style={styles.infoTitle}>Rating</Text>
          <Text style={styles.infoValue}>{rating}</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <View style={styles.actionItem}>
          <AppButton title="View Restaurant Info" variant="outline" />
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.xl,
    padding: spacing.lg,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  brandBadge: {
    width: 48,
    height: 48,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  brandTextWrap: {
    flex: 1,
  },
  brandLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  brandName: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "900",
    fontSize: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  infoBox: {
    width: "48%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  infoBoxWide: {
    width: "100%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  infoTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    marginTop: spacing.sm,
    marginBottom: 4,
  },
  infoValue: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 22,
  },
  actionsRow: {
    marginTop: spacing.xs,
  },
  actionItem: {
    width: "100%",
  },
});