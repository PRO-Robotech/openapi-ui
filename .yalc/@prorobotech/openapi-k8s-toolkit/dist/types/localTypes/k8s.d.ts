import { TJSON } from './JSON';
import { TAdditionalPrinterColumns } from './richTable';
export type TApiGroupList = {
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
} & unknown;
export type TApiGroupResourceTypeList = {
    apiVersion: string;
    kind: string;
    groupVersion: string;
    resources: ({
        name: string;
        kind: string;
    } & unknown)[];
} & unknown;
export type TBuiltinResourceTypeList = {
    kind: string;
    groupVersion: string;
    resources: {
        name: string;
        singularName: string;
        namespaced: boolean;
        kind: string;
        verbs: string[];
    }[];
};
export type TSingleResource = unknown & {
    metadata: {
        name: string;
        creationTimestamp: string;
        namespace?: string;
        managedFields?: any;
    };
    spec?: TJSON;
    status?: any;
};
export type TBuiltinResources = {
    kind: string;
    apiVersion: string;
    metadata: {
        name: string;
    };
    items: TSingleResource[];
};
export type TApiResources = {
    kind: string;
    apiVersion: string;
    metadata: {
        name: string;
    };
    items: TSingleResource[];
};
export type TCrdResources<T = TJSON[]> = {
    kind: string;
    apiVersion: string;
    metadata: {
        managedFields?: any;
    };
    items: T;
    status?: {
        allowed?: boolean;
        reason?: string;
    };
} & unknown;
export type TCRD = {
    apiVersion: string;
    metadata: {
        managedFields?: any;
    };
    spec: {
        names: {
            kind: string;
            singular: string;
            plural: string;
        };
        versions: {
            name: string;
            additionalPrinterColumns: TAdditionalPrinterColumns;
        }[];
        group: string;
    };
    status: {
        storedVersions: string[];
    };
} & unknown;
