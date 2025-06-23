import { FC } from 'react';
import { TJSON } from '../../../../../localTypes/JSON';
import { OpenAPIV2 } from 'openapi-types';
import { TUrlParams } from '../../../../../localTypes/form';
import { TFormsPrefillsData, TFormsOverridesData } from '../../../../../localTypes/formExtensions';
export type TBlackholeFormDataProviderProps = {
    theme: 'light' | 'dark';
    cluster: string;
    urlParams: TUrlParams;
    urlParamsForPermissions: {
        apiGroup?: string;
        typeName?: string;
    };
    swagger: OpenAPIV2.Document | undefined;
    namespacesData?: {
        items: ({
            metadata: {
                name: string;
            } & unknown;
        } & unknown)[];
    };
    formsPrefillsData?: TFormsPrefillsData;
    formsOverridesData?: TFormsOverridesData;
    data: {
        type: 'builtin';
        typeName: string;
        prefillValuesSchema?: TJSON;
        prefillValueNamespaceOnly?: string;
    } | {
        type: 'apis';
        apiGroup: string;
        apiVersion: string;
        typeName: string;
        prefillValuesSchema?: TJSON;
        prefillValueNamespaceOnly?: string;
    };
    isCreate?: boolean;
    backlink?: string | null;
    modeData?: {
        current: string;
        onChange: (value: string) => void;
        onDisabled: () => void;
    };
    designNewLayout?: boolean;
    designNewLayoutHeight?: number;
};
export declare const BlackholeFormDataProvider: FC<TBlackholeFormDataProviderProps>;
