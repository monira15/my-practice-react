import { useState } from "react"

export default function Team(){

    const [team,getTeam]=useState('monira');


const addbtn=()=>{
    const newadd='sirajum';
    getTeam(newadd)
}
const removebtn=()=>{
    const newromve ='moni';
    getTeam(newromve)
}



    const style={
        border:'2px solid blue',
        margin:'20px',
        padding:'20px'
       
    }

return(
    <div style={style}>
        <h2>players:{team}</h2>
        <button onClick={addbtn}>add</button>
        <button onClick={removebtn}>remove</button>
    </div>
)
}