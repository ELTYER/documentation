import Head from 'next/head'
import React from "react";
import {APP_DESCRIPTION, APP_TITLE, SEO_IMAGE, SEO_URL} from "../../configuration";

export const SEOHead = ({
    title = APP_TITLE,
    description = APP_DESCRIPTION,
    image = SEO_IMAGE,
    url = SEO_URL,
}) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name="description" content={description} />
            <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Lexend+Giga&display=swap" rel="stylesheet"/>

            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:url" content={url}/>
            <meta name="description" content={description}/>

            {/*<meta property="og:type" content="homepage"/>*/}
            {/*<meta property="og:locale" content="nl_NL"/>*/}
            {/*<meta property="og:locale:alternate" content="x_default"/>*/}
            {/*<meta property="og:locale:alternate" content="nl_BE"/>*/}
            {/*<meta property="og:locale:alternate" content="nl"/>*/}
        </Head>
    )
}
