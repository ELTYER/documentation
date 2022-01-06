import MarkdownArticle from "../src/markdown/MarkdownArticle";
import React from "react";
import {Contributing} from "../src/components/articles";
import {useDispatch, useSelector} from "react-redux";
import {pageLoadingActions, sideNavValueAction} from "../src/redux/actions";
import {wrapper} from "../src/redux/store";
import {setSEOVariablesAction} from "../src/redux/actions/seo";
import {initialize} from "../src/initialize";

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
        await initialize(req, store);
        const markdown = await require(`../src/articles/platform.md`);
        let articleSrc = `https://github.com/eltyer/documentation/blob/master/src/articles/platform.md`
        store.dispatch(sideNavValueAction("platform"));
        store.dispatch(setSEOVariablesAction("Platform"));
        return { props: { markdown: markdown.default, articleSrc: articleSrc} }
    }
);


export default wrapper.withRedux(DataContainer);
