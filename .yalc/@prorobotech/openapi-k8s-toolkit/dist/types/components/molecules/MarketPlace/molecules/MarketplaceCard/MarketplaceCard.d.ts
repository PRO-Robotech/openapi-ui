import { FC } from 'react';
import { TMarketPlacePanel } from '../../../../../localTypes/marketplace';
export type TMarketplaceCardProps = {
    baseprefix?: string;
    clusterName: string;
    namespace: string;
    isEditMode?: boolean;
    onDeleteClick?: () => void;
    onEditClick?: () => void;
    addedMode?: boolean;
} & Omit<TMarketPlacePanel, 'hidden'>;
export declare const MarketplaceCard: FC<TMarketplaceCardProps>;
