import React from "react";
import { Avatar, Box, Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";

const Navbar = () => {

    return (
        <Flex backgroundColor="#232323" justifyContent="space-between" width="100%" color="white" align="center"
              padding={4} paddingX={[3, 20]} textAlign="center">

            <Flex align="center">
                <Heading
                    as="h1"
                    size="lg"
                    fontFamily="Pacifico, sans-serif"
                    fontSize={[30, 40]}
                    fontWeight="regular"
                    textAlign="center">
                    Tape
                </Heading>
            </Flex>

            <Stack direction="row-reverse" alignItems="center" spacing={[2, 4]} fontFamily="Poppins, sans-serif"
                   fontWeight="regular">
                <Image src="avatar.svg" boxSize={[39, 41]}/>
                <Button
                    borderRadius={3}
                    border="3px solid transparent"
                    paddingX={[2, 6]}
                    bg="transparent"
                    transition="none"
                    fontWeight="regular"
                    _hover={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                    _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                    _focus={{ border: "3px solid transparent" }}
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
                    _hover={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                    _active={{ bg: "transparent", border: "3px solid rgba(68, 68, 68, 1)" }}
                    _focus={{ border: "3px solid transparent" }}

                >
                    Tiers
                </Button>
            </Stack>
        </Flex>
    );
}

export default Navbar;