import React, { useState } from 'react'

function A() {
    let [cup , setcup]=useState(10)
     let [count,setcount]=useState(0)
     let [ show,setshow]= useState(true)
  return (
    <div>
    <h2>Usestate{cup}</h2>
    <h3>count {count}</h3>
    <h3 className={show ? '' : 'hide'}></h3>
    <button onClick={()=>(setcount(count+1)
    )}>++</button>
    <button onClick={()=>(setcount(count-1)
    )}>--</button>
    <button onClick={()=>setshow(!show)}>toggle</button>

    </div>
  )
}

export default A