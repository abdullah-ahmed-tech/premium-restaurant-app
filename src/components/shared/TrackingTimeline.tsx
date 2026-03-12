import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import type { TrackingStep } from "../../features/orders/mock-tracking-data";
import { colors, spacing, typography } from "../../theme";
import { AppCard } from "../ui";

type TrackingTimelineProps = {
  steps: TrackingStep[];
};

function getStepVisual(status: TrackingStep["status"]) {
  switch (status) {
    case "completed":
      return {
        icon: "checkmark",
        circleBg: colors.success,
        circleBorder: colors.success,
        lineColor: colors.success,
        titleColor: colors.textPrimary,
        subtitleColor: colors.textSecondary,
      };
    case "current":
      return {
        icon: "time-outline",
        circleBg: colors.primary,
        circleBorder: colors.primary,
        lineColor: colors.primary,
        titleColor: colors.textPrimary,
        subtitleColor: colors.textSecondary,
      };
    default:
      return {
        icon: "ellipse-outline",
        circleBg: colors.background,
        circleBorder: colors.border,
        lineColor: colors.border,
        titleColor: colors.textMuted,
        subtitleColor: colors.textMuted,
      };
  }
}

export function TrackingTimeline({ steps }: TrackingTimelineProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>Order Progress</Text>

      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const visual = getStepVisual(step.status);

        return (
          <View key={step.id} style={[styles.stepRow, isLast && styles.stepRowLast]}>
            <View style={styles.leftRail}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: visual.circleBg,
                    borderColor: visual.circleBorder,
                  },
                ]}
              >
                <Ionicons
                  name={visual.icon as keyof typeof Ionicons.glyphMap}
                  size={14}
                  color={step.status === "upcoming" ? colors.textMuted : "#FFFFFF"}
                />
              </View>

              {!isLast ? (
                <View
                  style={[
                    styles.line,
                    { backgroundColor: visual.lineColor },
                  ]}
                />
              ) : null}
            </View>

            <View style={styles.content}>
              <View style={styles.headerRow}>
                <Text style={[styles.stepTitle, { color: visual.titleColor }]}>
                  {step.title}
                </Text>
                <Text style={styles.time}>{step.time}</Text>
              </View>

              <Text style={[styles.stepSubtitle, { color: visual.subtitleColor }]}>
                {step.subtitle}
              </Text>
            </View>
          </View>
        );
      })}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: spacing.md,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  stepRowLast: {
    marginBottom: 0,
  },
  leftRail: {
    width: 28,
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 2,
    flex: 1,
    minHeight: 38,
    marginTop: 6,
    borderRadius: 999,
  },
  content: {
    flex: 1,
    paddingTop: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "800",
    flex: 1,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
  },
  stepSubtitle: {
    ...typography.bodySmall,
    lineHeight: 20,
  },
});