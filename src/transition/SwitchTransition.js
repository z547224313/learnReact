import React, {PureComponent} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import styled from 'styled-components';

const CssWrapper = styled.div`
    .btn{
      &-enter{
        opacity: 0;
        transform: translateX(100%);
        transition: all 1000ms;
      }
      &-enter-active{
        transform: translateX(0);
        opacity: 1;
        
      }
      &-exit{
        opacity: 1;
        background-color: #bfa;
        transform: translateX(0);
        transition: all 1000ms;
      }
      &-exit-active{
        transform: translateX(100%);
        opacity: 0;
      }
    }
`

class SwitchTransitionx extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      on: false
    }
  }

  render() {
    return (
        <CssWrapper>
          <SwitchTransition>
            <CSSTransition key={this.state.on?'on':'off'}
                            classNames='btn'
                            timeout={1000}>
              <button onClick={event => {this.setState({on:!this.state.on})
                console.log(1111)}}>{this.state.on?'on':'off'}</button>
            </CSSTransition>
          </SwitchTransition>
        </CssWrapper>
    );
  }
}


export default SwitchTransitionx;
