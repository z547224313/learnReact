import React,{useState,useEffect} from 'react';
import usePosition from "./usePosition";

function Position(props) {
  const pos = usePosition()
  return (
      <div style={{padding: '1000px 0'}}>{pos}11112222111</div>
  );
}

export default Position;
