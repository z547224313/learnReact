import ReactDOM from 'react-dom'
import React from 'react'
import App from "./Hooks/App"
import 'antd/dist/antd.less'
import {StoreContext} from "./redux/utils/context";
import {Provider} from 'react-redux'
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>



    ,document.getElementById('root'))
