import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { API_LINK } from "../utils/links";
const DynamicEditor = dynamic(() => {
    return import("../components/Editor")
}, { ssr: false });

export const getServerSideProps: GetServerSideProps<{}, Record<"id", string>> = async ({ params }) => {
    const response = await fetch(`${API_LINK}/${params!!.id}`)
    const json = await response.json();
    return {
        props: {
            bin: json.document
        }
    }
}

const Page = (props: any) => {

    return (
        <Flex flexDirection="column" height="100vh" width="100vw" position="relative">
            <Navbar/>
            <Options hasId={true}/>
            <DynamicEditor
                value={props.bin.text[0]}
                language={props.bin.languageExtension}
            />
        </Flex>
    );
}

export default Page;