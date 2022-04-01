import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser=()=>{
    let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
    });

const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3004/users",user);
        navigate.push("/");
    }
    return(
        <div className="container">
            <form class="row g-3"onSubmit={e=>onSubmit(e)}>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control"name="name" value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputUsername" class="form-label">userName</label>
                    <input type="text" class="form-control"name="username" value={username} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">email</label>
                    <input type="email" class="form-control"name="email" value={email} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">phone</label>
                    <input type="text" class="form-control"name="phone" value={phone} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <button className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>

    )
}

export default AddUser;