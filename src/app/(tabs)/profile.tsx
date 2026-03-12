import React from "react";

import { StyleSheet, Text } from "react-native";
import { LoyaltyProgressCard } from "../../components/shared/LoyaltyProgressCard";
import { OrderHistoryCard } from "../../components/shared/OrderHistoryCard";
import { ProfileHeaderCard } from "../../components/shared/ProfileHeaderCard";
import { ProfileMenuList } from "../../components/shared/ProfileMenuList";
import { SavedAddressCard } from "../../components/shared/SavedAddressCard";
import { AppCard, ScreenContainer, SectionHeader } from "../../components/ui";
import {
  loyaltyData,
  orderHistory,
  profileMenuItems,
  profileUser,
  savedAddresses,
} from "../../features/profile/mock-data";
import { colors, spacing } from "../../theme";

export default function ProfileScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="My Profile"
        subtitle="Account, rewards, addresses, and recent activity"
      />

      <ProfileHeaderCard
        name={profileUser.name}
        email={profileUser.email}
        phone={profileUser.phone}
        avatar={profileUser.avatar}
        memberSince={profileUser.memberSince}
      />

      <LoyaltyProgressCard
        points={loyaltyData.points}
        nextRewardAt={loyaltyData.nextRewardAt}
        tier={loyaltyData.tier}
        rewardTitle={loyaltyData.rewardTitle}
      />

      <SectionHeader
        title="Saved Addresses"
        subtitle="Customer delivery locations"
        actionLabel="Add New"
      />

      {savedAddresses.map((address) => (
        <SavedAddressCard
          key={address.id}
          label={address.label}
          addressLine={address.addressLine}
          area={address.area}
          isDefault={address.isDefault}
        />
      ))}

      <SectionHeader
        title="Recent Orders"
        subtitle="Latest order history shown on profile"
        actionLabel="View All"
      />

      {orderHistory.map((order) => (
        <OrderHistoryCard
          key={order.id}
          orderNumber={order.orderNumber}
          status={order.status}
          total={order.total}
          date={order.date}
          itemsCount={order.itemsCount}
        />
      ))}

      <SectionHeader
        title="More"
        subtitle="Additional account-related sections"
      />

      <ProfileMenuList items={profileMenuItems} />

      <AppCard style={styles.footerCard}>
        <Text style={styles.footerTitle}>Profile Coverage</Text>
        <Text style={styles.footerText}>
          This screen currently covers account overview, loyalty, saved
          addresses, order history, notifications entry point, payment methods,
          reviews, support, and restaurant information.
        </Text>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  footerCard: {
    marginBottom: spacing.xl,
  },
  footerTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 21,
  },
});