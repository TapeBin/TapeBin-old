import React, { FunctionComponent } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";

type SettingsProps = {
    onClose: () => void,
    isOpen: boolean
}

const Settings: FunctionComponent<SettingsProps> = (props: SettingsProps) => {


    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent bg="#232323" color="white" >
                <DrawerBody mt="5em">
                    Settings
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Settings;