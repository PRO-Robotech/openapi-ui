/// <reference types="react" />
import { CardProps, FlexProps, RowProps, ColProps, ButtonProps, TabsProps } from 'antd';
import type { TextProps } from 'antd/es/typography/Text';
import { TContentCardProps, TSpacerProps } from '../../atoms';
export type TDynamicComponentsAppTypeMap = {
    DefaultDiv: {
        id: number;
    } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    antdText: {
        id: number;
        text: string;
    } & Omit<TextProps, 'id' | 'children'>;
    antdCard: {
        id: number;
    } & Omit<CardProps, 'id'>;
    antdFlex: {
        id: number;
    } & Omit<FlexProps, 'id' | 'children'>;
    antdRow: {
        id: number;
    } & Omit<RowProps, 'id' | 'children'>;
    antdCol: {
        id: number;
    } & Omit<ColProps, 'id' | 'children'>;
    antdTabs: {
        id: number;
    } & Omit<TabsProps, 'id' | 'children'>;
    antdButton: {
        id: number;
        text: string;
    } & Omit<ButtonProps, 'id' | 'children'>;
    partsOfUrl: {
        id: number;
        text: string;
    };
    multiQuery: {
        id: number;
        text: string;
    };
    parsedText: {
        id: number;
        text: string;
    };
    ProjectInfoCard: {
        id: number;
        clusterNamePartOfUrl: string;
        namespacePartOfUrl: string;
        baseApiGroup: string;
        baseApiVersion: string;
        baseProjectApiGroup: string;
        baseProjectVersion: string;
        projectResourceName: string;
        mpResourceName: string;
        accessGroups: [];
        baseprefix?: string;
    };
    MarketplaceCard: {
        id: number;
        clusterNamePartOfUrl: string;
        namespacePartOfUrl: string;
        baseApiGroup: string;
        baseApiVersion: string;
        mpResourceName: string;
        mpResourceKind: string;
        baseprefix?: string;
    };
    ContentCard: {
        id: number;
    } & TContentCardProps;
    Spacer: {
        id: number;
    } & TSpacerProps;
    StatusText: {
        id: number;
        requestIndex: number;
        jsonPath: string;
        criteria: 'equals' | 'notEquals';
        valueToCompare: unknown;
        successText: string;
        errorText: string;
    } & Omit<TextProps, 'id' | 'children'>;
};
