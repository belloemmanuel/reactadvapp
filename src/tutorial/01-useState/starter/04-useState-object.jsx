import React from 'react';
import { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson] = useState({
    name:'Peter', 
    age:13, 
    hobby:' singing'});

  const handleClick =()=>{
    setPerson({...person, name:'susan'})
    console.log(person)
  }

  return (
    <>
    <p>{person.name}</p>
    <p>{person.age}</p>
    <p>Enjoys:{person.hobby}</p>
    <button type='button' className='btn' onClick={handleClick}>Show John</button>
    </>
  )
};

export default UseStateObject;
