import { FC } from 'react';
import { TFormName, TPersistedControls } from '../../../../../localTypes/form';
type TFormStringInputProps = {
    name: TFormName;
    arrKey?: number;
    arrName?: TFormName;
    persistName?: TFormName;
    required?: string[];
    forceNonRequired?: boolean;
    isHidden?: boolean;
    description?: string;
    isAdditionalProperties?: boolean;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    persistedControls: TPersistedControls;
    onRemoveByMinus?: () => void;
};
export declare const FormStringInput: FC<TFormStringInputProps>;
export {};
