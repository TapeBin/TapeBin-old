import React, { FunctionComponent } from "react";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import Input, { Label } from "./Input";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("./Select"), { ssr: false });

type SettingsProps = {
    onClose: () => void,
    isOpen: boolean
}

const Settings: FunctionComponent<SettingsProps> = (props: SettingsProps) => {



    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"lg"} placement={"top"}>
            <DrawerOverlay/>
            <DrawerContent bg="#232323" color="white" alignItems={"center"}>
                <DrawerBody mt="5em">
                    <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={25}
                          color="rgb(226, 226, 226);" textAlign={"center"}>Settings</Text>

                    <Stack direction={"row"} justifyContent={"space-between"} spacing={10}>
                        <Stack>
                            <Label>Font family</Label>
                            <Select options={[]} onChange={() => {}} value={"0"}/>
                        </Stack>
                        <Stack>
                            <Label>Theme</Label>
                            <Select options={[]} onChange={() => {}} value={"0"}/>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"} spacing={10}>
                        <Stack w="100%" minW="0">
                            <Input placeholder="Font size" width="100%"/>
                        </Stack>
                        <Stack w="100%" minW="0 !important">
                            <Input placeholder="Font size" width="100%"/>
                        </Stack>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Settings;