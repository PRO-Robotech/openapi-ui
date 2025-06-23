import { ReactElement } from 'react';
export type TItemTypeMap = Record<string, unknown>;
export type TRenderableItem<T extends TItemTypeMap> = {
    [K in keyof T]: {
        type: K;
        data: T[K];
        children?: readonly TRenderableItem<T>[];
    };
}[keyof T];
export type TRendererComponents<T extends TItemTypeMap> = {
    [K in keyof T]: React.ComponentType<{
        data: T[K];
        children?: ReactElement | ReactElement[];
    }>;
};
export type TFactoryDataK8s<T extends TItemTypeMap> = {
    key: string;
    urlsToFetch: string[];
    data: TRenderableItem<T>[];
};
export type TFactoryResource<T extends TItemTypeMap> = {
    apiVersion: string;
    kind: string;
    spec: TFactoryDataK8s<T>;
} & unknown;
export type TFactoryResponse<T extends TItemTypeMap> = {
    apiVersion: string;
    items: TFactoryResource<T>[];
};
