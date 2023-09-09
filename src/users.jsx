

import { useEffect, useState } from "react"
import './users.css'
import User from "./user";

export default function Users(){
    const [users,setUser]=useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
},[])

    return(
        <div className="box"> 
            <h1>users:{users.length}</h1>
          {  users.map(user => <User user={user}></User>)}
        </div>
    )
}