import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

type BinProps = {
    binId: string,
    createdAt: string,
    title: string,
    description: string,
    languageId: number,
    isDarker: boolean,
    closeBin: () => void;
};

const Bin: FunctionComponent<BinProps> = (props: BinProps) => {

    return (
        <Box w="100%" h="80px" bgColor={props.isDarker ? "rgba(68, 68, 68, 0.3)" : "rgba(68, 68, 68, 1)"}>

        </Box>
    );
}

export default Bin;