import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data'

function Details() {
    let {id}=useParams()
    let data=products.find(a=>a.id==id)
  return (
    <div className="container py-3">
        <h2 className='fw-bold py-4'>Detail page of {data.title}  </h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="shadow p-2">
                <img className='w-100' src={data.image} alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            price:{data.price}
            <p>{data.description}n</p>
          </div>
        </div>
    </div>
  )
}

export default Details