import React, { FC, ReactNode } from 'react';
import { TableProps, TablePaginationConfig } from 'antd';
import { TAdditionalPrinterColumnsColWidths, TAdditionalPrinterColumnsTrimLengths, TAdditionalPrinterColumnsUndefinedValues } from '../../../localTypes/richTable';
export type TEnrichedTableProps = {
    theme: 'light' | 'dark';
    baseprefix?: string;
    dataSource: TableProps['dataSource'];
    columns: TableProps['columns'];
    pathToNavigate?: string;
    recordKeysForNavigation?: string[];
    additionalPrinterColumnsUndefinedValues?: TAdditionalPrinterColumnsUndefinedValues;
    additionalPrinterColumnsTrimLengths?: TAdditionalPrinterColumnsTrimLengths;
    additionalPrinterColumnsColWidths?: TAdditionalPrinterColumnsColWidths;
    selectData?: {
        onChange: (selectedRowKeys: React.Key[], selectedRowsData: {
            name: string;
            endpoint: string;
        }[]) => void;
        selectedRowKeys: React.Key[];
    };
    withoutControls?: boolean;
    tableProps?: {
        borderless?: boolean;
        paginationPosition?: TablePaginationConfig['position'];
        isTotalLeft?: boolean;
        editIcon?: ReactNode;
        deleteIcon?: ReactNode;
    };
};
export declare const EnrichedTable: FC<TEnrichedTableProps>;
