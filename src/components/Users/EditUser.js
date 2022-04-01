import React, {useState,useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
const EditUser=()=>{
    let navigate =useNavigate();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"  ",
       username:" ",
       email:" ",
        phone:" ",
    });
    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    };
        useEffect(()=>{
          loadUser();
    },[]);
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}`,user);
        navigate.push("/")
    }
    const loadUser=async()=>{
      const result= await axios.get(`http://localhost:3004/users/${id}`);
      setUser(result.data);
    };
    return(
            <div className="container">
                <div className="w-75 mx-auto Shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div class="form-group">
                        <input type="text" className="form-control"name="name" value={name} onChange={e=>onInputChange(e)} />
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control"name="username" value={username} onChange={e=>onInputChange(e)} />
                    </div>
                    <div class="form-group">
                        <input type="email" className="form-control"name="email" value={email} onChange={e=>onInputChange(e)} />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control"name="phone" value={phone} onChange={e=>onInputChange(e)} />
                    </div>
                
     <button className="btn btn-center btn-primary btn-block">Update User</button>
 </form>
 </div>
 </div>
    )
}
export default EditUser;