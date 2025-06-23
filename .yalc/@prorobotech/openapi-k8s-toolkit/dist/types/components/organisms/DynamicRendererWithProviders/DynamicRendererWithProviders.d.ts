import { ReactElement } from 'react';
import { TItemTypeMap } from '../../../localTypes/dynamicRender';
import { TDynamicRendererProps } from '../DynamicRenderer';
export declare const DynamicRendererWithProviders: <T extends TItemTypeMap>(props: TDynamicRendererProps<T> & {
    urlsToFetch: string[];
}) => ReactElement;
