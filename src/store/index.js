import reducer from "./reducers";
import { createStore,applyMiddleware } from "redux";
import reduxPromise from 'redux-promise'

const store=createStore(reducer,applyMiddleware(reduxPromise));
export default store;
