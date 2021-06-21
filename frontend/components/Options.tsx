import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Button as CButton, Stack, Image, useDisclosure, Slide, Flex, Text } from "@chakra-ui/react";
import Input from "./Input";
import TextBox from "./TextBox";
import styled from "styled-components";
import dynamic from "next/dynamic";

const SelectSearch = dynamic(() => import("./Select"), { ssr: false });

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
    hasId: boolean
}

const Options: FunctionComponent<OptionsProps> = (props: OptionsProps) => {
    const [isMobileOpen, setOpen] = useState(false);
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        if (!isOpen) onToggle()
    }, []);

    return (
        <>
            <Slide direction="right" in={isOpen}>
                <Box
                    display={["none", "none", "none", "none", "block"]}
                    position="absolute"
                    w="400px"
                    h="570px"
                    top="10em"
                    right="4em"
                    borderRadius={6}
                    bg="#232323"
                    color="white">
                    <Image src="minus.svg" onClick={onToggle} cursor="pointer" position="absolute" right="15px"
                           top="20px" w="25px"/>
                    <Arrow src="arrow.svg" onClick={onToggle}/>

                    <Flex direction="column" w={80} m="0 auto">
                        <Text fontFamily="Poppins, sans-serif" fontWeight="700" fontSize={25} mt="30px" color="rgb(226, 226, 226);">Bin Options</Text>

                        <Input placeholder="Title" disabled={props.hasId}/>
                        <TextBox placeholder="Description" disabled={props.hasId}/>
                        <BR/>
                        <SelectSearch disabled={props.hasId}/>
                        <Input placeholder="File name" disabled={props.hasId}/>
                        <BR/>
                        <Button disabled={props.hasId}>
                            Save
                        </Button>
                    </Flex>

                </Box>
            </Slide>

            <Box
                display={["block", "block", "block", "block", "none"]}
                w="100%"
                h={isMobileOpen ? "300px" : "40px"}
                bg="#444444"
                color="white"
            >
                <Box
                    display={isMobileOpen ? "block" : "none"}
                >
                    <Stack alignItems="center" alignContent="center">
                        <div>asdasdasd</div>
                    </Stack>


                </Box>

                <CButton onClick={() => setOpen(!isMobileOpen)}>{isOpen ? "Close" : "Open"}</CButton>
            </Box>
        </>
    );
};

export default Options;