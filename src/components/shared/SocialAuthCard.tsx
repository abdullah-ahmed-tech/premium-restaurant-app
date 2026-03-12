import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

export function SocialAuthCard() {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Quick Access</Text>
      <Text style={styles.subtitle}>
        Social authentication will be connected later in backend phase.
      </Text>

      <View style={styles.buttonsWrap}>
        <View style={styles.buttonItem}>
          <AppButton title="Continue with Google" variant="outline" />
        </View>

        <View style={styles.buttonItem}>
          <AppButton title="Continue with Apple" variant="outline" />
        </View>
      </View>

      <View style={styles.noteRow}>
        <Ionicons
          name="information-circle-outline"
          size={16}
          color={colors.textMuted}
        />
        <Text style={styles.noteText}>UI only for now</Text>
      </View>
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
    marginBottom: 4,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  buttonsWrap: {
    gap: spacing.sm,
  },
  buttonItem: {
    width: "100%",
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
  },
  noteText: {
    marginLeft: spacing.xs,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "700",
  },
});