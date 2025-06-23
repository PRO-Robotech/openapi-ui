import { AxiosResponse } from 'axios';
export declare const getApiResources: <T>({ clusterName, namespace, apiGroup, apiVersion, typeName, limit, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    typeName: string;
    limit: string | null;
}) => Promise<AxiosResponse<T, any>>;
export declare const getApiResourceSingle: <T>({ clusterName, namespace, apiGroup, apiVersion, typeName, entryName, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    typeName: string;
    entryName: string;
}) => Promise<AxiosResponse<T, any>>;
