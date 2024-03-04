import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick =()=>{
   setTimeout(()=>{
    setValue((currentState)=>{
      return currentState + 1;
    });
   }, 3000);
  };
  return (
    <>
    <p>{value}</p>
    <button onClick={handleClick}>increase</button>
    </>
    )
};

export default UseStateGotcha;
