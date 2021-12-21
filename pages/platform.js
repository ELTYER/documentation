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
    const markdown = await require(`../src/articles/platform.md`);
    let articleSrc = `https://github.com/eltyer/documentation/blob/master/src/articles/platform.md`
    return { props: { markdown: markdown.default, articleSrc: articleSrc} }
}

export default DataContainer;
