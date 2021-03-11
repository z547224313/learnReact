import React,{useRef, forwardRef, useImperativeHandle}from 'react';

const FuRef = forwardRef((props,ref) => {
  useImperativeHandle(ref,()=>{
    return {
      foo:()=>{
        console.log('这是我给你的方法')
      }
    }
  })

  return (
      <h2 ref={ref}>我是函数组件的内部</h2>
  )
})




function UseRef(props) {
  const hRef = useRef();
  const fuRef = useRef()

  function change(){
    hRef.current.innerHTML = 'hello World'
    console.log(fuRef)
    fuRef.current.foo()
  }
  return (
      <div>
        <h2 ref={hRef}>hello</h2>
        <FuRef ref={fuRef}/>
        <button onClick={change}>修改内容</button>
      </div>
  );
}

export default UseRef;
