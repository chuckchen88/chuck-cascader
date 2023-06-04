import type { PropType as __PropType } from 'vue';
import { CascaderOption } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    options: {
        type: __PropType<CascaderOption[]>;
        required: true;
    };
    color: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string | string[] | undefined>;
        required: false;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zIndex: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    filterable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:value" | "confirm")[], "update:modelValue" | "update:value" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    options: {
        type: __PropType<CascaderOption[]>;
        required: true;
    };
    color: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modelValue: {
        type: __PropType<string | string[] | undefined>;
        required: false;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    zIndex: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    filterable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    color: string | undefined;
    multiple: boolean | undefined;
    title: string | undefined;
    height: string | undefined;
    zIndex: number | undefined;
    filterable: boolean | undefined;
}, {}>;
export default _sfc_main;
