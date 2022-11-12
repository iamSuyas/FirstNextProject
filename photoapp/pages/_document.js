import { Html, Head, body, Main, NextScript } from "next/document";
import Navbar from "../components/navbar";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Navbar />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}