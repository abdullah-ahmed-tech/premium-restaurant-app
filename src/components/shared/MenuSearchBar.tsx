import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

type MenuSearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
};

export function MenuSearchBar({ value, onChangeText }: MenuSearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color={colors.textSecondary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search menu items..."
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
      {value ? (
        <Ionicons name="close-circle" size={18} color={colors.textMuted} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "500",
  },
});