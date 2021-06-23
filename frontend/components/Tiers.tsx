import React, { FunctionComponent } from "react";
import { DrawerOverlay, Drawer, DrawerContent, DrawerBody, Text } from "@chakra-ui/react";

type TiersProps = {
    onClose: () => void,
    isOpen: boolean
}

const Tiers: FunctionComponent<TiersProps> = (props: TiersProps) => {

    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"full"} placement={"top"}>
            <DrawerOverlay/>
            <DrawerContent bg={"#232323"} color="white" alignItems={"center"}>
                <DrawerBody mt="5em" overflow={"hidden"} h="100%">
                    <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={25}
                          color="rgb(226, 226, 226);" textAlign={"center"}>Tiers</Text>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Tiers;