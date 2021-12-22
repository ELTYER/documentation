import MarkdownArticle from "../src/markdown/MarkdownArticle";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions} from "../src/redux/actions";
import {Contributing} from "../src/components/articles";
import {wrapper} from "../src/redux/store";

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
    console.log("hello");
    console.log(loading);
    if(loading) {
        dispatch(pageLoadingActions.finished());
    }

    return <View markdown={markdown} articleSrc={articleSrc}/>
}

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req, res, ...etc }) => {
        const markdown = await require(`../src/articles/home.md`);
        let articleSrc = `https://github.com/eltyer/documentation/blob/master/src/articles/home.md`
        return { props: { markdown: markdown.default, articleSrc: articleSrc} }
    }
);

export default wrapper.withRedux(DataContainer);
