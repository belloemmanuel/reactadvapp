import React from "react";

const ErrorExample = () => {
  let count = 0
  const increaseCount =()=>{
    count = count + 1;
    console.log(count)
  }
  return (
    <>
    <h>This is our {count}</h>
    <button type='button' onClick={increaseCount} className="btn">Increase</button>
    </>
  )
};

export default ErrorExample;
