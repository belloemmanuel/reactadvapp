import { useState } from "react";
import { useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch(url);
      const users = await response.json()
      console.log(users);
      } catch (error) {
        console.log(error)
      }
      
    };
    fetchData()
  },[]);

  return (
  <section>
    <h3>github users</h3>
    <ul className="users">
   {users.map((user)=>{
    return <li>item</li>
   })}
    </ul>
  </section>
    )
};
export default FetchData;
