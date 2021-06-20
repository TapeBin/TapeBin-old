import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Index = (props: any) => {

    return (
        <Flex flexDirection="column" height="100vh" width="100vw">
            <Navbar/>
        </Flex>
    );
}

export default Index;