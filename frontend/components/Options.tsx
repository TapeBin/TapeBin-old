import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Button as CButton, Stack, Image, useDisclosure, Slide, Flex, Text } from "@chakra-ui/react";
import Input from "./Input";
import TextBox from "./TextBox";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { atom } from "jotai";
import { useAtom } from "jotai";
import { SelectedOptionValue } from "react-select-search";
import linguist from "../utils/linguist.json";
import axios, { AxiosResponse } from "axios";
import { API_LINK } from "../utils/links";
import { useRouter } from "next/router";

const SelectSearch = dynamic(() => import("./SelectLanguage"), { ssr: false });

// ~5px for consistency
const BR = styled.br`
  content: "";
  display: block;
  margin: 2em 2em 0;
`

const Button = styled.button`
  background-color: #292929;
  width: 100%;
  height: 50px;
  font-family: "Inter", sans-serif;
  color: white;
  font-size: 17px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.15s ease-in;

  &:hover {
    background-color: #343434;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  left: -10px;
  top: 50%;
  width: 30px;
  cursor: pointer;
  color: #979797;
`;

type OptionsProps = {
    hasId: boolean,
    title?: string,
    description?: string,
    languageExtension?: string,
    languageId?: number,
    fileName?: string,
}

export const binAtom = atom({
    title: "",
    description: "",
    languageExtension: "bsl",
    languageId: 0,
    fileName: "",
    text: [""]
});

const Options: FunctionComponent<OptionsProps> = (props: OptionsProps) => {
    const router = useRouter();
    const [bin, setBin] = useAtom(binAtom);
    const [isMobileOpen, setOpen] = useState(false);
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        if (!isOpen) onToggle()
    }, []);

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBin(prevState => ({ ...prevState, title: event.target.value }));
    };

    const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBin(prevState => ({ ...prevState, description: event.target.value }));
    };

    const changeLanguage = (selectedValue: SelectedOptionValue | SelectedOptionValue[]) => {
        if (linguist.hasOwnProperty(selectedValue.toString())) {
            // @ts-ignore
            const extension = linguist[selectedValue.toString()];
            setBin(prevState => ({
                ...prevState,
                languageId: parseInt(selectedValue.toString()),
                languageExtension: extension.aceMode
            }));
        }
    };

    const changeFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBin(prevState => ({ ...prevState, fileName: event.target.value }));
    };

    const handleSaveClick = () => {
        axios({
            method: "POST",
            withCredentials: true,
            data: bin,
            url: `${API_LINK}/bin/creation`
        }).then((response: AxiosResponse) => {
            if (response.status === 201) {
                navigator.clipboard.writeText(`https://tapeb.in/${response.data.url}`);
                router.push(`/[id]`, `/${response.data.url}`, { shallow: true })
            }
        });
    }

    return (
        <>
            <Slide direction="right" in={isOpen} style={{ zIndex: 1, bottom: "initial !important" }}>
                <Box
                    d={{ base: "none", xl: "block" }}
                    position="absolute"
                    w="400px"
                    h={props.hasId ? "495px" : "570px"}
                    top="10em"
                    right="4em"
                    borderRadius={6}
                    bg="#232323"
                    color="white">
                    <Image src="minus.svg" onClick={onToggle} cursor="pointer" position="absolute" right="15px"
                           top="20px" w="25px"/>
                    <Arrow src="arrow.svg" onClick={onToggle}/>

                    <Flex direction="column" w={80} m="0 auto">
                        <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={25} mt="30px"
                              color="rgb(226, 226, 226);">Bin Options</Text>

                        <Input placeholder="Title" value={props.title || bin.title} onChange={changeTitle}
                               disabled={props.hasId}/>
                        <TextBox placeholder="Description" value={props.description || bin.description}
                                 onChange={changeDescription}
                                 disabled={props.hasId}/>
                        <BR/>
                        <SelectSearch disabled={props.hasId} value={`${props.languageId}` || bin.languageExtension}
                                      onChange={changeLanguage}/>
                        <Input placeholder="File name" value={props.fileName || bin.fileName} onChange={changeFileName}
                               disabled={props.hasId}/>
                        <BR/>
                        {!props.hasId && <Button disabled={props.hasId} onClick={handleSaveClick}>
                            Save
                        </Button>}
                    </Flex>

                </Box>
            </Slide>

            <Box
                display={["block", "block", "block", "block", "none"]}
                w="100%"
                h={isMobileOpen ? "600px" : "40px"}
                bg="#232323"
                color="white"
            >
                <Box display={isMobileOpen ? "block" : "none"}>
                    <Stack w="80%" m="0 auto">
                        <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={23} mt="13px"
                              color="rgb(226, 226, 226);">Bin Options</Text>

                        <Input placeholder="Title" value={bin.title} onChange={changeTitle} disabled={props.hasId}/>
                        <TextBox placeholder="Description" value={bin.description} onChange={changeDescription}
                                 disabled={props.hasId}/>
                        <BR/>
                        <SelectSearch value={bin.languageExtension} disabled={props.hasId} onChange={changeLanguage}/>
                        <Input placeholder="File name" value={bin.fileName} onChange={changeFileName}
                               disabled={props.hasId}/>
                        <BR/>
                        {!props.hasId && <Button disabled={props.hasId} onClick={handleSaveClick}>
                            Save
                        </Button>}
                    </Stack>
                </Box>

                <ArrowDownIcon onClick={() => setOpen(!isMobileOpen)} ml="50%" mr="50%" mb={3} mt={3}
                               transform={isMobileOpen ? "rotate(180deg)" : ""}/>
                {/*<CButton onClick={() => setOpen(!isMobileOpen)}>{isOpen ? "Close" : "Open"}</CButton>*/}
            </Box>
        </>
    );
};

export default Options;