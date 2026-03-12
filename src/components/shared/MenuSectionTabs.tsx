import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { colors, radius, spacing } from "../../theme";

type MenuSectionTabsProps = {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (tabId: string) => void;
};

export function MenuSectionTabs({
  tabs,
  activeTab,
  onChange,
}: MenuSectionTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.md,
    paddingRight: spacing.md,
  },
  tab: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.round,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    marginRight: spacing.sm,
  },
  tabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  labelActive: {
    color: "#FFFFFF",
  },
});