import React, { FunctionComponent, useEffect, useState } from "react";
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
import { API_LINK } from "../utils/links";
import axios, { AxiosResponse } from "axios";
import Bin from "./Bin";

type ProfileProps = {
    onClose: () => void,
    isOpen: boolean
};

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
    const [user] = useAtom(userAtom);
    const [state, setState] = useState<any>();

    const showUserBins = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: `${API_LINK}/bin/user`
        }).then((result: AxiosResponse) => {
            setState(result.data.bins);
        })
    };

    useEffect(() => {
        if (user.isLoggedIn)
            showUserBins();
    }, []);

    return (
        <Drawer onClose={props.onClose} isOpen={props.isOpen} size={"full"} placement={"top"}>
            <DrawerOverlay/>
            <DrawerContent bg={"#232323"} color="white" alignItems={"center"}>
                <DrawerBody mt="5em" overflow={"hidden"} h="100%" w="100%" overflowY="auto">
                    <Flex justifyContent="flex-start" ml={{ base: "1em", xl: "5em" }} mt={{ base: "0.7em", xl: "2em" }}>
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

                    <Stack w={{ base: "95%", xl: "80%" }} h={"80%"} m="0 auto" mt={"2em"} mb={{ base: "0", lg: "2em" }}>
                        <Box borderBottom="1px solid rgb(126, 126, 126)" pb="20px" mb="20px">
                            <Flex justifyContent="space-between">
                                <Stack direction="row" spacing={{ base: "0.7em", xl: "1.6em" }} alignItems={"center"}>
                                    <Image src={user.profileImage} height={{ base: "50px", xl: "70px" }}
                                           borderRadius="50%"/>
                                    <Stack>
                                        <Flex direction="row" alignItems={"center"} w={"100%"}>
                                            <Text fontFamily="Inter"
                                                  fontSize={{ base: "20px", xl: "30px" }}>{user.username}</Text>
                                            <Image src="githubIcon.svg" h={{ base: "20px", xl: "25px" }} ml="10px"/>
                                        </Flex>
                                        <Stack direction="row" fontFamily="Poppins" textAlign="center">
                                            <Text
                                                w={{ base: "50px", xl: "60px" }}
                                                fontSize={{ base: "13px", xl: "16px" }}
                                                bgColor={user.isPro ? "#00C2FF" : "rgba(68, 68, 68, 0.59)"}
                                                borderRadius="4px"
                                                p={{ base: "2px 1px", xl: "1px 5px" }}
                                            >FREE</Text>
                                            <Text color="rgb(205,205,205)" fontSize={{ base: "13px", xl: "16px" }}>
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
                                    fontFamily="Poppins, sans-serif"
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

                        <Stack overflowY="auto" h="80% !important">
                            {state && state.map((bin: any, index: number) => {
                                return (<Bin
                                    binId={bin.binId}
                                    createdAt={bin.createdAt}
                                    title={bin.title}
                                    description={bin.description}
                                    languageId={bin.languageId}
                                    isDarker={index % 2 === 0}
                                    closeBin={() => {
                                    }}
                                />)
                            })}
                        </Stack>
                    </Stack>


                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Profile;