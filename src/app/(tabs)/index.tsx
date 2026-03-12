import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { CategoryPill } from "../../components/shared/CategoryPill";
import { HomeHero } from "../../components/shared/HomeHero";
import { ProductCard } from "../../components/shared/ProductCard";
import { PromoCard } from "../../components/shared/PromoCard";
import { RestaurantInfoHighlightCard } from "../../components/shared/RestaurantInfoHighlightCard";
import { AppBadge, AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
  featuredProducts,
  homeCategories,
  loyaltySummary,
  popularProducts,
  promoOffers,
  restaurantQuickInfo,
} from "../../features/home/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(homeCategories[0]?.id ?? "1");

  return (
    <ScreenContainer>
      <HomeHero
        restaurantName={restaurantQuickInfo.name}
        openHours={restaurantQuickInfo.openHours}
        deliveryTime={restaurantQuickInfo.deliveryTime}
        rating={restaurantQuickInfo.rating}
        reviews={restaurantQuickInfo.reviews}
      />

      <AppCard style={styles.loyaltyCard}>
        <View style={styles.loyaltyTopRow}>
          <View>
            <Text style={styles.loyaltyTitle}>Loyalty Rewards</Text>
            <Text style={styles.loyaltySubtitle}>
              You have {loyaltySummary.points} points available.
            </Text>
          </View>
          <AppBadge label="Member" variant="success" />
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.min(
                  (loyaltySummary.points / loyaltySummary.nextRewardAt) * 100,
                  100
                )}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.progressText}>
          {loyaltySummary.nextRewardAt - loyaltySummary.points} points left to unlock your next reward.
        </Text>
      </AppCard>

      <SectionHeader
        title="Browse Categories"
        subtitle="Start with your favorite section"
        actionLabel="See All"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {homeCategories.map((item) => (
          <CategoryPill
            key={item.id}
            label={item.name}
            icon={item.icon}
            active={activeCategory === item.id}
            onPress={() => setActiveCategory(item.id)}
          />
        ))}
      </ScrollView>

      <SectionHeader
        title="Featured Today"
        subtitle="Top picks curated for your customers"
        actionLabel="View Menu"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            image={product.image}
            isPopular={product.isPopular}
            isNew={product.isNew}
          />
        ))}
      </ScrollView>

      <SectionHeader
        title="Offers & Coupons"
        subtitle="Promotions visible directly from home"
      />

      <View style={styles.promosWrap}>
        {promoOffers.map((offer) => (
          <PromoCard
            key={offer.id}
            title={offer.title}
            subtitle={offer.subtitle}
            code={offer.code}
          />
        ))}
      </View>

      <SectionHeader
        title="Popular Right Now"
        subtitle="Best-selling items your users will notice first"
        actionLabel="Explore"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            image={product.image}
            isPopular={product.isPopular}
            isNew={product.isNew}
          />
        ))}
      </ScrollView>

      <SectionHeader
        title="Restaurant Info"
        subtitle="Quick details shown to the user from home"
      />

      <RestaurantInfoHighlightCard
        brandName={restaurantQuickInfo.name}
        hours={restaurantQuickInfo.openHours}
        deliveryTime={restaurantQuickInfo.deliveryTime}
        rating={`${restaurantQuickInfo.rating} • ${restaurantQuickInfo.reviews}`}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  horizontalList: {
    paddingBottom: spacing.lg,
    paddingRight: spacing.md,
  },
  loyaltyCard: {
    marginBottom: spacing.lg,
  },
  loyaltyTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  loyaltyTitle: {
    ...typography.body,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  loyaltySubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceAlt,
    overflow: "hidden",
    marginBottom: spacing.sm,
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  progressText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  promosWrap: {
    marginBottom: spacing.sm,
  },
});