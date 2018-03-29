import reducer from "./reducers";
import { createStore,applyMiddleware } from "redux";
import reduxPromise from 'redux-promise'
import reduxLogger from 'redux-logger'

const store=createStore(reducer,applyMiddleware(reduxPromise,reduxLogger));
export default store;
