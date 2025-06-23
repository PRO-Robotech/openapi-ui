import { TAdditionalPrinterColumns, TAdditionalPrinterColumnsUndefinedValues, TAdditionalPrinterColumnsTrimLengths, TAdditionalPrinterColumnsColWidths } from '../../localTypes/richTable';
export declare const isWithAdditionalPrinterColumns: (x: any) => x is {
    spec: {
        additionalPrinterColumns: TAdditionalPrinterColumns;
    };
};
export declare const isWithAdditionalPrinterColumnsUndefinedValues: (x: any) => x is {
    spec: {
        additionalPrinterColumnsUndefinedValues: TAdditionalPrinterColumnsUndefinedValues;
    };
};
export declare const isWithAdditionalPrinterColumnsTrimLengths: (x: any) => x is {
    spec: {
        additionalPrinterColumnsTrimLengths: TAdditionalPrinterColumnsTrimLengths;
    };
};
export declare const isWithAdditionalPrinterColumnsColWidths: (x: any) => x is {
    spec: {
        additionalPrinterColumnsColWidths: TAdditionalPrinterColumnsColWidths;
    };
};
