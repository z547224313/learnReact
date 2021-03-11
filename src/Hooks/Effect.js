import React,{useEffect,useState} from 'react';

function Effect(props) {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    //只有count修改时才会被调用
    console.log('修改dom', count)
  },[count])

  useEffect(()=>{
    console.log('订阅事件')
    return ()=>{
      //默认unMount
      console.log('取消订阅')
    }
  },[])

  useEffect(()=>{
    console.log('网络请求')
  },[])
  return (
      <div>
        <h2>count:{count}</h2>
        <button onClick={event => setCount(count+1)}>+1</button>
      </div>
  );
}

export default Effect;
