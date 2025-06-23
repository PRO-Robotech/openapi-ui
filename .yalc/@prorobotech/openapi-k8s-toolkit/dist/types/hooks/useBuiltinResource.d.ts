import { TBuiltinResources } from '../localTypes/k8s';
export declare const useBuiltinResources: ({ clusterName, namespace, typeName, limit, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
    typeName: string;
    limit: string | null;
    refetchInterval?: number | false | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<TBuiltinResources, Error>;
export declare const useBuiltinResourceSingle: ({ clusterName, namespace, typeName, entryName, refetchInterval, }: {
    clusterName: string;
    namespace?: string | undefined;
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
