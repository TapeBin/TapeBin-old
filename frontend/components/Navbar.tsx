import React from "react";
import { Button, Flex, Drawer, DrawerOverlay, DrawerBody, Image, Stack, useDisclosure, DrawerContent } from "@chakra-ui/react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSettingsClick = () => {
        onOpen();
    };

    return (
        <>
            <Flex backgroundColor="#232323" justifyContent="space-between" width="100%" color="white" align="center"
                  padding={4} paddingX={["6%", 10, 20]} textAlign="center" zIndex={99999999}>

                <Flex align="center">
                    {/*<Heading*/}
                    {/*    as="h1"*/}
                    {/*    size="lg"*/}
                    {/*    fontFamily="Pacifico, sans-serif"*/}
                    {/*    fontSize={[25, 40]}*/}
                    {/*    fontWeight="regular"*/}
                    {/*    textAlign="center">*/}
                    {/*    Tape*/}
                    {/*</Heading>*/}
                    <Image src="logo.svg" w={["50px", "80px"]}/>
                </Flex>

                <Stack
                    direction="row-reverse"
                    alignItems="center" spacing={[2, 4]}
                    fontFamily="Poppins, sans-serif"
                >
                    <Image src="avatar.svg" boxSize={["33px", 41]}/>
                    <Button
                        borderRadius={3}
                        border="3px solid transparent"
                        paddingX={[2, 6]}
                        bg="transparent"
                        transition="none"
                        fontWeight="regular"
                        fontSize={[12, 16]}
                        _hover={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                        _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                        _focus={{ border: "3px solid transparent" }}
                        onClick={handleSettingsClick}
                    >
                        Settings
                    </Button>
                    <Button
                        borderRadius={3}
                        border="3px solid transparent"
                        backgroundColor="rgba(68, 68, 68, 1)"
                        paddingX={[4, 7]}
                        bg="transparent"
                        transition="none"
                        fontWeight="regular"
                        fontSize={[12, 16]}
                        _hover={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                        _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                        _focus={{ border: "3px solid transparent" }}

                    >
                        Tiers
                    </Button>
                </Stack>
            </Flex>
            <Drawer onClose={onClose} isOpen={isOpen} placement={"bottom"}>
                <DrawerOverlay/>
                {/*pt="80px"*/}
                <DrawerContent bg="#232323" color="white">
                    <DrawerBody>
                        Ur cool!
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navbar;