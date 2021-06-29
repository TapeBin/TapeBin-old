import '../styles/globals.css'
import "../styles/select.css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { atom } from "jotai";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API_LINK } from "../utils/links";
import { useAtom } from "jotai";

export const userAtom = atom({
    username: undefined,
    githubId: undefined,
    discordId: undefined,
    profileImage: "avatar.svg",
    isLoggedIn: false,
    isPro: false,
});

function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useAtom(userAtom);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: `${API_LINK}/user`
        }).then((result: AxiosResponse) => {
            if (result.data.username) {
                setUser({
                    username: result.data.username,
                    githubId: result.data.githubId,
                    discordId: result.data.discordId,
                    profileImage: `https://avatars.githubusercontent.com/u/${result.data.githubId}?v=3`,
                    isLoggedIn: true,
                    isPro: false
                });
            }
            console.log(process.env.BACK_END)

            setLoaded(true);
        });

    }, []);

    return (
        <ChakraProvider>
            {isLoaded && <Component {...pageProps} />}
        </ChakraProvider>
    )
}

export default MyApp;
