import {applyMiddleware, createStore, combineReducers}  from "redux";

import logger from "redux-logger";

import anyapi from "redux/reducers/anyapi";

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers(anyapi);
const store = createStoreWithMiddleware(reducer);

export default store;
