import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from "./components/CommentList";
import CommentInput from "./components/CommentInput";
import styled from 'styled-components'

const AppWrapper = styled.div`
  margin: 0 400px;
`
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      commentList : []
    }
  }
  render() {
    return (
        <AppWrapper>
          {
            this.state.commentList.map(item=>{
              console.log(item)
              return (
                  <CommentList key={item} message={item}/>
              )
            })
          }
          <CommentInput commentListAdd={newItem => this.addList(newItem)} />
        </AppWrapper>
    );
  }
  addList(newItem){
    console.log(newItem)
    const newList = [...this.state.commentList,newItem]
    this.setState({
      commentList:newList
    })
  }
}

App.propTypes = {};

export default App;
