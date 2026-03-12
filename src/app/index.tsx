import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  AppBadge,
  AppButton,
  AppCard,
  AppDivider,
  AppInput,
  ScreenContainer,
  SectionHeader,
} from "../components/ui";
import { colors, spacing } from "../theme";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="Restaurant UI Kit"
        subtitle="Base components ready for premium app screens"
        actionLabel="Preview"
      />

      <AppCard style={styles.block}>
        <Text style={styles.title}>Buttons</Text>
        <View style={styles.gap}>
          <AppButton title="Primary Button" />
          <AppButton title="Secondary Button" variant="secondary" />
          <AppButton title="Outline Button" variant="outline" />
          <AppButton title="Ghost Button" variant="ghost" />
        </View>
      </AppCard>

      <AppCard style={styles.block}>
        <Text style={styles.title}>Inputs</Text>
        <View style={styles.gap}>
          <AppInput label="Email" placeholder="Enter your email" />
          <AppInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
      </AppCard>

      <AppCard style={styles.block}>
        <Text style={styles.title}>Badges</Text>
        <View style={styles.badgesRow}>
          <AppBadge label="Popular" variant="primary" />
          <AppBadge label="Delivered" variant="success" />
          <AppBadge label="Pending" variant="warning" />
          <AppBadge label="Canceled" variant="error" />
        </View>
      </AppCard>

      <AppCard style={styles.block}>
        <Text style={styles.title}>Divider</Text>
        <View style={styles.gap}>
          <Text style={styles.body}>Section above divider</Text>
          <AppDivider />
          <Text style={styles.body}>Section below divider</Text>
        </View>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  body: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  gap: {
    gap: spacing.sm,
  },
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
});