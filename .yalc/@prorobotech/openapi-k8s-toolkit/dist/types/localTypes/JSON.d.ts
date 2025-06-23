export type TJSON = string | number | boolean | TJSON[] | {
    [key: string]: TJSON;
};
