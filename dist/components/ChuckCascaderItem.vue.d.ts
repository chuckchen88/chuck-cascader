import type { PropType as __PropType } from 'vue';
import { CascaderOption } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    multiple: {
        type: __PropType<boolean>;
        required: true;
    };
    activeId: {
        type: __PropType<number>;
        required: true;
    };
    depth: {
        type: __PropType<number>;
        required: true;
    };
    options: {
        type: __PropType<CascaderOption[]>;
        required: true;
    };
    color: {
        type: __PropType<string>;
        required: true;
    };
    height: {
        type: __PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checkChange"[], "checkChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: __PropType<boolean>;
        required: true;
    };
    activeId: {
        type: __PropType<number>;
        required: true;
    };
    depth: {
        type: __PropType<number>;
        required: true;
    };
    options: {
        type: __PropType<CascaderOption[]>;
        required: true;
    };
    color: {
        type: __PropType<string>;
        required: true;
    };
    height: {
        type: __PropType<string>;
        required: true;
    };
}>> & {
    onCheckChange?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
