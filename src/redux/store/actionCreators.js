import axios from "axios";

import {ADD_NUM,Change_Banner} from "./constants.js";

export const addAction = num => ({
  //加一个小括号,返回整一个对象
  type: ADD_NUM,
  num
})

export const changeBannersAction = banners => ({
  type: Change_Banner,
  banners
})

//redux-thunk中定义的action函数
export const getHomeMultiDateAction = dispatch => {
  console.log('action ')
  axios({
    url:'http://123.207.32.32:8000/home/multidata',
    timeout:200
  }).then(res=>{
    //这里调用普通action通知reducer修改store里面的值
    dispatch(changeBannersAction(res.data.data.banner.list))
  })
}
