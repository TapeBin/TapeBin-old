import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Label } from "./Input";

const TextAreaBox = styled.textarea`
  background-color: #444444;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: none;
  padding: 6px;
  color: #eaeaea;
  border-radius: 4px;
  
  &:active, &:focus {
    border: none;
    outline: none;
  }

  height: 100px !important;
  resize: none;
`;

type TextAreaProps = {
    placeholder: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    disabled?: boolean,
    value?: string | ""
};

const TextArea: FunctionComponent<TextAreaProps> = (props: TextAreaProps) => {
    return (
        <>
            <Label>{props.placeholder}</Label>
            <TextAreaBox
                onChange={props.onChange}
                defaultValue={props.value}
                disabled={props.disabled}
            />
        </>
    );
};

export default TextArea;