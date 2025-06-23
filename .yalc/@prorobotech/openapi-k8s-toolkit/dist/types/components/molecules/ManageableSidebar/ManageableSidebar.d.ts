import { FC } from 'react';
import { TSidebarResponse } from './types';
export type TManageableSidebarProps = {
    data: TSidebarResponse;
    replaceValues: Record<string, string | undefined>;
    pathname: string;
    noMarginTop?: boolean;
};
export declare const ManageableSidebar: FC<TManageableSidebarProps>;
export type TManageableSidebarWithDataProviderProps = {
    uri: string;
    refetchInterval?: number | false;
    isEnabled?: boolean;
    replaceValues: Record<string, string | undefined>;
    pathname: string;
    hidden?: boolean;
    noMarginTop?: boolean;
};
export declare const ManageableSidebarWithDataProvider: FC<TManageableSidebarWithDataProviderProps>;
