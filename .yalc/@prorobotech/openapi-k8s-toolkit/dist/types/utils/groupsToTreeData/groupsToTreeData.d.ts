import type { DataNode } from 'antd/es/tree';
export type TGroupsToTreeDataProps = {
    apis: string[];
    highlightString: string;
}[];
export declare const groupsToTreeData: (entries: TGroupsToTreeDataProps) => DataNode[];
export declare const getBuiltinTreeData: (apis: string[]) => DataNode[];
