import { FC, ReactNode } from 'react';
type TDataMap = {
    [key: string]: any;
};
interface MultiQueryContextType {
    data: TDataMap;
    isLoading: boolean;
    isError: boolean;
    errors: (Error | null)[];
}
type TMultiQueryProviderProps = {
    urls: string[];
    children: ReactNode;
};
export declare const MultiQueryProvider: FC<TMultiQueryProviderProps>;
export declare const useMultiQuery: () => MultiQueryContextType;
export {};
