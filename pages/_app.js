import React from 'react';
import Head from 'next/head';
import Layout from "../src/layout";
import {useRouter, withRouter} from "next/router";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/styles/theme";
import {wrapper} from '../src/redux/store';
import {SEOHead} from "../src/layout/SEO";
import {useSelector} from "react-redux";


const MyApp = (props) => {
    const { Component, pageProps } = props;
    const seo = useSelector(state => state.seo);

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <SEOHead title={seo.title} description={seo.description} image={seo.image} url={seo.url}/>
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
