import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { TLink } from './types';
export declare const prepareDataForManageableBreadcrumbs: ({ data, replaceValues, pathname, }: {
    data: {
        pathToMatch: string;
        breadcrumbItems: TLink[];
    }[];
    replaceValues: Record<string, string | undefined>;
    pathname: string;
}) => {
    pathToMatch: string;
    breadcrumbItems: BreadcrumbItemType[];
} | undefined;
