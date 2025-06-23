import { FC } from 'react';
import { TFormName } from '../../../../../localTypes/form';
type TFormBooleanInputProps = {
    name: TFormName;
    arrKey?: number;
    arrName?: TFormName;
    isHidden?: boolean;
    description?: string;
    makeValueUndefined?: (path: TFormName) => void;
    isAdditionalProperties?: boolean;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    onRemoveByMinus?: () => void;
};
export declare const FormBooleanInput: FC<TFormBooleanInputProps>;
export {};
