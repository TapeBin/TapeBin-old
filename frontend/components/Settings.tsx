import React, { FunctionComponent, useEffect, useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import Input, { Label } from "./Input";
import dynamic from "next/dynamic";
import { atom, useAtom } from "jotai";
import fontFamilies from "../utils/fonts.json";
import languages from "../utils/languages.json";

const Select = dynamic(() => import("./Select"), { ssr: false });

export const settingsAtom = atom({
    theme: "one_dark",
    fontSize: "15px",
    fontFamily: "Source Code Pro",
    printMargin: false
});

type SettingsProps = {
    onClose: () => void,
    isOpen: boolean
}

const Settings: FunctionComponent<SettingsProps> = (props: SettingsProps) => {
    const [settings, setSettings] = useAtom(settingsAtom);
    const fontFamiliesArray: any[] = [];

    // @ts-ignore
    for (const index in fontFamilies.fonts) {
        const font = fontFamilies.fonts[index];
        // @ts-ignore
        fontFamiliesArray.push({ name: font, value: font });
    }

    // const [state, setState] = useState("");
    // useEffect(() => {
    //     setState(localStorage.getItem("color")!!);
    //     window.addEventListener('storage', () => setState(localStorage.getItem("color")!!));
    // }, []);

    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"lg"} placement={"top"}>
            <DrawerOverlay/>
            <DrawerContent bg={"#232323"} color="white" alignItems={"center"}>
                <DrawerBody mt="5em" overflow={"hidden"} h="100%">
                    <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={25}
                          color="rgb(226, 226, 226);" textAlign={"center"}>Settings</Text>

                    <Stack direction={"row"} justifyContent={"space-between"} spacing={10}>
                        <Stack>
                            <Label>Font family</Label>
                            <Select options={fontFamiliesArray} onChange={() => {
                            }} value={fontFamiliesArray[0]}/>
                        </Stack>
                        <Stack>
                            <Label>Theme</Label>
                            <Select options={[]} onChange={() => {
                            }} value={"0"}/>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} spacing={10}>
                        <Stack w="100%" minW="0">
                            <Input placeholder="Font size" width="100%"/>
                        </Stack>
                        <Stack w="100%" minW="0 !important">
                            <Input placeholder="Print margin" width="100%"/>
                        </Stack>
                    </Stack>
                    <br/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Settings;