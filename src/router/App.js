import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Link,
    BrowserRouter,
    Route,
    withRouter,
    Switch
} from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import routes from "./index";
import Home from "./Home";
import About from "./About";
import NoMatch from './noMatch'
import User from "./User";
import Login from "./Login";
import Detail from "./Detail";

class App extends PureComponent {

  componentDidMount() {
    console.log(this.props.history)
  }

  render() {
    const username = 'aaa'
    return (
        <div>
            <Link to='/home'>首页</Link>
            <Link to='/about?name=zhangpeng&age=18'>关于</Link>
            <Link to={`/user/${username}`}>用户</Link>
            <Link to={{
              pathname:'/detail',
              state:{
                id:'123sdfgsdfgds',
                name:'456'
              }
            }}>详情</Link>



            {/*<Switch>*/}

            {/*  <Route  path='/home' component={Home}/>*/}
            {/*  <Route  path='/about' component={About}/>*/}
            {/*  <Route  path='/detail' component={Detail}/>*/}

            {/*  <Route  path='/user/:username' component={User}/>*/}
            {/*  <Route  path='/login' component={Login}/>*/}
            {/*  <Route component={NoMatch}/>*/}
            {/*</Switch>*/}
          {renderRoutes(routes)}


        </div>
    );
  }
}

App.propTypes = {};

export default withRouter(App);
