import React, { forwardRef } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";

import { colors, radius, spacing, typography } from "../../theme";

type AppInputProps = TextInputProps & {
  label?: string;
  error?: string;
  hint?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const AppInput = forwardRef<TextInput, AppInputProps>(
  ({ label, error, hint, containerStyle, style, ...props }, ref) => {
    return (
      <View style={containerStyle}>
        {label ? <Text style={styles.label}>{label}</Text> : null}

        <TextInput
          ref={ref}
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, error ? styles.inputError : null, style]}
          {...props}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {!error && hint ? <Text style={styles.hintText}>{hint}</Text> : null}
      </View>
    );
  }
);

AppInput.displayName = "AppInput";

const styles = StyleSheet.create({
  label: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    fontWeight: "600",
  },
  input: {
    minHeight: 54,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    fontSize: 16,
  },
  inputError: {
    borderColor: colors.error,
  },
  hintText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: 12,
  },
  errorText: {
    marginTop: spacing.xs,
    color: colors.error,
    fontSize: 12,
  },
});