import React from 'react';
import useShareContext from "./useShareContext";
function ShareContext(props) {

  const [user,age] = useShareContext()
  console.log(user,age,'我是自定义带来的context')
  return (
      <div>
        1111
      </div>
  );
}

export default ShareContext;
