import React, { useEffect, useState } from 'react'

function B() {  
    let [data , setData]=useState([])
    useEffect(()=>{
        document.title='hello sir'
    fetch('https://fakestoreapi.com/products/').then(a=>a.json()).then(b=>setData(b))
},[])
  
  return (
    <>
    <h2>UseEffect</h2>
    {data.map(a=><li>{a.title}</li>)}</>
  )
}

export default B