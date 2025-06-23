import { OpenAPIV2 } from 'openapi-types';
import { TListInputCustomProps, TRangeInputCustomProps } from '../../../../../localTypes/formExtensions';
import { TFormName, TExpandedControls, TNamespaceData, TPersistedControls, TUrlParams } from '../../../../../localTypes/form';
export declare const getStringFormItemFromSwagger: ({ name, arrKey, arrName, persistName, required, forceNonRequired, isHidden, description, namespaceData, isAdditionalProperties, removeField, persistedControls, onRemoveByMinus, }: {
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    namespaceData?: TNamespaceData;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    persistedControls: TPersistedControls;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getEnumStringFormItemFromSwagger: ({ name, arrKey, arrName, persistName, required, forceNonRequired, isHidden, description, isAdditionalProperties, removeField, options, persistedControls, onRemoveByMinus, }: {
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    options: string[];
    persistedControls: TPersistedControls;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getNumberFormItemFromSwagger: ({ isNumber, name, arrKey, arrName, persistName, required, forceNonRequired, isHidden, description, isAdditionalProperties, removeField, persistedControls, onRemoveByMinus, }: {
    isNumber?: boolean | undefined;
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    persistedControls: TPersistedControls;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getRangeInputFormItemFromSwagger: ({ name, arrKey, arrName, persistName, required, forceNonRequired, isHidden, description, isEdit, persistedControls, customProps, urlParams, onRemoveByMinus, }: {
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    isEdit: boolean;
    persistedControls: TPersistedControls;
    customProps: TRangeInputCustomProps;
    urlParams: TUrlParams;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getListInputFormItemFromSwagger: ({ name, arrKey, arrName, persistName, required, forceNonRequired, isHidden, description, isAdditionalProperties, removeField, persistedControls, customProps, urlParams, onRemoveByMinus, }: {
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    persistedControls: TPersistedControls;
    customProps: TListInputCustomProps;
    urlParams: TUrlParams;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getBooleanFormItemFromSwagger: ({ name, arrKey, arrName, isHidden, description, makeValueUndefined, isAdditionalProperties, removeField, onRemoveByMinus, }: {
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    makeValueUndefined?: ((path: TFormName) => void) | undefined;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getArrayFormItemFromSwagger: ({ schema, name, arrKey, arrName, expandName, persistName, required, forceNonRequired, isHidden, description, makeValueUndefined, addField, isAdditionalProperties, removeField, isEdit, expandedControls, persistedControls, urlParams, onRemoveByMinus, }: {
    schema: OpenAPIV2.SchemaObject;
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    expandName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    required?: string[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    description?: string | undefined;
    makeValueUndefined?: ((path: TFormName) => void) | undefined;
    addField: ({ path, name, type, items, nestedProperties, required, }: {
        path: TFormName;
        name: string;
        type: string;
        items?: {
            type: string;
        } | undefined;
        nestedProperties?: OpenAPIV2.SchemaObject['properties'];
        required?: string | undefined;
    }) => void;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    isEdit: boolean;
    expandedControls: TExpandedControls;
    persistedControls: TPersistedControls;
    urlParams: TUrlParams;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare const getObjectFormItemsDraft: ({ properties, name, arrKey, arrName, expandName, persistName, required, forceNonRequired, isHidden, hiddenPaths, description, namespaceData, makeValueUndefined, addField, removeField, isEdit, expandedControls, persistedControls, urlParams, }: {
    properties: {
        [name: string]: OpenAPIV2.SchemaObject;
    };
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    expandName?: TFormName | undefined;
    required?: (string | number)[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    hiddenPaths?: string[][] | undefined;
    description?: string | undefined;
    namespaceData?: TNamespaceData;
    makeValueUndefined?: ((path: TFormName) => void) | undefined;
    addField: ({ path, name, type, items, nestedProperties, required, }: {
        path: TFormName;
        name: string;
        type: string;
        items?: {
            type: string;
        } | undefined;
        nestedProperties?: OpenAPIV2.SchemaObject['properties'];
        required?: string | undefined;
    }) => void;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    isEdit: boolean;
    expandedControls: TExpandedControls;
    persistedControls: TPersistedControls;
    urlParams: TUrlParams;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getObjectFormItemFromSwagger: ({ properties, name, arrKey, arrName, expandName, persistName, selfRequired, required, forceNonRequired, isHidden, hiddenPaths, description, namespaceData, makeValueUndefined, addField, isAdditionalProperties, removeField, isEdit, expandedControls, persistedControls, urlParams, onRemoveByMinus, }: {
    properties: {
        [name: string]: OpenAPIV2.SchemaObject;
    };
    name: TFormName;
    arrKey?: number | undefined;
    arrName?: TFormName | undefined;
    expandName?: TFormName | undefined;
    persistName?: TFormName | undefined;
    selfRequired?: boolean | undefined;
    required?: (string | number)[] | undefined;
    forceNonRequired?: boolean | undefined;
    isHidden?: boolean | undefined;
    hiddenPaths?: string[][] | undefined;
    description?: string | undefined;
    namespaceData?: TNamespaceData;
    makeValueUndefined?: ((path: TFormName) => void) | undefined;
    addField: ({ path, name, type, items, nestedProperties, required, }: {
        path: TFormName;
        name: string;
        type: string;
        items?: {
            type: string;
        } | undefined;
        nestedProperties?: OpenAPIV2.SchemaObject['properties'];
        required?: string | undefined;
    }) => void;
    isAdditionalProperties?: boolean | undefined;
    removeField: ({ path }: {
        path: TFormName;
    }) => void;
    isEdit: boolean;
    expandedControls: TExpandedControls;
    persistedControls: TPersistedControls;
    urlParams: TUrlParams;
    onRemoveByMinus?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
