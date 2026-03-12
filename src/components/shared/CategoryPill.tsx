import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

type CategoryPillProps = {
  label: string;
  icon: string;
  active?: boolean;
  onPress?: () => void;
};

export function CategoryPill({
  label,
  icon,
  active = false,
  onPress,
}: CategoryPillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, active && styles.containerActive]}
    >
      <View style={[styles.iconWrap, active && styles.iconWrapActive]}>
        <Ionicons
          name={icon as any}
          size={18}
          color={active ? "#FFFFFF" : colors.primary}
        />
      </View>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 110,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: "center",
    marginRight: spacing.sm,
  },
  containerActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  iconWrapActive: {
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  labelActive: {
    color: colors.primaryDark,
  },
});