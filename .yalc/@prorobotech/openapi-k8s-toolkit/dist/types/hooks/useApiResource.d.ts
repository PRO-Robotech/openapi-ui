import { TApiResources } from '../localTypes/k8s';
export declare const useApiResources: ({ clusterName, namespace, apiGroup, apiVersion, typeName, limit, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    typeName: string;
    limit: string | null;
    refetchInterval?: number | false | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<TApiResources, Error>;
export declare const useApiResourceSingle: ({ clusterName, namespace, apiGroup, apiVersion, typeName, entryName, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    typeName: string;
    entryName: string;
    refetchInterval?: number | false | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    metadata: {
        name: string;
        creationTimestamp: string;
        namespace?: string | undefined;
        managedFields?: any;
    };
    spec?: import("..").TJSON | undefined;
    status?: any;
}, Error>;
