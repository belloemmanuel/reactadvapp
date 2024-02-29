import React, { useState } from "react";
import {data} from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
  <>
  {people.map((person)=>{
    const {id, name} = person
    return <div key={id}>
      <h4>{name}</h4>
      <button type="button" className="btn" onClick={()=>removeItem(id)}>remove</button>
    </div>
  })}
  <button type="button" className="btn" style={{color:'white', backgroundColor:'red'}} onClick={()=>setPeople([])}>Clear all</button>
  <button type="button" className="btn" style={{color:'white', backgroundColor:'green'}} onClick={()=>setPeople(data)}>Reset List</button>
  </>
  )
};

export default UseStateArray;
