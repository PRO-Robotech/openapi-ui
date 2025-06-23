import { TRangeInputCustomValuesBlock } from '../../../../../localTypes/formExtensions';
export declare const prepareMinAndMaxValues: ({ minMaxAndStep, minValueObj, minSubstractFirstValueObj, minSubstractSecondValueObj, minAddFirstValueObj, minAddSecondValueObj, maxValueObj, maxSubstractFirstValueObj, maxSubstractSecondValueObj, maxAddFirstValueObj, maxAddSecondValueObj, logic, }: {
    minMaxAndStep: TRangeInputCustomValuesBlock;
    minValueObj: unknown;
    minSubstractFirstValueObj: unknown;
    minSubstractSecondValueObj: unknown;
    minAddFirstValueObj: unknown;
    minAddSecondValueObj: unknown;
    maxValueObj: unknown;
    maxSubstractFirstValueObj: unknown;
    maxSubstractSecondValueObj: unknown;
    maxAddFirstValueObj: unknown;
    maxAddSecondValueObj: unknown;
    logic: 'memoryLike' | 'cpuLike';
}) => {
    minValue: number;
    maxValue: number;
};
