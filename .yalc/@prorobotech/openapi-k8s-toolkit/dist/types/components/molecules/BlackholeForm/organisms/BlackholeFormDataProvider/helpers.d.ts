import { OpenAPIV2 } from 'openapi-types';
import { TJSON } from '../../../../../localTypes/JSON';
export declare const getPathsWithAdditionalProperties: ({ properties, currentPath, result, }: {
    properties: OpenAPIV2.SchemaObject['properties'];
    currentPath?: (string | number)[] | undefined;
    result?: (string | number)[][] | undefined;
}) => (string | number)[][];
export declare const buildNestedObject: ({ path, defaultValue, }: {
    path: (string | number)[];
    defaultValue: unknown;
}) => Record<string, unknown>;
export declare const getPropertiesToMerge: ({ pathsWithAdditionalProperties, prefillValuesSchema, bodyParametersSchema, }: {
    pathsWithAdditionalProperties: (string | number)[][];
    prefillValuesSchema?: TJSON | undefined;
    bodyParametersSchema: any;
}) => Record<string, unknown>;
