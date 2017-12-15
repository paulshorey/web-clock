import {applyMiddleware, createStore, combineReducers}  from "redux";

import logger from "redux-logger";

import * as reducers from "redux/reducers";
console.log('reducers',reducers);

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default store;
