import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from './Data'
 

function Category() {
    let { cid } = useParams()
    let datafilter = products.filter(a => a.category == cid)
    return (
        <div>
            <div className="container">
                <h2> {cid} category</h2>
                <div className="row">
                    {datafilter.map(a => (
                    <div key={a.id} className='col-lg-3'>
                        <div className="shadow p-2">
                            <img className='w-100' src={a.image} alt="" />
                            <p>{a.title}</p>
                            <Link to={`/details/${a.id}`} className='btn btn-primary'>Read More</Link>
                        </div> </div>
                        ))}

                   
           </div>
            </div>
        </div>
    )
}

export default Category