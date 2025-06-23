import { FC } from 'react';
import { TFormName, TPersistedControls } from '../../../../../localTypes/form';
type TPersistedCheckboxProps = {
    formName: TFormName;
    persistedControls: TPersistedControls;
    type?: 'str' | 'number' | 'arr' | 'obj';
};
export declare const PersistedCheckbox: FC<TPersistedCheckboxProps>;
export {};
