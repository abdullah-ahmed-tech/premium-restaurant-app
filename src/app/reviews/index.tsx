import React from "react";

import { ReviewItemCard } from "../../components/shared/ReviewItemCard";
import { ReviewSummaryCard } from "../../components/shared/ReviewSummaryCard";
import { ScreenContainer, SectionHeader } from "../../components/ui";
import {
    recentReviews,
    reviewBreakdown,
    reviewSummary,
} from "../../features/reviews/mock-data";

export default function ReviewsScreen() {
  return (
    <ScreenContainer>
      <SectionHeader
        title="Reviews & Ratings"
        subtitle="Customer feedback and reputation overview"
      />

      <ReviewSummaryCard
        averageRating={reviewSummary.averageRating}
        totalReviews={reviewSummary.totalReviews}
        recommendationRate={reviewSummary.recommendationRate}
        breakdown={reviewBreakdown}
      />

      <SectionHeader
        title="Recent Reviews"
        subtitle="Latest feedback shown to the customer"
      />

      {recentReviews.map((review) => (
        <ReviewItemCard
          key={review.id}
          userName={review.userName}
          rating={review.rating}
          date={review.date}
          comment={review.comment}
          itemName={review.itemName}
        />
      ))}
    </ScreenContainer>
  );
}