import MarkdownArticle from "../src/markdown/MarkdownArticle";
import React from "react";
import {Contributing} from "../src/components/articles";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions} from "../src/redux/actions";
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

    if(loading) {
        dispatch(pageLoadingActions.finished());
    }

    return <View markdown={markdown} articleSrc={articleSrc}/>
}

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req, res, ...etc }) => {
        const markdown = await require(`../src/articles/platform.md`);
        let articleSrc = `https://github.com/eltyer/documentation/blob/master/src/articles/platform.md`
        return { props: { markdown: markdown.default, articleSrc: articleSrc} }
    }
);


export default wrapper.withRedux(DataContainer);
