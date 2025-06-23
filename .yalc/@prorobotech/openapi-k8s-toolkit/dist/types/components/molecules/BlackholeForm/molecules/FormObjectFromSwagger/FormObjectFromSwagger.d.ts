import { FC } from 'react';
import { OpenAPIV2, IJsonSchema } from 'openapi-types';
import { TFormName, TExpandedControls, TPersistedControls } from '../../../../../localTypes/form';
type TFormObjectFromSwaggerProps = {
    name: TFormName;
    persistName?: TFormName;
    selfRequired?: boolean;
    isHidden?: boolean;
    description?: string;
    isAdditionalProperties?: boolean;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    expandedControls: TExpandedControls;
    persistedControls: TPersistedControls;
    collapseTitle: TFormName;
    collapseFormName: TFormName;
    data?: JSX.Element;
    inputProps?: {
        addField: ({ path, name, type, items, nestedProperties, required, }: {
            path: TFormName;
            name: string;
            type: string;
            items?: {
                type: string;
            };
            nestedProperties?: OpenAPIV2.SchemaObject['properties'];
            required?: string;
        }) => void;
        additionalProperties: boolean | IJsonSchema | undefined;
    };
    onRemoveByMinus?: () => void;
};
export declare const FormObjectFromSwagger: FC<TFormObjectFromSwaggerProps>;
export {};
