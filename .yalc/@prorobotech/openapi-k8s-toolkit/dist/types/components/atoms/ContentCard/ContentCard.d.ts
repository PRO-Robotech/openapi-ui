import { FC, ReactNode } from 'react';
export type TContentCardProps = {
    children?: ReactNode;
    flexGrow?: number;
    displayFlex?: boolean;
    flexFlow?: string;
};
export declare const ContentCard: FC<TContentCardProps>;
