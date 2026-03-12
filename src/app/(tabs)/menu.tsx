import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MenuProductRowCard } from "../../components/shared/MenuProductRowCard";
import { MenuSearchBar } from "../../components/shared/MenuSearchBar";
import { MenuSectionTabs } from "../../components/shared/MenuSectionTabs";
import { AppBadge, AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import { menuCategories, menuItems } from "../../features/menu/mock-data";
import { colors, spacing, typography } from "../../theme";

export default function MenuScreen() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id ?? "coffee");
  const [cartMap, setCartMap] = useState<Record<string, number>>({});

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.categoryId === activeCategory;
      const normalized = search.trim().toLowerCase();

      const matchesSearch =
        normalized.length === 0 ||
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalItemsInCart = useMemo(() => {
    return Object.values(cartMap).reduce((sum, qty) => sum + qty, 0);
  }, [cartMap]);

  const totalPrice = useMemo(() => {
    return Object.entries(cartMap).reduce((sum, [id, qty]) => {
      const item = menuItems.find((menuItem) => menuItem.id === id);
      if (!item) return sum;
      return sum + item.price * qty;
    }, 0);
  }, [cartMap]);

  const increaseQty = (itemId: string) => {
    setCartMap((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) + 1,
    }));
  };

  const decreaseQty = (itemId: string) => {
    setCartMap((prev) => {
      const current = prev[itemId] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }

      return {
        ...prev,
        [itemId]: current - 1,
      };
    });
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Explore Menu"
        subtitle="Interactive browsing with quick add-to-cart flow"
      />

      <AppCard style={styles.summaryCard}>
        <View style={styles.summaryTopRow}>
          <View>
            <Text style={styles.summaryTitle}>Today's Menu Experience</Text>
            <Text style={styles.summarySubtitle}>
              Browse categories, search items, and add instantly.
            </Text>
          </View>
          <AppBadge label={`${totalItemsInCart} items`} variant="primary" />
        </View>

        <View style={styles.summaryBottomRow}>
          <View>
            <Text style={styles.summaryTotalLabel}>Current total</Text>
            <Text style={styles.summaryTotalValue}>{totalPrice} EGP</Text>
          </View>

          <View style={styles.rightMeta}>
            <Text style={styles.rightMetaText}>Live mock cart</Text>
            <Text style={styles.rightMetaSubText}>Backend later</Text>
          </View>
        </View>
      </AppCard>

      <MenuSearchBar value={search} onChangeText={setSearch} />

      <MenuSectionTabs
        tabs={menuCategories}
        activeTab={activeCategory}
        onChange={setActiveCategory}
      />

      <SectionHeader
        title="Available Items"
        subtitle={
          search
            ? `Results for "${search}"`
            : "Products displayed based on selected category"
        }
      />

      {filteredItems.length === 0 ? (
        <AppCard style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No items found</Text>
          <Text style={styles.emptyText}>
            Try another search term or switch to a different category.
          </Text>
        </AppCard>
      ) : (
        filteredItems.map((item) => (
          <MenuProductRowCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            reviewsCount={item.reviewsCount}
            image={item.image}
            isPopular={item.isPopular}
            isRecommended={item.isRecommended}
            calories={item.calories}
            quantity={cartMap[item.id] ?? 0}
            onIncrease={() => increaseQty(item.id)}
            onDecrease={() => decreaseQty(item.id)}
          />
        ))
      )}

      <View style={styles.bottomSpacing} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    marginBottom: spacing.md,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  summaryTitle: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  summarySubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  summaryBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: spacing.md,
  },
  summaryTotalLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  summaryTotalValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "800",
  },
  rightMeta: {
    alignItems: "flex-end",
  },
  rightMetaText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  rightMetaSubText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  emptyCard: {
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    maxWidth: 260,
  },
  bottomSpacing: {
    height: spacing.xl,
  },
});