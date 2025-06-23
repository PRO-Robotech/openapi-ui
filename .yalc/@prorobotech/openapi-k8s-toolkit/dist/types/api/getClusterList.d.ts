import { AxiosResponse } from 'axios';
import { TClusterList } from '../localTypes/clusterList';
export declare const getClusterList: () => Promise<AxiosResponse<TClusterList>>;
