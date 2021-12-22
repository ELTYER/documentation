import React from "react";
import glob from 'glob';
import MarkdownArticle from "../../src/markdown/MarkdownArticle";
import {Contributing} from "../../src/components/articles";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions} from "../../src/redux/actions";
import {wrapper} from "../../src/redux/store";

const View = ({markdown, articleSrc}) => {

    return (
        <>
            <MarkdownArticle markdown={markdown}/>
            <br/>
            <Contributing source={articleSrc}/>
        </>
    )
}

const DataContainer = ({markdown, articleSrc}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading.pageLoading);

    if(loading) {
        dispatch(pageLoadingActions.finished());
    }

    return <View markdown={markdown} articleSrc={articleSrc}/>
}

// This function gets called at build time
export async function getStaticPaths() {
    const articles = glob.sync("./src/articles/investing_algorithm_framework_plugin/*.md");

    const paths = articles.map((article) => {
        let pathName = article.split("./src/articles/investing_algorithm_framework_plugin/")[1]
        pathName = pathName.split(".md")[0]
        return `/investing-algorithm-framework-plugin/${pathName}`;
    })

    return { paths, fallback: false }
}

export const getStaticProps = wrapper.getStaticProps((store) =>
    async ({ req, res, ...etc }) => {
        const markdown = await require(`../../src/articles/investing_algorithm_framework_plugin/${etc.params.id}.md`);
        let articleSrc = `https://github.com/eltyer/blob/master/src/articles/investing_algorithm_framework_plugin/${etc.params.id}.md`
        return { props: { markdown: markdown.default, articleSrc: articleSrc} }
    }
);

export default DataContainer;