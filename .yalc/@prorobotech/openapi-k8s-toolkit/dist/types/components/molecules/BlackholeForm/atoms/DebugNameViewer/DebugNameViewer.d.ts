import { FC } from 'react';
import { TFormName } from '../../../../../localTypes/form';
type TDebugNameViewerProps = {
    name: TFormName;
    arrKey?: number;
    arrName?: TFormName;
    persistName?: TFormName;
    expandName?: TFormName;
};
export declare const DebugNameViewer: FC<TDebugNameViewerProps>;
export {};
