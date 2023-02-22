import React from 'react';

import { ProductItemType } from '../../App';

type Props = {
  cartItem: ProductItemType;
  increase: (productItem: ProductItemType) => void;
  decrease: (productItem: ProductItemType) => void;
  handleRemoveItem: (productId: number) => void;
};

const CartProduct = ({
  cartItem,
  increase,
  decrease,
  handleRemoveItem,
}: Props) => {
  return (
    <div className='flex justify-between items-start border-t-2 border-zinc-700 mx-2 p-2 shadow-lg'>
      <div className='flex justify-start'>
        <img
          src={`${cartItem.image}`}
          className='w-20 h-24'
          alt='product-img'
        />
        <div className='px-4 text-gray-500'>
          <h6 className='text-white text-lg text-left truncate w-80'>
            {cartItem.title}
          </h6>
          {/* <h6>product-desc</h6> */}
          <div className='flex gap-5 mt-5'>
            <h5 className='text-lg'>
              Quantity: <span className=' text-white'>{cartItem.amount}</span>
            </h5>
            <h5 className='text-lg'>
              Total:{' '}
              <span className=' text-white'>
                ${(cartItem.price * cartItem.amount).toFixed(2)}
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div>
        <button className='font-bold right-5 absolute text-black hover:text-white'>
          X
        </button>
        <br />
        <h2 className='p-2 text-lg text-yellow-500 font-semibold'>
          $ {cartItem.price}
        </h2>
        <div>
          <button
            className='mx-2 px-2 bg-gray-900 hover:bg-gray-700'
            onClick={() => decrease(cartItem)}
          >
            -
          </button>
          <button onClick={() => handleRemoveItem(cartItem.id)}>remove</button>
          <button
            className='mx-2 px-2 bg-gray-900 hover:bg-gray-700'
            onClick={() => increase(cartItem)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
