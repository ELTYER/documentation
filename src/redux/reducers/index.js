import {combineReducers} from 'redux';
import loadingReducer from "./loading";
import layoutReducer from "./layout";

export default combineReducers({
    loading: loadingReducer,
    layout: layoutReducer
});
