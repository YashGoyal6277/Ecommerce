import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer,productDetailsReducer } from "./reducers/productReducer";
import {authReducer} from './reducers/userReducers'
const reducer=combineReducers({
   products:productsReducer,
   productDetails:productDetailsReducer,
   auth:authReducer
})
let initalState={}
const middleware=[thunk]
const store=createStore(reducer,initalState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;