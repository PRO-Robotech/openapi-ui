import { AxiosResponse } from 'axios';
export declare const checkPermission: ({ clusterName, body, }: {
    clusterName: string;
    body: {
        group: string;
        resource: string;
        verb: 'create' | 'delete' | 'patch' | 'update';
        namespace: string;
    };
}) => Promise<AxiosResponse<{
    status: {
        allowed?: boolean;
    };
}>>;
