import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import './edit.module.css';
import axios from 'axios';


const Edit = () => {

  const [user, setUser] = useState({firstName: '', lastName: '', email: ''});
  const router = useRouter();

  useEffect(()=>{

  },[])

  function onChangeInput ( e ) {
    console.log(e.target.name, user);
    setUser({...user, [e.target.name]: e.target.value, });
  }

  function onClickSave(e){
    console.log(user);
    axios.post('/api/v1/employees', user).then(res => {
      console.log(res);
      alert('저장 성공');
      router.push('/')
    })
  }


  return <div className="editContainer">
    <div><label>firstName</label><input name='firstName' onChange={onChangeInput}></input>
    </div>
    <div><label>lastName</label><input name='lastName' onChange={onChangeInput}></input></div>
    <div><label>email</label><input name='email' onChange={onChangeInput}></input></div>
    <button onClick={onClickSave}>저장</button>
  </div>
}

export default Edit