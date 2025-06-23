import { AxiosResponse } from 'axios';
import { OpenAPIV2 } from 'openapi-types';
export declare const getSwagger: ({ clusterName, }: {
    clusterName: string;
}) => Promise<AxiosResponse<OpenAPIV2.Document>>;
