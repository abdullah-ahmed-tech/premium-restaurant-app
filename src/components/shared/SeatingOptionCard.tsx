import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";

type SeatingOptionCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  selected?: boolean;
  onPress?: () => void;
};

export function SeatingOptionCard({
  title,
  subtitle,
  icon,
  selected = false,
  onPress,
}: SeatingOptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <View style={[styles.iconWrap, selected && styles.iconWrapSelected]}>
        <Ionicons
          name={icon as keyof typeof Ionicons.glyphMap}
          size={20}
          color={selected ? "#FFFFFF" : colors.primary}
        />
      </View>

      <View style={styles.textWrap}>
        <Text style={[styles.title, selected && styles.titleSelected]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, selected && styles.subtitleSelected]}>
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  cardSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
  },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapSelected: {
    backgroundColor: colors.primary,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  titleSelected: {
    color: colors.primaryDark,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  subtitleSelected: {
    color: colors.textPrimary,
  },
});