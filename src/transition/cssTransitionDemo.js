import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components'
const { Meta } = Card;



const CssWrapper = styled.div`
  .card{
    &-enter{
      //刚播放 true
      opacity: 0;
      transform:scale(.6) ;
    }
    &-enter-active{
      //播放进行时 true 
      opacity: 1;
      transition: all 300ms;
      transform:scale(1) ;
    }
    &-exit{
      //刚结束 false
      opacity: 1;
      transform:scale(1) ;
    }
    &-exit-active{
      //结束动画进行时 false
      opacity: 0;
      transform:scale(.6);
      transition: all 300ms;
    }
    &-exit-done{
      //结束动画完成定格 false
      opacity: 0;
    }
  }
`


class CssTransitionDemo extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isShow:true
    }
  }

  render() {
    return (
        <CssWrapper>
          <CSSTransition in={this.state.isShow} classNames='card' timeout={300}>
            <Card
                style={{ width: 300 }}
                cover={
                  <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
            >
              <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
              />
            </Card>
          </CSSTransition>
          <button onClick={event => this.setState({isShow:!this.state.isShow})}>显示/隐藏</button>
        </CssWrapper>
    );
  }
}

CssTransitionDemo.propTypes = {};

export default CssTransitionDemo;
