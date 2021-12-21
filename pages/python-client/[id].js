import React from "react";
import glob from 'glob';
import MarkdownArticle from "../../src/markdown/MarkdownArticle";
import {Contributing} from "../../src/components/articles";


const MarkdownPage = ({markdown, articleSrc}) => {

    return (
        <>
            <MarkdownArticle markdown={markdown}/>
            <br/>
            <Contributing source={articleSrc}/>
        </>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const articles = glob.sync("./src/articles/python_client/*.md");

    const paths = articles.map((article) => {
        let pathName = article.split("./src/articles/python_client/")[1]
        pathName = pathName.split(".md")[0]
        return `/python-client/${pathName}`;
    })

    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const markdown = await require(`../../src/articles/python_client/${params.id}.md`);
    let articleSrc = `https://github.com/eltyer/blob/master/src/articles/python_client/${params.id}.md`
    return { props: { markdown: markdown.default, articleSrc: articleSrc} }
}

export default MarkdownPage;