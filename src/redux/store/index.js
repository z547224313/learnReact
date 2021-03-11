import {createStore ,applyMiddleware,compose} from 'redux'
import thunkMiddleware from "redux-thunk";

import reducer from './reducer.js'

//合并中间件增强和devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose

//应用一些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer))



export default store
