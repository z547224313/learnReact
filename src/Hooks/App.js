import React ,{useState,createContext}from 'react';
import MultiData from "./MultiData";
import Effect from "./Effect";
import Context from './context'
import UseReducer from "./useReducer";
import Callback from "./callback";
import UseMemoCal from "./UseMemoCal";
import UseRef from "./useRef";
import UseRef2 from "./useRef2";
import LayoutEffect from "./layoutEffect";
import ShareContext from "./ShareContext";
import Position from "./Position";
import Local from "./Local";
export const UserContext = createContext();
export const AgeContext = createContext()
function App(props) {
  const arr = useState(0)
  const state = arr[0]
  const setState = arr[1]
  const [show, setShow] = useState(true)
  return (
      <div>
        <div>
          counter：{state}
          <button onClick={event => setState(state+1)}>+1</button>
          <button onClick={event => setState(state-1)}>-1</button>
        </div>
        <MultiData/>
        {show && <Effect/>}
        <button onClick={event => setShow(!show)}>显示/no</button>

        <UserContext.Provider value={{user:'1111'}}>
          <AgeContext.Provider value={{age:18}}>
            <Context/>
          </AgeContext.Provider>
        </UserContext.Provider>

        <UseReducer/>
        <Callback/>

        <UseMemoCal/>
        <UseRef/>
        <UseRef2/>
        <LayoutEffect/>

        <UserContext.Provider value={{user:'1111'}}>
          <AgeContext.Provider value={{age:18}}>
            <ShareContext/>
          </AgeContext.Provider>
        </UserContext.Provider>

        <Position/>
        <Local/>
      </div>

  );
}

export default App;
