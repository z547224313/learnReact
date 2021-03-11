import {ADD_NUM, Change_Banner} from "./constants.js";

const defaultState = {
  counter: 0,
  banners:[]
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUM:
      return {...state, counter: state.counter + action.num}
    case Change_Banner:
      return {...state, banners:action.banners}
    default:
      return state
  }
}

export default reducer
