import React, { FC, Key } from 'react';
import { FilterConfirmProps } from 'antd/es/table/interface';
type TFilterDropdownProps = {
    setSelectedKeys: (selectedKeys: React.Key[]) => void;
    selectedKeys: Key[];
    confirm: (param?: FilterConfirmProps | undefined) => void;
    close: () => void;
    clearFilters?: () => void;
};
export declare const FilterDropdown: FC<TFilterDropdownProps>;
export {};
