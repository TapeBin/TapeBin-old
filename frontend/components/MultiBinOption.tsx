import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";

const Input = styled.input`
  min-width: 11em;
  background-color: inherit;
  padding: 2px 5px;
  outline: none;
  flex-grow: 1;

  &:active, &:focus {
    border: 1px solid #232323;
  }

`;

const MultiBinOption = () => {

    useEffect(() => {

    }, []);

    const onBinClick = () => {

    };

    return (
        <>
            <Stack alignContent="center" direction="row" alignItems="center" textAlign="center" cursor="pointer" _hover={{bgColor: "#6d6d6d"}} onClick={onBinClick}>
                <Input type="text" placeholder="Bin name..." defaultValue="Unnamed bin"/>
                <Button
                    borderRadius={3}
                    border="3px solid transparent"
                    paddingX={[2, 6]}
                    bg="transparent"
                    transition="none"
                    fontWeight="regular"
                    fontSize={[12, 16]}
                    _hover={{ bg: "transparent", border: "3px solid rgba(160, 160, 160, 1)" }}
                    _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                    _focus={{ border: "3px solid transparent" }}
                    onClick={() => {
                    }}
                >x</Button>
            </Stack>
        </>
    );
}

export default MultiBinOption;