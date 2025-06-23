import { AxiosResponse } from 'axios';
export declare const getApiResourceTypes: <T>({ clusterName }: {
    clusterName: string;
}) => Promise<AxiosResponse<T, any>>;
export declare const getApiResourceTypesByApiGroup: <T>({ clusterName, apiGroup, apiVersion, }: {
    clusterName: string;
    apiGroup: string;
    apiVersion: string;
}) => Promise<AxiosResponse<T, any>>;
