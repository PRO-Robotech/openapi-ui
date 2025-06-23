import { UseQueryResult } from '@tanstack/react-query';
export declare const useDirectUnknownResource: <T>({ uri, queryKey, refetchInterval, isEnabled, }: {
    uri: string;
    queryKey: string[];
    refetchInterval?: number | false | undefined;
    isEnabled?: boolean | undefined;
}) => UseQueryResult<T, Error>;
