import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type AuthHeaderCardProps = {
  title: string;
  subtitle: string;
};

export function AuthHeaderCard({ title, subtitle }: AuthHeaderCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconWrap}>
          <Ionicons name="cafe-outline" size={24} color="#FFFFFF" />
        </View>

        <View style={styles.titleWrap}>
          <AppBadge label="Premium Access" variant="primary" />
          <Text style={styles.brand}>Brew & Bite Cafe</Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    padding: spacing.lg,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  iconWrap: {
    width: 54,
    height: 54,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  titleWrap: {
    flex: 1,
    gap: spacing.xs,
  },
  brand: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
});