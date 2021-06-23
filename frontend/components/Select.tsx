import React, { FunctionComponent } from "react";
import SelectSearch, { fuzzySearch, SelectedOptionValue } from "react-select-search";

type SelectProps = {
    options: any[],
    disabled?: boolean | false,
    value: string,
    onChange: (selectedValue: SelectedOptionValue | SelectedOptionValue[]) => void
};

const Select: FunctionComponent<SelectProps> = (props: SelectProps) => {

    return (
        <SelectSearch
            search
            filterOptions={fuzzySearch}
            options={props.options}
            disabled={props.disabled}
            value={props.value}
            autoComplete={"on"}
            closeOnSelect={true}
            onChange={props.onChange}

        />
    );
}

export default Select;