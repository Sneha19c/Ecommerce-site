import React from 'react'
import cart_icon from '../../assets/cart-icon.png';

const CartProduct = () => {
  return (
    <div className='flex justify-between items-start border-t-2 border-zinc-700 mx-2 p-2 shadow-lg'>
                            <div className='flex justify-start'>
                                <img src={cart_icon} className="w-20 h-24" alt="product-img" />
                                <div className='p-4 text-gray-500'>
                                <h6 className='text-white text-lg'>Product-name</h6>
                                <h6>product-desc</h6>
                                <h5>Quantity: 1</h5>
                                </div>
                                
                            </div>
                            <div>
                                <button className='font-bold right-5 absolute text-black hover:text-white'>X</button><br/>
                                <h2 className='p-2 text-yellow-500 font-semibold'>$ 10.90</h2>
                                <div>
                                    <button className='ml-2 px-2 bg-gray-700 hover:bg-gray-900'>-</button>
                                    <button className='mr-2 px-2 bg-gray-900 hover:bg-gray-700'>+</button>
                                </div>
                            </div>
                        </div>
  )
}

export default CartProduct
