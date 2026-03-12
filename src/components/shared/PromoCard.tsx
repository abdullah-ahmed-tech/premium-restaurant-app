import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type PromoCardProps = {
  title: string;
  subtitle: string;
  code: string;
};

export function PromoCard({ title, subtitle, code }: PromoCardProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconWrap}>
          <Ionicons name="pricetags-outline" size={20} color={colors.primary} />
        </View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>Use code</Text>
          <Text style={styles.codeValue}>{code}</Text>
        </View>

        <View style={styles.buttonWrap}>
          <AppButton title="Apply" variant="ghost" fullWidth={false} />
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    ...typography.body,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  codeBox: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
  },
  codeLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  codeValue: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.primaryDark,
  },
  buttonWrap: {
    justifyContent: "center",
  },
});