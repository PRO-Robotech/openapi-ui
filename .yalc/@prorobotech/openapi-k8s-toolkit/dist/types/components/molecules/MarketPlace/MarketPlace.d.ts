import { FC } from 'react';
export type TMarketPlaceProps = {
    clusterName?: string;
    namespace?: string;
    baseApiGroup: string;
    baseApiVersion: string;
    mpResourceName: string;
    mpResourceKind: string;
    baseprefix?: string;
};
export declare const MarketPlace: FC<TMarketPlaceProps>;
