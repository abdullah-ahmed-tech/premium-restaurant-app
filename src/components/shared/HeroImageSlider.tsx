import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, radius, spacing } from "../../theme";

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth - 32;
const SLIDE_HEIGHT = 230;

type HeroSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
};

type HeroImageSliderProps = {
  slides: HeroSlide[];
};

export function HeroImageSlider({ slides }: HeroImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeSlides = useMemo(() => slides ?? [], [slides]);

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / CARD_WIDTH);
    setActiveIndex(index);
  };

  if (!safeSlides.length) return null;

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH}
        snapToAlignment="start"
        onMomentumScrollEnd={onScrollEnd}
        contentContainerStyle={styles.scrollContent}
      >
        {safeSlides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <ImageBackground
              source={{ uri: slide.image }}
              style={styles.image}
              imageStyle={styles.imageInner}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.06)", "rgba(0,0,0,0.68)"]}
                style={styles.overlay}
              >
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{slide.title}</Text>
                </View>

                <View>
                  <Text style={styles.heroTitle}>Brew & Bite Cafe</Text>
                  <Text style={styles.heroSubtitle}>{slide.subtitle}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsRow}>
        {safeSlides.map((slide, index) => (
          <View
            key={slide.id}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
  },
  scrollContent: {
    paddingRight: spacing.md,
  },
  slide: {
    width: CARD_WIDTH,
    height: SLIDE_HEIGHT,
    marginRight: spacing.md,
  },
  image: {
    flex: 1,
    borderRadius: radius.xl,
    overflow: "hidden",
  },
  imageInner: {
    borderRadius: radius.xl,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.lg,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    lineHeight: 24,
    maxWidth: "92%",
    fontWeight: "500",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.round,
    backgroundColor: "#D8D8D8",
  },
  dotActive: {
    width: 22,
    backgroundColor: colors.primary,
  },
});