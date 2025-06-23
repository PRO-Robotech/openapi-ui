import { FC } from 'react';
export type TProjectInfoCardProps = {
    clusterName?: string;
    namespace?: string;
    baseApiGroup: string;
    baseApiVersion: string;
    baseProjectApiGroup: string;
    baseProjectVersion: string;
    projectResourceName: string;
    mpResourceName: string;
    baseprefix?: string;
    accessGroups: string[];
    children?: any;
};
export declare const ProjectInfoCard: FC<TProjectInfoCardProps>;
