import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'

function App() {
 function handle1(){
   alert('click me here')
 }

  return (
    <>
    
      <h1>React Core concepts 2</h1>
      <Users></Users>
   <Counter></Counter>
   <Team></Team>
      <button onClick={handle1}>click me</button>
      <button onClick={()=>alert('add me')}>add me</button>
     
     
      
    </>
  )
}

export default App
