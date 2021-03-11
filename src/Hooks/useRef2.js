import React, {useEffect, useState,useRef} from 'react';

function UseRef2(props) {
  console.log('重新渲染')
  const [counter,setCounter] = useState(0)

  const counterRef = useRef(counter)
  //执行顺序是，首先改变counter然后重新执行函数组件
  //由于useRef的返回值是ref对象，在整个生命周期内无变化，所以counterRef还是保存上一次的值
  //由于counter改变,useEffect调用，改变counterRef的值，但是不会重新渲染函数组件导致显示的还是上一次的值
  useEffect(()=>{
    counterRef.current = counter
  },[counter])
  return (
      <div>
        <h2>上一次的值 {counterRef.current}</h2>
        <h2>zhe一次的值 {counter}</h2>
        <button onClick={event => setCounter(counter+1)}>+1</button>
      </div>
  );
}

export default UseRef2;
