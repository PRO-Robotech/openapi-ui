import { TCrdResources } from '../../localTypes/k8s';
import { TAdditionalPrinterColumns, TAdditionalPrinterColumnsUndefinedValues, TAdditionalPrinterColumnsColWidths, TAdditionalPrinterColumnsTrimLengths } from '../../localTypes/richTable';
export declare const parseCustomOverrides: ({ columnsOverridesData, overrideType, }: {
    columnsOverridesData?: {
        kind: string;
        apiVersion: string;
        metadata: {
            managedFields?: any;
        };
        items: import("../..").TJSON[];
        status?: {
            allowed?: boolean | undefined;
            reason?: string | undefined;
        } | undefined;
    } | undefined;
    overrideType: string;
}) => {
    ensuredCustomOverrides?: TAdditionalPrinterColumns | undefined;
    ensuredCustomOverridesUndefinedValues?: TAdditionalPrinterColumnsUndefinedValues | undefined;
    ensuredCustomOverridesTrimLengths?: TAdditionalPrinterColumnsTrimLengths | undefined;
    ensuredCustomOverridesColWidths?: TAdditionalPrinterColumnsColWidths | undefined;
};
