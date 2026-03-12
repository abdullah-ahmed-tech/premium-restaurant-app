import React from "react";

import { StyleSheet, Text } from "react-native";
import { NotificationItemCard } from "../../components/shared/NotificationItemCard";
import { AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import { notificationsData } from "../../features/notifications/mock-data";
import { colors, spacing } from "../../theme";

export default function NotificationsScreen() {
  const unreadCount = notificationsData.filter((item) => !item.isRead).length;

  return (
    <ScreenContainer>
      <SectionHeader
        title="Notifications"
        subtitle="Offers, order updates, and loyalty alerts"
      />

      <AppCard style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Notification Center</Text>
        <Text style={styles.summaryText}>
          You currently have {unreadCount} unread notifications in this UI flow.
        </Text>
      </AppCard>

      {notificationsData.map((item) => (
        <NotificationItemCard
          key={item.id}
          title={item.title}
          body={item.body}
          type={item.type}
          time={item.time}
          isRead={item.isRead}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    marginBottom: spacing.md,
  },
  summaryTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  summaryText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});