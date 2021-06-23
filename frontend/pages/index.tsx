import React from "react";
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import dynamic from "next/dynamic";
const DynamicEditor = dynamic(() => {
    return import("../components/Editor")
}, { ssr: false });


const Index = (props: any) => {

    return (
        <Flex flexDirection="column" height="100vh" width="100vw" position="relative">
            <Navbar/>
            <Options hasId={false}/>
            <DynamicEditor/>
        </Flex>
    );
}

export default Index;