import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "../../theme";
import { AppBadge, AppCard } from "../ui";
import { QuantityStepper } from "./QuantityStepper";

type CartItemCardProps = {
  name: string;
  category: string;
  price: number;
  qty: number;
  image: string;
  notes?: string;
  selectedOptions?: { id: string; label: string; price: number }[];
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItemCard({
  name,
  category,
  price,
  qty,
  image,
  notes,
  selectedOptions,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  const optionsTotal =
    selectedOptions?.reduce((sum, option) => sum + option.price, 0) ?? 0;

  const lineTotal = (price + optionsTotal) * qty;

  return (
    <AppCard style={styles.card} padded={false}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.textWrap}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>

          <Pressable onPress={onRemove} style={styles.removeButton}>
            <Ionicons name="trash-outline" size={18} color={colors.error} />
          </Pressable>
        </View>

        {selectedOptions && selectedOptions.length > 0 ? (
          <View style={styles.optionsWrap}>
            {selectedOptions.map((option) => (
              <AppBadge
                key={option.id}
                label={`${option.label} +${option.price} EGP`}
                variant="neutral"
              />
            ))}
          </View>
        ) : null}

        {notes ? <Text style={styles.notes}>Note: {notes}</Text> : null}

        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.totalPrice}>{lineTotal} EGP</Text>
            <Text style={styles.basePrice}>
              Base {price} EGP {optionsTotal > 0 ? `• Options ${optionsTotal} EGP` : ""}
            </Text>
          </View>

          <QuantityStepper
            value={qty}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: colors.surfaceAlt,
  },
  content: {
    padding: spacing.md,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  textWrap: {
    flex: 1,
  },
  name: {
    ...typography.body,
    color: colors.textPrimary,
    fontWeight: "800",
    marginBottom: 4,
  },
  category: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },
  removeButton: {
    width: 34,
    height: 34,
    borderRadius: radius.round,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDECEC",
  },
  optionsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  notes: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: spacing.md,
    fontStyle: "italic",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  totalPrice: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "800",
  },
  basePrice: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
});