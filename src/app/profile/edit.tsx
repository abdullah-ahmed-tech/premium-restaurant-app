import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { AppButton, AppCard, AppInput, ScreenContainer, SectionHeader } from "../../components/ui";
import { colors, spacing } from "../../theme";

export default function EditProfileScreen() {
  const [name, setName] = useState("Abdullah Ahmed");
  const [email, setEmail] = useState("abdullah@example.com");
  const [phone, setPhone] = useState("+20 100 000 0000");

  return (
    <ScreenContainer>
      <SectionHeader
        title="Edit Profile"
        subtitle="Update account information and personal details"
      />

      <AppCard style={styles.card}>
        <AppInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          placeholder="Enter full name"
          containerStyle={styles.field}
        />

        <AppInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.field}
        />

        <AppInput
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          containerStyle={styles.field}
        />

        <AppButton title="Save Changes" />
      </AppCard>

      <AppCard style={styles.noteCard}>
        <Text style={styles.noteTitle}>Edit Profile Note</Text>
        <Text style={styles.noteText}>
          This screen is currently UI-only. Profile update requests will be connected to backend APIs in the next phase.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  field: {
    marginBottom: spacing.md,
  },
  noteCard: {
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
  },
  noteTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  noteText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});