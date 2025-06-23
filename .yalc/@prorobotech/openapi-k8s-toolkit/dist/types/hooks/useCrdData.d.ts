export declare const useCrdData: ({ clusterName, apiExtensionVersion, crdName, }: {
    clusterName: string;
    apiExtensionVersion: string;
    crdName: string;
}) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<{
    apiVersion: string;
    metadata: {
        managedFields?: any;
    };
    spec: {
        names: {
            kind: string;
            singular: string;
            plural: string;
        };
        versions: {
            name: string;
            additionalPrinterColumns: import("..").TAdditionalPrinterColumns;
        }[];
        group: string;
    };
    status: {
        storedVersions: string[];
    };
}, Error>;
