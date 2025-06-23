import { AxiosResponse } from 'axios';
export declare const getCrdResources: <T>({ clusterName, namespace, apiGroup, apiVersion, crdName, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    crdName: string;
}) => Promise<AxiosResponse<T, any>>;
export declare const getCrdResourceSingle: <T>({ clusterName, namespace, apiGroup, apiVersion, crdName, entryName, }: {
    clusterName: string;
    namespace?: string | undefined;
    apiGroup: string;
    apiVersion: string;
    crdName: string;
    entryName: string;
}) => Promise<AxiosResponse<T, any>>;
