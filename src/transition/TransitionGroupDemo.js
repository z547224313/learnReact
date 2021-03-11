import React, {PureComponent} from 'react';
import {CSSTransition,TransitionGroup} from "react-transition-group";
import styled from 'styled-components'

const CssWrapper = styled.div`
  .card{
    
    &-enter{
      transform: translateX(100%);
      transition: all 300ms;
      
    }
    &-enter-active{
      transform: translateX(0);
     
    }
    &-enter-done{
      color: red;
    }
  
  }
`
class TransitionGroupDemo extends PureComponent {

  constructor() {
    super();

    this.state = {
      list:['111','222']
    }
  }

  render() {
    return (
        <CssWrapper>
          <TransitionGroup>
            {this.state.list.map((item, key)=>{
              return(
                  <CSSTransition key={key}
                                timeout={300}
                                classNames='card'>
                    <div style={{width:'200px',textAlign:'center'}}>
                      <span>{item}</span>
                    </div>
                  </CSSTransition>
              )
            })}
          </TransitionGroup>
          <button onClick={event => this.addList()}>添加</button>
        </CssWrapper>
    );
  }
  addList(){
    this.setState({
      list:[...this.state.list,'zhangpeng']
    })
  }
}


export default TransitionGroupDemo;
