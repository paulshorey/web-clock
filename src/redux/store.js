import {applyMiddleware, createStore, combineReducers}  from "redux";

import logger from "redux-logger";

import anyapiMiddleware from "redux/middleware/anyapi";
import anyapiReducer from "redux/reducers/anyapi";

const createStoreWithMiddleware = applyMiddleware(logger, anyapiMiddleware)(createStore);
const reducer = combineReducers({anyapi:anyapiReducer});
const store = createStoreWithMiddleware(reducer);

export default store;
