import { combineReducers, createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./App/appReducer";
import { AuthReducer } from "./Auth/authReducer";

const rootReducer=combineReducers({
    auth:AuthReducer,
    apps:AppReducer
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))