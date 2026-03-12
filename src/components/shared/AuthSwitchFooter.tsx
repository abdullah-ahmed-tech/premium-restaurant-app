import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, spacing } from "../../theme";

type AuthSwitchFooterProps = {
  text: string;
  actionText: string;
  onPress: () => void;
};

export function AuthSwitchFooter({
  text,
  actionText,
  onPress,
}: AuthSwitchFooterProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.actionText}>{actionText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xs,
    marginBottom: spacing.xl,
  },
  text: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "500",
  },
  actionText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "800",
  },
});