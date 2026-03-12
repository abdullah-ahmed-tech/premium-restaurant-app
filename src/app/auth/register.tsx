import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

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

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("Abdullah Ahmed");
  const [email, setEmail] = useState("abdullah@example.com");
  const [phone, setPhone] = useState("+20 100 000 0000");
  const [password, setPassword] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");

  return (
    <ScreenContainer>
      <AuthHeaderCard
        title={authUiContent.registerTitle}
        subtitle={authUiContent.registerSubtitle}
      />

      <AppCard style={styles.formCard}>
        <Text style={styles.formTitle}>Create Account</Text>

        <AppInput
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          containerStyle={styles.field}
        />

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
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          containerStyle={styles.field}
        />

        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Create password"
          secureTextEntry
          containerStyle={styles.field}
        />

        <AppInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm password"
          secureTextEntry
          containerStyle={styles.field}
        />

        <AppButton title="Create Account" />

        <Text style={styles.termsText}>
          By creating an account, you agree to the app terms, privacy policy,
          and future backend authentication flow.
        </Text>
      </AppCard>

      <SocialAuthCard />

      <AuthSwitchFooter
        text="Already have an account?"
        actionText="Login"
        onPress={() => router.push("/auth/login")}
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
  termsText: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 19,
  },
});