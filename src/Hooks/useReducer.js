import React,{useReducer} from 'react';


function reducer(state,action){
  switch (action.type){
    case 'add':
      return {...state,counter:state.counter+1};
    default:
      return state
  }
}

function UseReducer(props) {

  const [state, dispatch] = useReducer(reducer,{counter:0})

  return (
      <div>
        <h2>counter:{state.counter}</h2>
        <button onClick={event => dispatch({type:'add'})}>+1</button>
      </div>
  );
}

export default UseReducer;
