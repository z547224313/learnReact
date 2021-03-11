import React,{useMemo,useState} from 'react';

  function calc(counter){
    console.log('重新计算')
    let res = 0
    for(let i = 0;i<counter;i++){
      res += i
    }
    return res
  }

function UseMemoCal(props) {
  const [counter,setCounter] = useState(1)
  const [show,setShow] = useState(false)

  let calcMemoRes = useMemo(()=>{
    //当counter 不改变的时候，这个useMemo就会返回之前的返回值，不会重新调用calc来计算
    //这里的返回值是一个数
    return calc(counter)
  },[counter])

  return (
      <div>
        <h2>综合:{calcMemoRes}</h2>
        <button onClick={event => setCounter(counter+1)}>+1</button>
        <button onClick={event => setShow(!show)}>changeShow</button>
      </div>
  );
}

export default UseMemoCal;
