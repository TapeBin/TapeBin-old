import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import MultiBinOption from "./MultiBinOption";

const BinList = () => {

    return (
        <Stack justifyContent="stretch" bgColor="#4a4a4a" overflowX="auto" overflowY="hidden" direction="row"
               color="#eaeaea" pt="0.5em" pb="0.5em" pl="1em" pr="1em" spacing={"1.5em"} alignItems="center">
            <MultiBinOption/>
            <MultiBinOption/>
            <MultiBinOption/>
            <MultiBinOption/>
            <MultiBinOption/>

            <Button
                border="3px solid rgba(160, 160, 160, 1)"
                bg="rgba(160, 160, 160, 1)"
                transition="none"
                fontWeight="regular"
                textAlign="center"
                fontSize={[12, 16]}
                _hover={{ bg: "transparent", border: "3px solid rgba(160, 160, 160, 1)" }}
                _active={{ bg: "transparent", border: "3px solid rgba(160, 160, 160, 1)" }}
                _focus={{ border: "3px solid transparent" }}
                onClick={() => {
                }}
            >+</Button>
        </Stack>
    );
}

export default BinList;