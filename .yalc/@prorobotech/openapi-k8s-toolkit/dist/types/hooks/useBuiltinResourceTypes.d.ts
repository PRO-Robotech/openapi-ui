import { TBuiltinResourceTypeList } from '../localTypes/k8s';
export declare const useBuiltinResourceTypes: ({ clusterName }: {
    clusterName: string;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<TBuiltinResourceTypeList, Error>;
