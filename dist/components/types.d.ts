export interface CascaderOption {
    label: string;
    value: string | number;
    children?: CascaderOption[];
    checked?: boolean;
    childChecked?: boolean;
    disabled?: boolean;
}
