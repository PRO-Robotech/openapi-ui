import { OpenAPIV2 } from 'openapi-types';
export declare const checkIfApiInstanceNamespaceScoped: ({ typeName, apiGroup, apiVersion, swagger, }: {
    typeName: string;
    apiGroup: string;
    apiVersion: string;
    swagger: OpenAPIV2.Document;
}) => {
    isClusterWide: boolean;
    isNamespaceScoped: boolean;
};
export declare const checkIfBuiltInInstanceNamespaceScoped: ({ typeName, swagger, }: {
    typeName: string;
    swagger: OpenAPIV2.Document;
}) => {
    isClusterWide: boolean;
    isNamespaceScoped: boolean;
};
