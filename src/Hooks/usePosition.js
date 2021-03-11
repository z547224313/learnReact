import React,{useState,useEffect} from 'react';

export default function (){
  const [pos,setPos] = useState()
  useEffect(()=>{
    const getPos = ()=>{
      setPos(window.scrollY)
    }
    document.addEventListener('scroll',getPos)
    return ()=>{
      document.removeEventListener('scroll',getPos)
    }
  },[pos])
  return pos
}
