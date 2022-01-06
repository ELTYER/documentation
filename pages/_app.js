import React, {useEffect, useState} from 'react';
import Layout from "../src/layout";
import {withRouter, Router, useRouter} from "next/router";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/styles/theme";
import {wrapper} from '../src/redux/store';
import {SEOHead} from "../src/layout/SEO";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../src/createEmoitionCache";
import SpinningWheelComponent from "../src/components/loading/CircleProgress";
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = (url) => setLoading(true);
        const handleComplete = (url) => setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return (
        <CacheProvider value={emotionCache}>
            <SEOHead/>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Layout>
                    {loading? <SpinningWheelComponent style={{height: "80vh"}}/> : <Component {...pageProps} />}
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default wrapper.withRedux(withRouter(MyApp));
