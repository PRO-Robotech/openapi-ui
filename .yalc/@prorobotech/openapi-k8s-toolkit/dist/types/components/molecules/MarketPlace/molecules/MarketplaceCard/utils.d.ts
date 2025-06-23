export declare const getPathToNav: ({ clusterName, namespace, type, pathToNav, typeName, apiGroup, apiVersion, baseprefix, }: {
    clusterName: string;
    namespace: string;
    type: string;
    pathToNav?: string | undefined;
    typeName?: string | undefined;
    apiGroup?: string | undefined;
    apiVersion?: string | undefined;
    baseprefix?: string | undefined;
}) => string;
export declare const getCreatePathToNav: ({ clusterName, namespace, type, pathToNav, typeName, apiGroup, apiVersion, baseprefix, }: {
    clusterName: string;
    namespace: string;
    type: string;
    pathToNav?: string | undefined;
    typeName?: string | undefined;
    apiGroup?: string | undefined;
    apiVersion?: string | undefined;
    baseprefix?: string | undefined;
}) => string;
export declare const getListPath: ({ clusterName, namespace, type, typeName, apiGroup, apiVersion, }: {
    clusterName: string;
    namespace: string;
    type: string;
    typeName?: string | undefined;
    apiGroup?: string | undefined;
    apiVersion?: string | undefined;
}) => string | undefined;
