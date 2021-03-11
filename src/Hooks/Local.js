import React,{useState,useEffect} from 'react';

function Local(props) {
  const [name,setName] = useState(()=>{
   return window.localStorage.getItem('name')
  })
  useEffect(()=>{
    window.localStorage.setItem(name,'name')
  },[name])
  return (
      <div>local:{name}
        <button onClick={event => setName(111)}>修改</button>
      </div>

  );
}

export default Local;
