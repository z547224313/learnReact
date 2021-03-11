import React, {Fragment, PureComponent} from 'react';
import styled from 'styled-components'

const TestWrapper = styled.div`
  color: #61dafb;
  .main{
    background-color: #bfa;
    width: 200px;
    height: 200px;
    color: ${props => props.mainColor};//注意这里必须要用分号结尾
    .tab{
      color: #282c34;
    }
  }
`

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      color:'red'
    }
  }


  render() {
    return (
        <Fragment>
          <TestWrapper mainColor={this.state.color}>
            <div className="main">
              我是主要的
              <p className="tab">我是一段文字</p>
            </div>
            <button onClick={event => this.btnClick()}>修改成粉色</button>
          </TestWrapper>
        </Fragment>
    );
  }

  btnClick(){
    this.setState({
      color:'pink'
    })
  }
}

export default App;
