import React, { FC, ReactNode } from 'react';
import { TablePaginationConfig } from 'antd';
import { TAdditionalPrinterColumns, TAdditionalPrinterColumnsUndefinedValues, TAdditionalPrinterColumnsTrimLengths, TAdditionalPrinterColumnsColWidths } from '../../../localTypes/richTable';
import { TJSON } from '../../../localTypes/JSON';
export type TEnrichedTableProviderProps = {
    theme: 'light' | 'dark';
    baseprefix?: string;
    dataItems: TJSON[];
    resourceSchema?: TJSON;
    dataForControls?: {
        cluster: string;
        syntheticProject?: string;
        pathPrefix: string;
        apiVersion: string;
        typeName: string;
        backlink: string;
        deletePathPrefix: string;
        onDeleteHandle: (name: string, endpoint: string) => void;
        permissions: {
            canUpdate?: boolean;
            canDelete?: boolean;
        };
    };
    additionalPrinterColumns?: TAdditionalPrinterColumns;
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
    tableProps?: {
        borderless?: boolean;
        paginationPosition?: TablePaginationConfig['position'];
        isTotalLeft?: boolean;
        editIcon?: ReactNode;
        deleteIcon?: ReactNode;
    };
};
export declare const EnrichedTableProvider: FC<TEnrichedTableProviderProps>;
