import { FC, ReactNode } from 'react';
type TDesignNewLayoutProviderProps = {
    value?: boolean;
    children: ReactNode;
};
export declare const DesignNewLayoutProvider: FC<TDesignNewLayoutProviderProps>;
export declare const useDesignNewLayout: () => boolean | undefined;
export {};
