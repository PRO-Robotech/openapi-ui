/// <reference types="react" />
type TCustomMenuProps = {
    $noMarginTop?: boolean;
};
export declare const Styled: {
    CustomMenu: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<import("antd").MenuProps & import("react").RefAttributes<import("antd").MenuRef>, "items"> & {
        items?: import("antd/es/menu/interface").ItemType<import("antd/es/menu/interface").MenuItemType>[] | undefined;
    }, TCustomMenuProps>>;
};
export {};
