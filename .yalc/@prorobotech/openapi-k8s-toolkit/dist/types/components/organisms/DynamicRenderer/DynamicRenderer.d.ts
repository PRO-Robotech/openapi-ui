import { ReactElement } from 'react';
import { TItemTypeMap, TRenderableItem, TRendererComponents } from '../../../localTypes/dynamicRender';
export type TDynamicRendererProps<T extends TItemTypeMap> = {
    items: readonly TRenderableItem<T>[];
    components: TRendererComponents<T>;
};
export declare const DynamicRenderer: <T extends TItemTypeMap>(props: TDynamicRendererProps<T>) => ReactElement;
