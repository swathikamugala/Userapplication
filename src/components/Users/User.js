import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from 'axios';
const User =()=>{
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    })
    const loadUser=async()=>{
        const res=await axios.get(`http://localhost:3004/users/${ id }`);
        //console.log(result);
        setUser(res.data);
    };
    return(
        <div className="container py-4">
            <Link className="btn btn-primary" to="/home">Back to home</Link>
          <h2 className="display-4">user Id:{id}</h2>
        <ul className="list-group w-50">
            <li className="List-group-item">name:{user.name}</li>
            <li className="List-group-item">username:{user.username}</li>
            <li className="List-group-item">email:{user.email}</li>
            <li className="List-group-item">phone:{user.phone}</li>
            </ul>
        </div>
    )
}
export default User;