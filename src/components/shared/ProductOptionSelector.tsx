import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type ProductOptionSelectorProps = {
  title: string;
  options: {
    id: string;
    label: string;
    price: number;
  }[];
  selectedOptionIds: string[];
  onToggleOption: (optionId: string) => void;
};

export function ProductOptionSelector({
  title,
  options,
  selectedOptionIds,
  onToggleOption,
}: ProductOptionSelectorProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {options.map((option) => {
        const selected = selectedOptionIds.includes(option.id);

        return (
          <Pressable
            key={option.id}
            onPress={() => onToggleOption(option.id)}
            style={[styles.row, selected && styles.rowSelected]}
          >
            <View style={styles.textWrap}>
              <Text style={[styles.label, selected && styles.labelSelected]}>
                {option.label}
              </Text>
              <Text style={styles.price}>+ {option.price} EGP</Text>
            </View>

            <View style={[styles.check, selected && styles.checkSelected]}>
              {selected ? <View style={styles.checkDot} /> : null}
            </View>
          </Pressable>
        );
      })}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  rowSelected: {
    backgroundColor: "#FFFCFA",
  },
  textWrap: {
    flex: 1,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  labelSelected: {
    color: colors.primaryDark,
  },
  price: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
  check: {
    width: 22,
    height: 22,
    borderRadius: radius.round,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  checkSelected: {
    borderColor: colors.primary,
  },
  checkDot: {
    width: 10,
    height: 10,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
  },
});