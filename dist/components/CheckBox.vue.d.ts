import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: __PropType<string>;
        required: true;
    };
    modelValue: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
    };
    childChecked: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:value")[], "update:modelValue" | "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: __PropType<string>;
        required: true;
    };
    modelValue: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
    };
    childChecked: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: true;
        skipCheck: boolean;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean | undefined;
}, {}>;
export default _sfc_main;
