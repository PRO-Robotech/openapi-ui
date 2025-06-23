export type TAdditionalPrinterColumns = {
    name: string;
    type: string;
    jsonPath: string;
}[];
export type TAdditionalPrinterColumnsUndefinedValues = {
    key: string;
    value: string;
}[];
export type TAdditionalPrinterColumnsTrimLengths = {
    key: string;
    value: number;
}[];
export type TAdditionalPrinterColumnsColWidths = {
    key: string;
    value: string;
}[];
export type TTableMappingData = {
    pathToMatch: string;
    pathToNavigate: string;
    keysToParse: string[];
};
export type TTableMappingResource = {
    apiVersion: string;
    kind: string;
    spec: TTableMappingData;
} & unknown;
export type TTableMappingResponse = {
    apiVersion: string;
    items: TTableMappingResource[];
};
