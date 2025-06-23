import { AxiosResponse } from 'axios';
export declare const getCrdData: <T>({ clusterName, apiExtensionVersion, crdName, }: {
    clusterName: string;
    apiExtensionVersion: string;
    crdName: string;
}) => Promise<AxiosResponse<T, any>>;
