import React, { FunctionComponent } from "react";
import SelectSearch, { fuzzySearch, SelectedOptionValue } from "react-select-search";
import languages from "../utils/languages.json";

type SelectProps = {
    onChange?: (selectedValue: SelectedOptionValue | SelectedOptionValue[]) => void,
    disabled?: boolean,
    value?: string
}

const Select: FunctionComponent<SelectProps> = (props: SelectProps) => {
    const languageList = [];

    for (const key in languages) {
        if (languages.hasOwnProperty(key)) {
            // @ts-ignore
            languageList.push({ name: key, value: languages[key] });
        }
    }

    return (
        <div>
            <SelectSearch search filterOptions={fuzzySearch}
                          options={languageList}
                          disabled={props.disabled}
                          value={props.disabled ? props.value : "0"}
                          closeOnSelect={true} onChange={props.onChange}/>
        </div>
    );
}

export default Select;