import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import './edit.module.css';
import axios from 'axios';



const EditComponent = () => {

  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const router = useRouter();

  console.log('router pathname ?? ', router.pathname);
  console.log('router query ?? ', router.query);

  useEffect(() => {
    if(router.query.id !== 'new'){
      axios.get(`/api/v1/employees/${router.query.id}`).then((res)=> {
        const {id, ...rest} = res.data;
        console.log('rest 출력 : ', rest );
        setUser(rest);
      }) 
    }

  }, [])

  function onChangeInput(e) {
    console.log(e.target.name, user);
    setUser({ ...user, [e.target.name]: e.target.value, });
  }

  function onClickSave(e) {
    console.log(user);
    if(router.query.id === 'new'){
      axios.post('/api/v1/employees', user).then(res => {
        console.log(res);
        alert('저장 성공');
        router.push('/')
      })
    }else{

      const nameValues = [];
      for( const key in user){
        nameValues.push({
          name: key,
          value: user[key],
        })
      }

      axios.put(`/api/v1/employees/${router.query.id}`, {nameValues}).then(res => {
        console.log(res);
        alert('수정 성공');
        router.push('/')
      })
    }
  }


  return <div className="editContainer">
    <h1>{router.query.id}</h1>
    <div><label>firstName</label><input name='firstName' onChange={onChangeInput} value={user.firstName}></input>
    </div>
    <div><label>lastName</label><input name='lastName' onChange={onChangeInput} value={user.lastName}></input></div>
    <div><label>email</label><input name='email' onChange={onChangeInput} value={user.email}></input></div>
    <button onClick={onClickSave}>저장</button>
  </div>
}


export default EditComponent;