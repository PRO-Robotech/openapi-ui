import { FC } from 'react';
export type TDeleteModalManyProps = {
    onClose: () => void;
    data: {
        name: string;
        endpoint: string;
    }[];
};
export declare const DeleteModalMany: FC<TDeleteModalManyProps>;
