import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import linguist from "../utils/linguist.json";
import { CalendarIcon, DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

type BinProps = {
    binId: string,
    createdAt: string,
    title: string,
    description: string,
    languageId: number,
    isDarker: boolean,
    closeBin: () => void;
};

const Bin: FunctionComponent<BinProps> = (props: BinProps) => {
    const [state, setState] = useState({
        title: props.binId,
        color: "#C7C7C7",
        language: "Text"
    });


    useEffect(() => {
        if (props.title)
            setState(prevState => ({ ...prevState, title: `${props.binId} | ${props.title}` }));
        // @ts-ignore
        const language = linguist[props.languageId];
        setState(prevState => ({
            ...prevState,
            color: `#${language.color}`,
            language: language.name
        }));

        console.log(state.color);
    }, []);

    return (
        <Box w="100%" h="80px" p="15px 0" bgColor={props.isDarker ? "rgba(68, 68, 68, 0.3)" : "rgba(68, 68, 68, 1)"}>
            <Flex direction="row" h="100%" ml={{ base: "5px", xl: "20px" }} mr={{ base: "5px", xl: "20px" }} alignItems="center !important"
                  alignContent="center !important" justifyContent="space-between">
                <Flex w={{base: "11em", xl: "20em"}} direction="column" whiteSpace="nowrap">
                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontSize={{ base: "14px", xl: "20px" }}
                        css={{
                            "-webkit-line-clamp": "1",
                            "-webkit-box-orient": "vertical"
                        }}
                        display={"-webkit-box"}
                        textAlign="left"
                        textOverflow="ellipsis"
                        whiteSpace="initial"
                        overflow="hidden"
                        h={{ base: "20px", xl: "30px" }}
                    >
                        {state.title}
                    </Text>
                    <Flex justifyContent="left" alignItems="center" color="rgba(255, 255, 255, 0.7)"
                          fontSize={{ base: "13px", xl: "16px" }} mt="7px">
                        <div style={{
                            borderRadius: "50%",
                            backgroundColor: state.color,
                            height: "10px",
                            width: "10px",
                            marginRight: "10px"
                        }}/>
                        {state.language}
                    </Flex>
                </Flex>
                <Text
                    fontFamily="Inter, sans-serif"
                    fontSize={{ base: "13px", xl: "16px" }}
                    css={{
                        "-webkit-line-clamp": "2",
                        "-webkit-box-orient": "vertical"
                    }}
                    display={{ base: "none", lg: "-webkit-box" }}
                    textAlign="left"
                    textOverflow="ellipsis"
                    whiteSpace="initial"
                    overflow="hidden"
                    color="rgba(255, 255, 255, 0.7)"
                    h={{ base: "80%", xl: "100%" }}
                    w={{ base: "30%", xl: "100%" }}
                    ml={{ base: "15px", xl: "0" }}
                >
                    {props.description || "No description"}
                </Text>
                <Flex direction="column" w={"14em"} alignItems="left" alignContent="left" justifyContent="flex-start" color="rgba(255, 255, 255, 0.8)" fontFamily="Inter, sans-serif" fontSize={{base: "13px", xl: "16px"}}>
                    <Stack direction="row" alignItems="center" alignContent="center">
                        <ViewIcon/>
                        <Text>0 views</Text>
                    </Stack>
                    <Stack direction="row" alignItems="center" alignContent="center">
                        <CalendarIcon/>
                        <Text>{props.createdAt}</Text>
                    </Stack>
                </Flex>

                <Flex direction="row" w="5em" alignItems="left" alignContent="left" justifyContent="space-evenly" ml={{base: "0.3em", xl: "3em"}}>
                    <EditIcon h={{base: "20px", xl: "25px"}} w={{base: "20px", xl: "25px"}} mr="10px"/>
                    <DeleteIcon color="#FF5151" h={{base: "20px", xl: "25px"}} w={{base: "20px", xl: "25px"}}/>
                </Flex>

            </Flex>
        </Box>
    );
}

export default Bin;