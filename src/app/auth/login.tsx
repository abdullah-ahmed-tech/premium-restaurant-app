import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AuthHeaderCard } from "../../components/shared/AuthHeaderCard";
import { AuthSwitchFooter } from "../../components/shared/AuthSwitchFooter";
import { SocialAuthCard } from "../../components/shared/SocialAuthCard";
import {
  AppButton,
  AppCard,
  AppInput,
  ScreenContainer,
} from "../../components/ui";
import { authUiContent } from "../../features/auth/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("abdullah@example.com");
  const [password, setPassword] = useState("12345678");

  return (
    <ScreenContainer>
      <AuthHeaderCard
        title={authUiContent.loginTitle}
        subtitle={authUiContent.loginSubtitle}
      />

      <AppCard style={styles.formCard}>
        <Text style={styles.formTitle}>Sign In</Text>

        <AppInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.field}
        />

        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          containerStyle={styles.field}
        />

        <Pressable style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </Pressable>

        <AppButton title="Login" />

        <View style={styles.metaBox}>
          <Text style={styles.metaTitle}>Auth Flow Note</Text>
          <Text style={styles.metaText}>
            This login screen is UI-ready and will be connected to real auth APIs
            in backend phase.
          </Text>
        </View>
      </AppCard>

      <SocialAuthCard />

      <AuthSwitchFooter
        text="Don't have an account?"
        actionText="Create one"
        onPress={() => router.push("/auth/register")}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  formCard: {
    marginBottom: spacing.md,
  },
  formTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  field: {
    marginBottom: spacing.md,
  },
  forgotWrap: {
    alignSelf: "flex-end",
    marginBottom: spacing.md,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "700",
  },
  metaBox: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  metaTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 4,
  },
  metaText: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 19,
  },
});