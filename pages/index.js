import MarkdownArticle from "../src/markdown/MarkdownArticle";
import React from "react";

const DataContainer = ({markdown}) => {

    return (
        <>
            <MarkdownArticle markdown={markdown}/>
        </>
    )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const markdown = await require(`../src/articles/home.md`);
    let articleSrc = `https://github.com/eltyer/documentation/blob/master/src/articles/home.md`
    return { props: { markdown: markdown.default, articleSrc: articleSrc} }
}

export default DataContainer;
