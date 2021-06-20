import React from "react";
import { Box } from "@chakra-ui/react";

const Options = () => {

    return (
        <>
            <Box
                display={["none", "none", "none", "none", "block"]}
                position="absolute"
                w="400px"
                h="541px"
                top="10em"
                right="4em"
                borderRadius={6}
                bg="#232323"
                color="white">

            </Box>

            <Box
                display={["block", "block", "block", "block", "none"]}
                w="100%"
                h="40px"
                bg="red"
            >

            </Box>
        </>
    );
};

export default Options;