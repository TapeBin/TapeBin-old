import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const DynamicEditor = dynamic(() => {
    return import("../components/Editor")
}, { ssr: false });

export const getServerSideProps: GetServerSideProps<{}, Record<"id", string>> = async ({ params }) => {
    const response = await fetch(`${process.env.BACK_END}/bin/${params!!.id}`);
    const json = await response.json();
    return {
        props: {
            bin: json.document
        }
    }
}

const Page = (props: any) => {
    const [state, setState] = useState({
        title: "",
        description: "",
        languageId: 0,
        languageExtension: "",
        fileName: "",
        text: ""
    });

    useEffect(() => {
        setState({
            title: props.bin.title,
            description: props.bin.description,
            languageId: props.bin.languageId,
            languageExtension: props.bin.languageExtension,
            fileName: props.bin.fileName,
            text: props.bin.text[0]
        });

        console.log(state)
    }, [props.bin]);

    return (
        <Flex flexDirection="column" height="100vh" width="100vw" position="relative">
            <Navbar/>
            <Options
                hasId={true}
                title={state.title}
                description={state.description}
                languageId={state.languageId}
                languageExtension={state.languageExtension}
                fileName={state.fileName}
            />
            <DynamicEditor
                value={state.text}
                language={state.languageExtension}
            />
        </Flex>
    );
}

export default Page;