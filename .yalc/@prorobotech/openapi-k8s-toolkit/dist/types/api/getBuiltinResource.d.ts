import { AxiosResponse } from 'axios';
export declare const getBuiltinResources: <T>({ clusterName, namespace, typeName, limit, }: {
    clusterName: string;
    namespace?: string | undefined;
    typeName: string;
    limit: string | null;
}) => Promise<AxiosResponse<T, any>>;
export declare const getBuiltinResourceSingle: <T>({ clusterName, namespace, typeName, entryName, }: {
    clusterName: string;
    namespace?: string | undefined;
    typeName: string;
    entryName: string;
}) => Promise<AxiosResponse<T, any>>;
