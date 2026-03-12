import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppButton, AppCard } from "../ui";

type ProfileHeaderCardProps = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  memberSince: string;
};

export function ProfileHeaderCard({
  name,
  email,
  phone,
  avatar,
  memberSince,
}: ProfileHeaderCardProps) {
  const router = useRouter();

  return (
    <AppCard style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <View style={styles.infoWrap}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.meta}>{email}</Text>
          <Text style={styles.meta}>{phone}</Text>
          <Text style={styles.memberSince}>{memberSince}</Text>
        </View>
      </View>

      <View style={styles.buttonWrap}>
        <AppButton
          title="Edit Profile"
          variant="secondary"
          onPress={() => router.push("/profile/edit")}
        />
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: radius.round,
    backgroundColor: colors.surfaceAlt,
  },
  infoWrap: {
    flex: 1,
  },
  name: {
    ...typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: 4,
  },
  meta: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  memberSince: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 4,
  },
  buttonWrap: {
    marginTop: spacing.md,
  },
});