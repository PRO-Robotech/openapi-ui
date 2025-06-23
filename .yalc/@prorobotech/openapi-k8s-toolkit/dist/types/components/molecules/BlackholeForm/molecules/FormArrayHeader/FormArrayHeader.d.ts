import { FC } from 'react';
import { TFormName, TPersistedControls } from '../../../../../localTypes/form';
type TFormArrayHeaderProps = {
    name: TFormName;
    persistName?: TFormName;
    required?: string[];
    description?: string;
    isAdditionalProperties?: boolean;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    persistedControls: TPersistedControls;
    onRemoveByMinus?: () => void;
};
export declare const FormArrayHeader: FC<TFormArrayHeaderProps>;
export {};
