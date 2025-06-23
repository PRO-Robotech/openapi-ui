import { AxiosResponse } from 'axios';
export declare const getBuiltinResourceTypes: <T>({ clusterName, }: {
    clusterName: string;
}) => Promise<AxiosResponse<T, any>>;
