import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class Detail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter:0
    }
  }

  render() {
    return (
        <div>
          {this.state.counter}
          <button onClick={event => this.addCounter()}>+1</button>
        </div>
    );
  }

  addCounter(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}

Detail.propTypes = {};

export default Detail;
