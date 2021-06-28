import React, { FunctionComponent } from "react";
import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { settingsAtom } from "./Settings";
import { binAtom } from "./Options";

ace.config.set("basePath", "ace/");

type EditorProps = {
    theme?: string,
    language?: string,
    onChange?: (value: string) => void,
    value?: string | "",
    style?: string
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
    const [settings] = useAtom(settingsAtom);
    const [bin, setBin] = useAtom(binAtom);

    const changeText = (value: string) => {
        setBin(prevState => ({...prevState, text: [value.toString()]}))
    };

    return (
        <Box style={{ width: "100%", height: "100%", filter: props.style}}>
            <AceEditor name="ace-editor"
                       value={props.value}
                       onChange={(value) => {props.onChange; changeText(value)}}
                       style={{ padding: 0 }}
                       theme={props.theme || settings.theme}
                       setOptions={{
                           showPrintMargin: settings.printMargin,
                           useWorker: false,
                           cursorStyle: "smooth",
                           fontSize: settings.fontSize,
                           fontFamily: settings.fontFamily
                       }}
                       mode={bin.languageExtension}
                       readOnly={!!props.value}
            />;
        </Box>
    );
};

export default Editor;