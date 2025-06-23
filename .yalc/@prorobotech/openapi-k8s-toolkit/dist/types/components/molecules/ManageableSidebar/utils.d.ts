import { ItemType } from 'antd/es/menu/interface';
import { TLink } from './types';
export declare const prepareDataForManageableSidebar: ({ data, replaceValues, pathname, }: {
    data: {
        pathToMatch: string;
        menuItems: TLink[];
    }[];
    replaceValues: Record<string, string | undefined>;
    pathname: string;
}) => {
    pathToMatch: string;
    menuItems: ItemType[];
    selectedKeys: string[];
} | undefined;
