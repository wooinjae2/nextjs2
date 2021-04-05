import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

const MainComponent = () => {

  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(()=>{
      axios.get('/api/v1/employees').then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
  },[])

  function handleClick () {
    router.push('/edit');
  }

  console.log(users);
  return (

    <div>
      <button onClick={handleClick}>
      추가
    </button>
      <table>
        <thead>
          <tr>
        <th>
          firstName
        </th>
        <th>
          lastName
        </th>
        <th>
          email
        </th>
        </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>


          })}
        </tbody>
      </table>
    </div>
  )

}


export default MainComponent;
