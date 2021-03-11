import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin:true
    }
  }


  render() {
    return (
        <div>
          {
            this.state.isLogin?(
                <div>
                  登录成功，用户{this.props.match.params.username}
                </div>
            ):<Redirect to='/login'/>
          }
        </div>
    );
  }
}

User.propTypes = {};

export default User;
