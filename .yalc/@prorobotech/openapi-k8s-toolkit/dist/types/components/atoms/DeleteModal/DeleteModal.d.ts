import { FC } from 'react';
export type TDeleteModalProps = {
    name: string;
    onClose: () => void;
    endpoint: string;
};
export declare const DeleteModal: FC<TDeleteModalProps>;
