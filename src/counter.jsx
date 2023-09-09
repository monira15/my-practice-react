import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);

function handleBtn(){
    const newcount = count+1;
    setCount(newcount)
}
const handlebtn2=()=>{
const remove=count-2;
setCount(remove)
}
return(
    <div  style={{border:'2px solid yellow'}}>
        <h2>counter:{count}</h2>
        <button onClick={handleBtn}>add</button>
        <button  onClick={handlebtn2}>remove</button>
    </div>
)
}