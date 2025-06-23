import { TJSON } from '../localTypes/JSON';
export declare const useCrdResources: <T = TJSON[]>({ clusterName, namespace, apiGroup, apiVersion, crdName, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    crdName: string;
    refetchInterval?: number | false | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    kind: string;
    apiVersion: string;
    metadata: {
        managedFields?: any;
    };
    items: T;
    status?: {
        allowed?: boolean | undefined;
        reason?: string | undefined;
    } | undefined;
}, Error>;
export declare const useCrdResourceSingle: ({ clusterName, namespace, apiGroup, apiVersion, crdName, entryName, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    crdName: string;
    entryName: string;
    refetchInterval?: number | false | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    metadata: {
        name: string;
        creationTimestamp: string;
        namespace?: string | undefined;
        managedFields?: any;
    };
    spec?: TJSON | undefined;
    status?: any;
}, Error>;
