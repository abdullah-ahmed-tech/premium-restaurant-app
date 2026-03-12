import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function SectionHeader({
  title,
  subtitle,
  actionLabel,
  onPressAction,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      {actionLabel ? (
        <Pressable onPress={onPressAction} style={styles.actionButton}>
          <Text style={styles.actionText}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    ...typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: spacing.xs,
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  actionButton: {
    paddingVertical: spacing.xs,
  },
  actionText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
});