import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Label = styled.label`
  color: #FFFFFF;
  opacity: 0.85;
  font-family: "Inter", sans-serif;
  padding-bottom: 5px;
  font-size: 16px;
  margin-top: 15px;
`;

const InputText = styled.input`
  background-color: #444444;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: none;
  height: 40px;
  padding: 6px;
  color: #eaeaea;
  border-radius: 4px;

  &:active, &:focus {
    border: none;
    outline: none;
  }
`;

type InputProps = {
    placeholder: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    value?: string | number,
    width?: string,
    type?: string | "text",
    min?: number,
    max?: number
};

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    return (
        <>
            <Label>{props.placeholder}</Label>
            <InputText
                defaultValue={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                style={{width: props.width}}
                type={props.type}
                min={props.min}
                max={props.max}
            />
        </>
    );
};

export default Input;