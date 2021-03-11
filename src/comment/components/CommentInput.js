import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Input,Button } from 'antd';
import styled from 'styled-components'
import EventEmitter from 'events'

const CommentInputWrapper = styled.div`
    .inputBtn{
      float: right;
      margin-top: 20px;
    }
`


const { TextArea } = Input;

class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue:''
    }
  }

  render() {
    return (
        <CommentInputWrapper>
          <div className='textArea'>
            <TextArea rows={4} value={this.state.inputValue} onChange={e => this.handleChange(e)} name='inputValue'/>
          </div>
          <div className='inputBtn'>
            <Button type="primary" onClick={e => this.sendMessage()}>发送信息</Button>
          </div>
        </CommentInputWrapper>
    );
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  sendMessage(){
    this.props.commentListAdd(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }
}

CommentInput.propTypes = {

};

export default CommentInput;
