export type TLink = {
    key: string;
    label: string;
    link?: string;
};
export type TBreadcrumbResource = {
    apiVersion: string;
    kind: string;
    spec: {
        pathToMatch: string;
        breadcrumbItems: TLink[];
    };
} & unknown;
export type TBreadcrumbResponse = {
    apiVersion: string;
    items: TBreadcrumbResource[];
};
