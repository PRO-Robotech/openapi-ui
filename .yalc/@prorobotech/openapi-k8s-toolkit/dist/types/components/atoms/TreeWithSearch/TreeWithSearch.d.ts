import { FC } from 'react';
import { TreeDataNode, TreeProps } from 'antd';
export type TTreeWithSearchProps = {
    treeData: TreeDataNode[];
    onSelect: TreeProps['onSelect'];
};
export declare const TreeWithSearch: FC<TTreeWithSearchProps>;
