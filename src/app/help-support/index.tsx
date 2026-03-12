import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppButton, AppCard, AppInput, ScreenContainer, SectionHeader } from "../../components/ui";
import { colors, spacing, typography } from "../../theme";

export default function HelpSupportScreen() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ScreenContainer>
      <SectionHeader
        title="Help & Support"
        subtitle="Get assistance for orders, reservations, and account issues"
      />

      <AppCard style={styles.contactCard}>
        <Text style={styles.cardTitle}>Support Channels</Text>

        <View style={styles.channelRow}>
          <Text style={styles.channelLabel}>Phone</Text>
          <Text style={styles.channelValue}>+20 100 111 2222</Text>
        </View>

        <View style={styles.channelRow}>
          <Text style={styles.channelLabel}>Email</Text>
          <Text style={styles.channelValue}>support@brewandbite.com</Text>
        </View>

        <View style={styles.channelRow}>
          <Text style={styles.channelLabel}>Hours</Text>
          <Text style={styles.channelValue}>Daily • 9:00 AM - 12:00 AM</Text>
        </View>
      </AppCard>

      <AppCard style={styles.formCard}>
        <Text style={styles.cardTitle}>Send a Support Request</Text>

        <AppInput
          label="Subject"
          value={subject}
          onChangeText={setSubject}
          placeholder="Order issue, payment problem, reservation request..."
          containerStyle={styles.field}
        />

        <AppInput
          label="Message"
          value={message}
          onChangeText={setMessage}
          placeholder="Write your support message here..."
          multiline
          numberOfLines={5}
          style={styles.textArea}
          containerStyle={styles.field}
        />

        <AppButton title="Submit Request" />
      </AppCard>

      <AppCard style={styles.noteCard}>
        <Text style={styles.noteTitle}>Support Flow Note</Text>
        <Text style={styles.noteText}>
          This support form is currently part of the frontend flow only. Ticket creation, live chat, and support handling will be connected in the backend phase.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    marginBottom: spacing.md,
  },
  formCard: {
    marginBottom: spacing.md,
  },
  cardTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  channelRow: {
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  channelLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  channelValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  field: {
    marginBottom: spacing.md,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
    paddingTop: spacing.md,
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