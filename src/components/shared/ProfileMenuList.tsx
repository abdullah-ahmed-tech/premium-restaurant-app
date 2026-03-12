import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type ProfileMenuListItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

type ProfileMenuListProps = {
  items: ProfileMenuListItem[];
};

function getRouteByTitle(title: string) {
  switch (title) {
    case "Login / Register":
      return "/auth/login";
    case "Notifications":
      return "/notifications";
    case "Payment Methods":
      return "/checkout";
    case "Reviews & Ratings":
      return "/reviews";
    case "Help & Support":
      return "/help-support";
    case "Restaurant Info":
      return "/restaurant-info";
    case "Operations Dashboard":
      return "/operations";
    default:
      return null;
  }
}

export function ProfileMenuList({ items }: ProfileMenuListProps) {
  const router = useRouter();

  return (
    <AppCard style={styles.card} padded={false}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const route = getRouteByTitle(item.title);

        return (
          <Pressable
            key={item.id}
            style={[styles.row, isLast && styles.rowLast]}
            onPress={() => {
              if (route) router.push(route as never);
            }}
          >
            <View style={styles.leftWrap}>
              <View style={styles.iconWrap}>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={18}
                  color={colors.primary}
                />
              </View>

              <View style={styles.textWrap}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textMuted}
            />
          </Pressable>
        );
      })}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  leftWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: radius.round,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: 2,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});