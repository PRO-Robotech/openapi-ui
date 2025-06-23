import { FC, Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { TMarketPlacePanelResource } from '../../../../../localTypes/marketplace';
type TAddEditFormModalProps = {
    clusterName?: string;
    baseApiGroup: string;
    baseApiVersion: string;
    mpResourceName: string;
    mpResourceKind: string;
    isOpen: boolean | TMarketPlacePanelResource;
    setIsOpen: Dispatch<SetStateAction<boolean | TMarketPlacePanelResource>>;
    setError: Dispatch<SetStateAction<AxiosError | Error | undefined>>;
    onCreateSuccess: () => void;
    onUpdateSuccess: () => void;
};
export declare const AddEditFormModal: FC<TAddEditFormModalProps>;
export {};
