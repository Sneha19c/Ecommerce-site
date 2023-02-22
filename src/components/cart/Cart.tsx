import cart_icon from '../../assets/cart-icon.png';
import { useState } from 'react';

export const Cart = () => {
    const [isExpand, setIsExpand] = useState<boolean>(false);

    const handleClick = () => {
        setIsExpand(!isExpand);
    }
    return (
        <div className='fixed inset-0 z-50'>
            {
                !isExpand ?
                    <button
                        className='absolute items-end right-1 bg-black w-16 h-16 p-2 hover:opacity-80'
                        onClick={handleClick}
                    >
                        <img src={cart_icon} alt="cart" />
                        <span className='absolute top-10 px-1.5 text-sm font-bold rounded-full bg-yellow-300 sha'>1</span>

                    </button> :
                    <div className='flex flex-col absolute right-1 text-white w-full md:w-2/5  bg-[#16181c] h-full'>
                        <button className="flex items-start bg-stone-800 py-2 px-4 w-10 font-extrabold shadow-xl hover:opacity-80" onClick={handleClick}>X</button>
                        <div className='flex justify-center p-8'>
                            <img src={cart_icon} alt="cart" className='w-10 h-12' />
                            <h2 className='font-bold text-xl p-2 pl-4'>Cart Items</h2>
                        </div>
                        {/* <h4 className='p-10 text-lg'>Add some products in the cart!</h4> */}
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
                        

                        <div className='inline-block absolute z-10 bottom-0 bg-[#2f323a] shadow-2xl w-full  px-4'>
                            <div className='flex justify-between px-2 py-4 text-lg my-4'>
                                <h3 className='text-zinc-300'>SUBTOTAL</h3>
                                <h1 className='text-2xl text-yellow-500 font-semibold'>$ 0.00</h1>
                            </div>
                            <button className='my-4 p-4 bg-zinc-900 w-full hover:bg-black font-semibold tracking-widest'> CHECKOUT </button>
                        </div>
                    </div>
            }

        </div>

    )
}