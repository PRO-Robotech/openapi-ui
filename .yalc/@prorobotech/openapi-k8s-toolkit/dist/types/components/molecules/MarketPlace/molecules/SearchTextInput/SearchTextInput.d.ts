import { FC } from 'react';
type TSearchTextInputProps = {
    uniqueTags: string[];
    onSelectedTags: (tags: string[]) => void;
    selectedTags: string[];
};
export declare const SearchTextInput: FC<TSearchTextInputProps>;
export {};
