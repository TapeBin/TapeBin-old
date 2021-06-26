import '../styles/globals.css'
import "../styles/select.css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { atom } from "jotai";

export const userAtom = atom({
    username: undefined,
    profileImage: "avatar.svg",
    isLoggedIn: false
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp;
