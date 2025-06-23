import { FC } from 'react';
import { TBreadcrumbResponse } from './types';
export type TManageableBreadcrumbsProps = {
    data: TBreadcrumbResponse;
    replaceValues: Record<string, string | undefined>;
    pathname: string;
};
export declare const ManageableBreadcrumbs: FC<TManageableBreadcrumbsProps>;
export type TManageableBreadcrumbsWithDataProviderProps = {
    uri: string;
    refetchInterval?: number | false;
    isEnabled?: boolean;
    replaceValues: Record<string, string | undefined>;
    pathname: string;
};
export declare const ManageableBreadcrumbsWithDataProvider: FC<TManageableBreadcrumbsWithDataProviderProps>;
