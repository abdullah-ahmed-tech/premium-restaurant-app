import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

type QuantityStepperProps = {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantityStepper({
  value,
  onDecrease,
  onIncrease,
}: QuantityStepperProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onDecrease} style={styles.button}>
        <Ionicons name="remove" size={16} color={colors.textPrimary} />
      </Pressable>

      <Text style={styles.value}>{value}</Text>

      <Pressable onPress={onIncrease} style={[styles.button, styles.buttonAdd]}>
        <Ionicons name="add" size={16} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: radius.round,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  buttonAdd: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  value: {
    minWidth: 20,
    textAlign: "center",
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
});