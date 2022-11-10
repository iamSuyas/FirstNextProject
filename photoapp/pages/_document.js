import { Html, Head, body, Main, NextScript } from "next/document";
import Navbar from "../components/navbar";
import Screena from "../components/screena";
import Screenb from "../components/screenb";
import Screenc from "../components/screenc";
import Screend from "../components/screend";

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
                <Main />
                <Navbar />
                <Screena />
                <Screenb />
                <Screenc />
                <Screend />



                <NextScript />
            </body>
        </Html>
    )
}