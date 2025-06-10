import React from 'react'
import { products } from './Data'

function Home() {
  return (
    <>
        <section>
            <div className="container">
                <h2 className='py-3'>All Products</h2>
                <div className="row">
                {products.map(product=>(
                    <div className="col-lg-3">
                        <div className="shadow p-2">
                            <img className='w-100' src={product.image} alt="" />
                            <p className='fw-bold '>{product.title}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Home