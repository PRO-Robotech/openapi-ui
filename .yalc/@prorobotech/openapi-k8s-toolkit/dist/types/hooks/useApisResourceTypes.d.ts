export declare const useApisResourceTypes: ({ clusterName }: {
    clusterName: string;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
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
}, Error>;
export declare const useApiResourceTypesByGroup: ({ clusterName, apiGroup, apiVersion, }: {
    clusterName: string;
    apiGroup: string;
    apiVersion: string;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    apiVersion: string;
    kind: string;
    groupVersion: string;
    resources: {
        name: string;
        kind: string;
    }[];
}, Error>;
