import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";

type NotificationItemCardProps = {
  title: string;
  body: string;
  type: "offer" | "order" | "loyalty" | "general";
  time: string;
  isRead: boolean;
};

function getNotificationMeta(type: NotificationItemCardProps["type"]) {
  switch (type) {
    case "offer":
      return { icon: "pricetags-outline", badge: "Offer" };
    case "order":
      return { icon: "cube-outline", badge: "Order" };
    case "loyalty":
      return { icon: "gift-outline", badge: "Loyalty" };
    default:
      return { icon: "notifications-outline", badge: "Update" };
  }
}

export function NotificationItemCard({
  title,
  body,
  type,
  time,
  isRead,
}: NotificationItemCardProps) {
  const meta = getNotificationMeta(type);

  return (
    <AppCard style={[styles.card, !isRead && styles.cardUnread]}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <Ionicons
            name={meta.icon as keyof typeof Ionicons.glyphMap}
            size={20}
            color={colors.primary}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={styles.title}>{title}</Text>
            <AppBadge label={meta.badge} variant={!isRead ? "primary" : "neutral"} />
          </View>

          <Text style={styles.body}>{body}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  cardUnread: {
    borderColor: "#EED8C8",
    backgroundColor: "#FFFCFA",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    flex: 1,
  },
  body: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  time: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "700",
  },
});