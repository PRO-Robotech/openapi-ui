import { ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { TableProps } from 'antd';
import { TAdditionalPrinterColumnsColWidths, TAdditionalPrinterColumnsTrimLengths, TAdditionalPrinterColumnsUndefinedValues } from '../../../localTypes/richTable';
export declare const getEnrichedColumns: ({ columns, additionalPrinterColumnsUndefinedValues, additionalPrinterColumnsTrimLengths, additionalPrinterColumnsColWidths, }: {
    columns: TableProps['columns'];
    additionalPrinterColumnsUndefinedValues?: TAdditionalPrinterColumnsUndefinedValues | undefined;
    additionalPrinterColumnsTrimLengths?: TAdditionalPrinterColumnsTrimLengths | undefined;
    additionalPrinterColumnsColWidths?: TAdditionalPrinterColumnsColWidths | undefined;
}) => TableProps['columns'] | undefined;
export declare const getEnrichedColumnsWithControls: ({ enrichedColumns, navigate, baseprefix, editIcon, deleteIcon, }: {
    enrichedColumns: TableProps['columns'];
    navigate: NavigateFunction;
    baseprefix?: string | undefined;
    editIcon?: ReactNode;
    deleteIcon?: ReactNode;
}) => TableProps['columns'] | undefined;
