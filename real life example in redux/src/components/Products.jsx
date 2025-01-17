import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetProducts } from '../store/actions/productAction'

function Products() {

  const {products} = useSelector(store => store.productsReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [])

  return (
    <div className='bg-red-100 w-1/2 m-auto p-4'>
      <h1 className='text-red-700 text-4xl mb-4 font-bold'>Products:</h1>
      <ul>
        {
          products.map((product, index) => {
            return <li key={product.id} className='text-1xl'>{product.title}<span className='text-red-500 font-bold ml-2 cursor-pointer'>X</span></li>
          })
        }
      </ul>
    </div>
  )
}

export default Products