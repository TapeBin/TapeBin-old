import React, { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";

const Options = () => {
    const [isOpen, setOpen] = useState(false);
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
                h={isOpen ? "300px" : "40px"}
                bg="red"
            >
                <Box
                    display={isOpen ? "block" : "none"}
                >
                    <Stack alignItems="center" alignContent="center">
                        <div>asdasdasd</div>
                    </Stack>


                </Box>

                <Button onClick={() => setOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</Button>
            </Box>
        </>
    );
};

export default Options;