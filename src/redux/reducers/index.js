import {combineReducers} from 'redux';
import loadingReducer from "./loading";
import layoutReducer from "./layout";
import SEOReducer from "./seo";

export default combineReducers({
    loading: loadingReducer,
    layout: layoutReducer,
    seo: SEOReducer
});
