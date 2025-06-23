import { TableProps } from 'antd';
import { TJSON } from '../../../localTypes/JSON';
import { TAdditionalPrinterColumns } from '../../../localTypes/richTable';
export declare const prepareDataForEnrichedColumns: ({ dataItems, resourceSchema, dataForControls, additionalPrinterColumns, }: {
    dataItems: TJSON[];
    resourceSchema?: TJSON | undefined;
    dataForControls?: {
        cluster: string;
        syntheticProject?: string | undefined;
        pathPrefix: string;
        apiVersion: string;
        typeName: string;
        backlink: string;
        deletePathPrefix: string;
        onDeleteHandle: (name: string, endpoint: string) => void;
        permissions: {
            canUpdate?: boolean;
            canDelete?: boolean;
        };
    } | undefined;
    additionalPrinterColumns?: TAdditionalPrinterColumns | undefined;
}) => {
    dataSource: TableProps['dataSource'];
    columns: TableProps['columns'];
};
