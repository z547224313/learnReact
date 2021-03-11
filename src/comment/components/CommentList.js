import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CommentList extends PureComponent {
  render() {
    return (
        <div>
          {this.props.message}
        </div>
    );
  }
}

CommentList.propTypes = {};

export default CommentList;
