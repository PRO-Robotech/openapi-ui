import { OpenAPIV2 } from 'openapi-types';
import { TApiGroupList, TBuiltinResourceTypeList } from '../../localTypes/k8s';
export declare const getGroupsByCategory: ({ swagger, apiGroupListData, builtinResourceTypesData, namespace, noncrds, }: {
    swagger: OpenAPIV2.Document | undefined;
    namespace?: string | undefined;
    apiGroupListData?: {
        apiVersion: string;
        kind: string;
        groups: {
            name: string;
            versions: {
                groupVersion: string;
                version: string;
            }[];
            preferredVersion: {
                groupVersion: string;
                version: string;
            };
        }[];
    } | undefined;
    builtinResourceTypesData?: TBuiltinResourceTypeList | undefined;
    noncrds?: string[] | undefined;
}) => {
    crdGroups?: {
        name: string;
        versions: {
            groupVersion: string;
            version: string;
        }[];
        preferredVersion: {
            groupVersion: string;
            version: string;
        };
    }[] | undefined;
    nonCrdGroups?: {
        name: string;
        versions: {
            groupVersion: string;
            version: string;
        }[];
        preferredVersion: {
            groupVersion: string;
            version: string;
        };
    }[] | undefined;
    builtinGroups?: {
        name: string;
        singularName: string;
        namespaced: boolean;
        kind: string;
        verbs: string[];
    }[] | undefined;
    apiExtensionVersion?: string | undefined;
};
