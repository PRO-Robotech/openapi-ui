import { TJSON } from '../../../../../localTypes/JSON';
import { OpenAPIV2 } from 'openapi-types';
import { TFormOverride } from '../../../../../localTypes/formExtensions';
export declare const getSwaggerPathAndIsNamespaceScoped: ({ swagger, data, }: {
    swagger: OpenAPIV2.Document;
    data: {
        type: 'builtin';
        typeName: string;
        prefillValuesSchema?: TJSON;
        prefillValueNamespaceOnly?: string;
    } | {
        type: 'apis';
        apiGroup: string;
        apiVersion: string;
        typeName: string;
        prefillValuesSchema?: TJSON;
        prefillValueNamespaceOnly?: string;
    };
}) => {
    swaggerPath: string;
    isNamespaced: boolean;
};
export declare const getBodyParametersSchema: ({ swagger, swaggerPath, }: {
    swagger: OpenAPIV2.Document;
    swaggerPath: string;
}) => {
    bodyParametersSchema: any;
    kindName?: string | undefined;
    error?: string | undefined;
};
export declare const processOverride: ({ specificCustomOverrides, newProperties, bodyParametersSchema, }: {
    specificCustomOverrides?: TFormOverride | undefined;
    newProperties: any;
    bodyParametersSchema: any;
}) => {
    hiddenPaths?: string[][] | undefined;
    expandedPaths?: string[][] | undefined;
    persistedPaths?: string[][] | undefined;
    propertiesToApply: {
        [name: string]: OpenAPIV2.SchemaObject;
    };
    requiredToApply?: string[] | undefined;
};
