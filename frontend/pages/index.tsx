import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Options from "../components/Options";

const Index = (props: any) => {

    return (
        <Flex flexDirection="column" height="100vh" width="100vw" position="relative">
            <Navbar/>
            <Options hasId={false}/>
        </Flex>
    );
}

export default Index;