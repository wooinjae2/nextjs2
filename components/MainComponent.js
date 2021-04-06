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

  function handleClick (id) {
    if(id){
      router.push('/edit/[id]', `/edit/${id}`);
    }else{
      router.push('/edit/[id]', '/edit/new');
    }
  }

  function handleDeleteClick (id) {
    console.log('deleteClick', id);
    axios.delete(`/api/v1/employees/${id}`).then((res)=> {
      console.log(res);
      setUsers(users.filter((user) => {return user.id !== id}))
      alert('삭제 완료');
    })
  }

  console.log(users);
  return (

    <div>
      <button onClick={()=>{handleClick()}}>
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
              <td><button onClick={(e)=>{handleClick(user.id)}}>수정</button></td>
              <td><button onClick={(e)=>{handleDeleteClick(user.id)}}>삭제</button></td>
              
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )

}


export default MainComponent;
