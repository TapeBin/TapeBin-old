import React, { FunctionComponent } from "react";
import {
    Box,
    Button,
    Image,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Stack,
    Text
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { userAtom } from "../pages/_app";

type ProfileProps = {
    onClose: () => void,
    isOpen: boolean
};

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
    const [user] = useAtom(userAtom);

    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"full"} placement={"top"}>
            <DrawerOverlay/>
            <DrawerContent bg={"#232323"} color="white" alignItems={"center"}>
                <DrawerBody mt="5em" overflow={"hidden"} h="100%" w="100%">
                    <Flex justifyContent="flex-start" ml="5em" mt="2em">
                        <Button
                            borderRadius={3}
                            border="3px solid rgba(68, 68, 68, 1)"
                            paddingX={[6, 8]}
                            bg="transparent"
                            transition="none"
                            fontWeight="regular"
                            fontSize={[12, 16]}
                            onClick={props.onClose}
                            _hover={{ bg: "rgba(68, 68, 68, 1)", border: "3px solid rgba(68, 68, 68, 1)" }}
                            _active={{ bg: "rgba(68, 68, 68, 1)", border: "3px solid rgba(68, 68, 68, 1)" }}
                            _focus={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                        >
                            &#60;
                        </Button>
                    </Flex>

                    <Box w="80%" m="0 auto" mt={"2em"} borderBottom="1px solid rgb(126, 126, 126)" pb="20px">
                        <Flex justifyContent="space-between">
                            <Stack direction="row" spacing={"1.6em"} alignItems={"center"}>
                                <Image src={user.profileImage} height={["70px"]} borderRadius="50%"/>
                                <Stack>
                                    <Flex direction="row" alignItems={"center"} w={"100%"}>
                                        <Text fontFamily="Inter" fontSize={"30px"}>{user.username}</Text>
                                        <Image src="githubIcon.svg" h="25px" ml="10px"/>
                                    </Flex>
                                    <Stack direction="row" fontFamily="Poppins" textAlign="center">
                                        <Text
                                            w="60px"
                                            bgColor={user.isPro ? "#00C2FF" : "rgba(68, 68, 68, 0.59)"}
                                            borderRadius="4px"
                                            p="1px 5px"
                                        >FREE</Text>
                                        <Text color="rgb(205,205,205)">
                                            Permanent
                                        </Text>
                                    </Stack>

                                </Stack>
                            </Stack>
                            <Button
                                borderRadius={3}
                                border="3px solid transparent"
                                backgroundColor="rgba(68, 68, 68, 1)"
                                paddingX={[4, 7]}
                                bg="transparent"
                                transition="none"
                                fontWeight="regular"
                                alignSelf="center"
                                fontSize={[12, 16]}
                                _hover={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                                _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                                _focus={{ border: "3px solid transparent" }}
                            >
                                Logout
                            </Button>
                        </Flex>
                    </Box>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Profile;