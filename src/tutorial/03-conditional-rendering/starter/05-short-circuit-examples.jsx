import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState();
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <>
    <h2>{text || 'default view'}</h2>
    {text && (<div>
      <h2>whaerer return</h2>
      <h2>{name}</h2>
      </div>)}
      {user && <SomeComponent name={user.name}/>}
      <h2 style={{marginBottom:'1rem 0'}}>Ternary Operation</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? <div>
        <h4>Hello user {user.name}</h4>
      </div> : <div>Please log in</div>}
    </>
  
    )
};

const SomeComponent=({name})=>{
return(
  <>
  <div>{name}</div>
  </>
)
}

export default ShortCircuitExamples;
