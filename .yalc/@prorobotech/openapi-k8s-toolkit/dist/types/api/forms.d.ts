import { AxiosResponse } from 'axios';
export declare const createNewEntry: <T>({ endpoint, body, }: {
    endpoint: string;
    body: unknown;
}) => Promise<AxiosResponse<T, any>>;
export declare const updateEntry: <T>({ endpoint, body, }: {
    endpoint: string;
    body: unknown;
}) => Promise<AxiosResponse<T, any>>;
export declare const deleteEntry: <T>({ endpoint }: {
    endpoint: string;
}) => Promise<AxiosResponse<T, any>>;
