/// <reference types="react" />
type TPartsOfUrl = {
    partsOfUrl: string[];
};
export declare const PartsOfUrlProvider: ({ children, value }: import("react").PropsWithChildren<{
    value: TPartsOfUrl;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const usePartsOfUrl: () => TPartsOfUrl;
export {};
