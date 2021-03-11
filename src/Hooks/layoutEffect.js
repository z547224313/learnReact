import React,{useState,useLayoutEffect} from 'react';

function LayoutEffect(props) {
  const [count,setCount] = useState(10)
  useLayoutEffect(()=>{
    if(count === 0){
      setCount(Math.random())
    }
  },[count])

  return (
      <div>
        <h2>{count}</h2>
        <button onClick={event => setCount(0)}>至0</button>
      </div>
  );
}

export default LayoutEffect;
