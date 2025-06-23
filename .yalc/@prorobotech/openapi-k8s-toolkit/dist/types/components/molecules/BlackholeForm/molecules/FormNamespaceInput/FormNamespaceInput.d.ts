import { FC } from 'react';
import { TFormName, TNamespaceData } from '../../../../../localTypes/form';
type TFormNamespaceInputProps = {
    name: TFormName;
    isHidden?: boolean;
    namespaceData: TNamespaceData;
    isAdditionalProperties?: boolean;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
};
export declare const FormNamespaceInput: FC<TFormNamespaceInputProps>;
export {};
