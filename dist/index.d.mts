import React from 'react';

interface RealEstateCardProps {
    imageUrl: string;
    address: string;
    priceRange: string;
    confidenceScore: string;
}
declare const RealEstateCard: React.FC<RealEstateCardProps>;

export { RealEstateCard, type RealEstateCardProps };
