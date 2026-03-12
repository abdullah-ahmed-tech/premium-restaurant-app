import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ProductDetailsHero } from "../../components/shared/ProductDetailsHero";
import { ProductIngredientsCard } from "../../components/shared/ProductIngredientsCard";
import { ProductOptionSelector } from "../../components/shared/ProductOptionSelector";
import { ProductReviewPreviewCard } from "../../components/shared/ProductReviewPreviewCard";
import { QuantityStepper } from "../../components/shared/QuantityStepper";
import { AppButton, AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import { productDetailsMap } from "../../features/product/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function ProductDetailsScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const productId = Array.isArray(params.id) ? params.id[0] : params.id;

  const product = productId ? productDetailsMap[productId] : undefined;

  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleOption = (optionId: string) => {
    setSelectedOptionIds((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const optionsTotal = useMemo(() => {
    if (!product) return 0;

    return product.options
      .filter((option) => selectedOptionIds.includes(option.id))
      .reduce((sum, option) => sum + option.price, 0);
  }, [product, selectedOptionIds]);

  const grandTotal = useMemo(() => {
    if (!product) return 0;
    return (product.price + optionsTotal) * quantity;
  }, [product, optionsTotal, quantity]);

  if (!product) {
    return (
      <ScreenContainer>
        <AppCard style={styles.notFoundCard}>
          <Text style={styles.notFoundTitle}>Product not found</Text>
          <Text style={styles.notFoundText}>
            This product is not available in the current mock details map.
          </Text>
        </AppCard>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ProductDetailsHero
        image={product.image}
        category={product.category}
        name={product.name}
        description={product.description}
        rating={product.rating}
        reviewsCount={product.reviewsCount}
        calories={product.calories}
        prepTime={product.prepTime}
        isPopular={product.isPopular}
        isRecommended={product.isRecommended}
      />

      <ProductIngredientsCard
        longDescription={product.longDescription}
        ingredients={product.ingredients}
      />

      <SectionHeader
        title="Customize Your Item"
        subtitle="Select extras and preparation options"
      />

      <ProductOptionSelector
        title="Available Options"
        options={product.options}
        selectedOptionIds={selectedOptionIds}
        onToggleOption={toggleOption}
      />

      <ProductReviewPreviewCard reviews={product.reviews} />

      <AppCard style={styles.checkoutCard}>
        <View style={styles.checkoutTopRow}>
          <View>
            <Text style={styles.checkoutTitle}>Order Setup</Text>
            <Text style={styles.checkoutSubtitle}>
              Base {product.price} EGP {optionsTotal > 0 ? `• Options ${optionsTotal} EGP` : ""}
            </Text>
          </View>

          <QuantityStepper
            value={quantity}
            onDecrease={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            onIncrease={() => setQuantity((prev) => prev + 1)}
          />
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalValue}>{grandTotal} EGP</Text>
        </View>

        <AppButton title="Add to Cart" />
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  notFoundCard: {
    marginTop: spacing.xl,
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  notFoundTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "900",
    marginBottom: spacing.xs,
  },
  notFoundText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    maxWidth: 260,
    lineHeight: 21,
  },
  checkoutCard: {
    marginBottom: spacing.xl,
  },
  checkoutTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  checkoutTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  checkoutSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "900",
  },
});