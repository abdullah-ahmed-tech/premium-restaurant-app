import React from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    ViewStyle,
} from "react-native";

import { colors, radius, spacing, typography } from "../../theme";

type AppButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type AppButtonSize = "sm" | "md" | "lg";

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function AppButton({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        sizeStyles[size].container,
        variantStyles[variant].container,
        pressed && !isDisabled ? styles.pressed : null,
        isDisabled ? styles.disabled : null,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "#FFFFFF" : colors.primary}
        />
      ) : (
        <Text
          style={[
            styles.label,
            sizeStyles[size].label,
            variantStyles[variant].label,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.55,
  },
  label: {
    ...typography.body,
  },
});

const sizeStyles = {
  sm: StyleSheet.create({
    container: {
      minHeight: 44,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
    },
  }),
  md: StyleSheet.create({
    container: {
      minHeight: 52,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
    label: {
      fontSize: 16,
      fontWeight: "700",
    },
  }),
  lg: StyleSheet.create({
    container: {
      minHeight: 58,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.md,
    },
    label: {
      fontSize: 17,
      fontWeight: "700",
    },
  }),
};

const variantStyles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
    },
    label: {
      color: "#FFFFFF",
    },
  }),
  secondary: StyleSheet.create({
    container: {
      backgroundColor: colors.primaryLight,
    },
    label: {
      color: colors.primaryDark,
    },
  }),
  outline: StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.border,
    },
    label: {
      color: colors.textPrimary,
    },
  }),
  ghost: StyleSheet.create({
    container: {
      backgroundColor: "transparent",
    },
    label: {
      color: colors.primary,
    },
  }),
};