import React,{useContext} from 'react';
import {UserContext,AgeContext} from "./App";

function Context(props) {
  const user = useContext(UserContext)
  const age = useContext(AgeContext)

  console.log(user,age)
  return (
      <div>111</div>
  );
}

export default Context;
