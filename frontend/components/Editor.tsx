import React, { FunctionComponent } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";

ace.config.set("basePath", "ace/");

type EditorProps = {
    theme: string,
    language: string,
    onChange?: (value: string) => void,
    value?: string | "",
    style?: string
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {

    return (
        <div style={{ width: "100%", height: "100%", filter: props.style}}>
            <AceEditor name="ace-editor"
                       value={props.value}
                       onChange={props.onChange}
                       style={{ padding: 0 }}
                       theme={props.theme}
                       setOptions={{
                           showPrintMargin: false,
                           useWorker: false,
                           cursorStyle: "smooth",
                           fontSize: "15px"
                       }}
                       mode={props.language}
                       readOnly={!!props.value}
            />;
        </div>
    );
};

export default Editor;