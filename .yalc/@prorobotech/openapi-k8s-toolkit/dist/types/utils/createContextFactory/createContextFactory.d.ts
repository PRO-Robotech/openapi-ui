import React from 'react';
export declare const createContextFactory: <TContextValue extends Record<string, unknown>>() => {
    Provider: ({ children, value }: React.PropsWithChildren<{
        value: TContextValue;
    }>) => import("react/jsx-runtime").JSX.Element;
    useTypedContext: () => TContextValue;
};
