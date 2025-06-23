export declare const usePermissions: ({ clusterName, namespace, apiGroup, typeName, verb, refetchInterval, enabler, }: {
    clusterName: string;
    apiGroup: string;
    typeName: string;
    namespace: string;
    verb: 'create' | 'delete' | 'patch' | 'update';
    refetchInterval?: number | false | undefined;
    enabler?: boolean | undefined;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    status: {
        allowed?: boolean | undefined;
    };
}, Error>;
