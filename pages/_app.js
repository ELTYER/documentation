import React from 'react';
import Head from 'next/head';
import Layout from "../src/layout";
import {useRouter, withRouter} from "next/router";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/styles/theme";
import {wrapper} from '../src/redux/store';


const MyApp = (props) => {
    const { Component, pageProps } = props;
    const router = useRouter();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>ELTYER | Documentation</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default wrapper.withRedux(withRouter(MyApp));
