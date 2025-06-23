import { TTableMappingData } from '../../localTypes/richTable';
export declare const prepareTableMappings: ({ data, clusterName, projectName, instanceName, namespace, syntheticProject, entryType, apiGroup, apiVersion, typeName, entryName, apiExtensionVersion, crdName, pathname, }: {
    data: Partial<TTableMappingData>[];
    clusterName?: string | undefined;
    projectName?: string | undefined;
    instanceName?: string | undefined;
    namespace?: string | undefined;
    syntheticProject?: string | undefined;
    entryType?: string | undefined;
    apiGroup?: string | undefined;
    apiVersion?: string | undefined;
    typeName?: string | undefined;
    entryName?: string | undefined;
    apiExtensionVersion?: string | undefined;
    crdName?: string | undefined;
    pathname: string;
}) => {
    pathToNavigate?: string;
    keysToParse?: string[];
} | undefined;
