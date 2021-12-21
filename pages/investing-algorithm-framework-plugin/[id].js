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
    const articles = glob.sync("./src/articles/investing_algorithm_framework_plugin/*.md");

    const paths = articles.map((article) => {
        let pathName = article.split("./static/articles/investing_algorithm_framework_plugin/")[1]
        pathName = pathName.split(".md")[0]
        return `/investing-algorithm-framework-plugin/${pathName}`;
    })

    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const markdown = await require(`../../src/articles/investing_algorithm_framework_plugin/${params.id}.md`);
    let articleSrc = `https://github.com/eltyer/blob/master/src/articles/investing_algorithm_framework_plugin/${params.id}.md`
    return { props: { markdown: markdown.default, articleSrc: articleSrc} }
}

export default MarkdownPage;