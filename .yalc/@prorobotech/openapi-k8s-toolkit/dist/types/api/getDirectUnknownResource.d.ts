import { AxiosResponse } from 'axios';
export declare const getDirectUnknownResource: <T>({ uri }: {
    uri: string;
}) => Promise<AxiosResponse<T, any>>;
