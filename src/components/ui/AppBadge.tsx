import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

type AppBadgeVariant = "primary" | "success" | "warning" | "error" | "neutral";

type AppBadgeProps = {
  label: string;
  variant?: AppBadgeVariant;
};

export function AppBadge({
  label,
  variant = "neutral",
}: AppBadgeProps) {
  return (
    <View style={[styles.base, badgeStyles[variant].container]}>
      <Text style={[styles.label, badgeStyles[variant].label]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 6,
    borderRadius: radius.round,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
  },
});

const badgeStyles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: colors.primaryLight,
    },
    label: {
      color: colors.primaryDark,
    },
  }),
  success: StyleSheet.create({
    container: {
      backgroundColor: "#EAF8F0",
    },
    label: {
      color: colors.success,
    },
  }),
  warning: StyleSheet.create({
    container: {
      backgroundColor: "#FFF6E5",
    },
    label: {
      color: colors.warning,
    },
  }),
  error: StyleSheet.create({
    container: {
      backgroundColor: "#FDECEC",
    },
    label: {
      color: colors.error,
    },
  }),
  neutral: StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
    },
    label: {
      color: colors.textSecondary,
    },
  }),
};