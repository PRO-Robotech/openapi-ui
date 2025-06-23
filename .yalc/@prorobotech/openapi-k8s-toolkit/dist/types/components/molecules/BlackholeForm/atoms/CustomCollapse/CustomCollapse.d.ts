import { FC, ReactNode, PropsWithChildren } from 'react';
import { TFormName, TExpandedControls } from '../../../../../localTypes/form';
type TCustomCollapseProps = PropsWithChildren<{
    title: string | ReactNode;
    formName: TFormName;
    expandedControls: TExpandedControls;
    persistedCheckbox?: JSX.Element;
    isAdditionalProperties?: boolean;
    removeField: () => void;
    onRemoveByMinus?: () => void;
}>;
export declare const CustomCollapse: FC<TCustomCollapseProps>;
export {};
