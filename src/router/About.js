import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from "react-router-config";
import {Link, Route, Switch} from "react-router-dom";

export function History (props){
  return (
      <div>企业历史</div>
  )
}
export function Culture(props){
  return (
      <div>文化文化</div>
  )
}
export function Jump(props){
  return (
      <div>手动跳转</div>
  )
}

class About extends PureComponent {
  render() {
    console.log(this.props)
    return (
        <div>
          <h2>About</h2>
          <Link to='/about/history'>历史</Link>
          <Link to='/about/culture'>文化</Link>
          <button onClick={event => this.jumpTO()}>跳转到</button>

          {/*<Switch>*/}
          {/*  <Route exact path='/about' component={History}/>*/}
          {/*  <Route exact path='/about/history' component={History}/>*/}
          {/*  <Route exact path='/about/culture' component={Culture}/>*/}
          {/*  <Route exact path='/about/jump' component={Jump}/>*/}
          {/*</Switch>*/}
          {renderRoutes(this.props.route.routes)}
        </div>
    );
  }
  jumpTO(){
    console.log(this.props.history)
    console.log(this.props.location)
    console.log(this.props.match)
    this.props.history.push('/about/jump')
  }
}

About.propTypes = {};

export default About;
