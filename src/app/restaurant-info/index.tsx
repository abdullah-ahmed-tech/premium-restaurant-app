import React from "react";

import { BranchInfoCard } from "../../components/shared/BranchInfoCard";
import { RestaurantInfoOverviewCard } from "../../components/shared/RestaurantInfoOverviewCard";
import { ScreenContainer, SectionHeader } from "../../components/ui";
import {
    restaurantBranches,
    restaurantInfo,
} from "../../features/restaurant-info/mock-data";

export default function RestaurantInfoScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="Restaurant Info"
        subtitle="Brand overview, contact details, and branches"
      />

      <RestaurantInfoOverviewCard
        brandName={restaurantInfo.brandName}
        description={restaurantInfo.description}
        cuisine={restaurantInfo.cuisine}
        deliveryTime={restaurantInfo.deliveryTime}
        averageRating={restaurantInfo.averageRating}
        reviewsLabel={restaurantInfo.reviewsLabel}
        supportEmail={restaurantInfo.supportEmail}
        instagram={restaurantInfo.instagram}
      />

      <SectionHeader
        title="Branches"
        subtitle="Available locations and working hours"
      />

      {restaurantBranches.map((branch) => (
        <BranchInfoCard
          key={branch.id}
          name={branch.name}
          address={branch.address}
          hours={branch.hours}
          phone={branch.phone}
        />
      ))}
    </ScreenContainer>
  );
}