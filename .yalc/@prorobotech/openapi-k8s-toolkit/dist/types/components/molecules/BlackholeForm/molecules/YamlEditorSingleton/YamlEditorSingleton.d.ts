import { FC } from 'react';
import { TJSON } from '../../../../../localTypes/JSON';
type TYamlEditorSingletonProps = {
    theme: 'light' | 'dark';
    cluster: string;
    prefillValuesSchema?: TJSON;
    isNameSpaced?: false | string[];
    isCreate?: boolean;
    type: 'builtin' | 'apis';
    apiGroupApiVersion: string;
    typeName: string;
    backlink?: string | null;
    designNewLayoutHeight?: number;
};
export declare const YamlEditorSingleton: FC<TYamlEditorSingletonProps>;
export {};
