export type TMarketPlacePanel = {
    name: string;
    description: string;
    icon: string;
    type: 'crd' | 'nonCrd' | 'built-in' | 'direct';
    apiGroup?: string;
    apiVersion?: string;
    typeName?: string;
    pathToNav?: string;
    tags: string[];
    disabled?: boolean;
    hidden?: boolean;
};
export type TMarketPlacePanelResource = {
    metadata: {
        name: string;
        resourceVersion: string;
        uid: string;
    };
    spec: TMarketPlacePanel;
};
export type TMarketPlacePanelResponse = {
    metadata: {
        name: string;
    };
    items: TMarketPlacePanelResource[];
};
