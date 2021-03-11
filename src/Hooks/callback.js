import React,{useState,useCallback,memo} from 'react';

const HyBtn = memo((props)=>{
  console.log(props.title,'重新渲染')
  return (
      <button onClick={props.add}>+1</button>
  )})

function Callback(props) {
  const [counter,setCounter] = useState(0)
  const [show,setShow] = useState(false)

  const add1 = ()=>{
    console.log('add1')
    setCounter(counter+1)
  }

  const add2 = useCallback(()=>{
    console.log('add2')
    setCounter(counter+1)
  },[counter])

  return (
      <div>
        <h2>counter:{counter}</h2>
        <HyBtn title='add1' add={add1}/>
        <HyBtn title='add2' add={add2}/>
        <h2>{show}</h2>
        <button onClick={event => setShow(!show)}>changeShow</button>
      </div>
  );
}

export default Callback;
