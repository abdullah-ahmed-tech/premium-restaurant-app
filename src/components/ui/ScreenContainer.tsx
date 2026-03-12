import React, { ReactNode } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";

import { colors, spacing } from "../../theme";

type ScreenContainerProps = {
  children: ReactNode;
  scrollable?: boolean;
  withPadding?: boolean;
};

export function ScreenContainer({
  children,
  scrollable = true,
  withPadding = true,
}: ScreenContainerProps) {
  const content = (
    <View style={[styles.content, withPadding && styles.padded]}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {scrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {content}
          </ScrollView>
        ) : (
          content
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  padded: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
});