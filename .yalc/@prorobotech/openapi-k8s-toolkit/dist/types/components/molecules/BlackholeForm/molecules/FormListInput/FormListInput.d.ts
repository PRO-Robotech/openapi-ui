import { FC } from 'react';
import { TFormName, TPersistedControls, TUrlParams } from '../../../../../localTypes/form';
import { TListInputCustomProps } from '../../../../../localTypes/formExtensions';
type TFormListInputProps = {
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
    customProps: TListInputCustomProps;
    urlParams: TUrlParams;
    onRemoveByMinus?: () => void;
};
export declare const FormListInput: FC<TFormListInputProps>;
export {};
