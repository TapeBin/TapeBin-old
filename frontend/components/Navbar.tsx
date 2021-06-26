import React from "react";
import { Button, Flex, Image, Stack, useDisclosure, DrawerContent } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Tiers from "./Tiers";
import { useAtom } from "jotai";
import { userAtom } from "../pages/_app";
import { API_LINK } from "../utils/links";

const Settings = dynamic(() => {
    return import("../components/Settings")
}, { ssr: false });

const Navbar = () => {
    const [user] = useAtom(userAtom);
    const { isOpen: isOpenSettings, onOpen: onOpenSettings, onClose: onCloseSettings } = useDisclosure();
    const { isOpen: isOpenTiers, onOpen: onOpenTiers, onClose: onCloseTiers } = useDisclosure();

    const handleSettingsClick = () => onOpenSettings();

    const handleTierClick = () => onOpenTiers();

    const handleProfileClick = () => {
        if(user.isLoggedIn) {
        } else {
            window.open(`${API_LINK}/auth/github`, "_self");
        }
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
                    <Image src={user.profileImage} borderRadius="50%" onClick={handleProfileClick} cursor={"pointer"} boxSize={["33px", 41]}/>
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
                        onClick={handleTierClick}
                    >
                        Tiers
                    </Button>
                </Stack>
            </Flex>

            <Settings onClose={onCloseSettings} isOpen={isOpenSettings}/>

            <Tiers onClose={onCloseTiers} isOpen={isOpenTiers}/>

        </>
    );
};

export default Navbar;