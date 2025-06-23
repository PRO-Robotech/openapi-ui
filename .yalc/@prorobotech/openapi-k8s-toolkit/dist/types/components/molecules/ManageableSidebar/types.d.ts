export type TLink = {
    key: string;
    label: string;
    link?: string;
    children?: TLink[];
};
export type TCrdResource = {
    apiVersion: string;
    kind: string;
    spec: {
        pathToMatch: string;
        menuItems: TLink[];
    };
} & unknown;
export type TSidebarResponse = {
    apiVersion: string;
    items: TCrdResource[];
};
