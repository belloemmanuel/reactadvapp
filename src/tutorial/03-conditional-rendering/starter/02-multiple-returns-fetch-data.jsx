import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
useEffect(()=>{
const fetchUser = async()=>{
  try {
    const resp = await fetch(url)
    const user = await resp.json()
    setUser(user);
  } catch (error) {
    console.log(error)
  }
  setIsLoading(false)
}
fetchUser();
},[])

if(isLoading){
  console.log(user)
  return <h2>Loading...</h2>;
}
if(isError){
  return <h2>There was an error...</h2>
}
return(
  <>
  {console.log(user)}
  <img src={user.avatar_url} alt={user.name}></img>
  <p>{user.name}</p>
  <p>Works at {user.company}</p>
  <p>{user.bio}</p>
 </>
)
  
};
export default MultipleReturnsFetchData;
