import { FC } from 'react';
type TYamlEditProps = {
    theme: 'light' | 'dark';
    currentValues: Record<any, unknown>;
    onChange: (values: Record<string, unknown>) => void;
};
export declare const YamlEditor: FC<TYamlEditProps>;
export {};
