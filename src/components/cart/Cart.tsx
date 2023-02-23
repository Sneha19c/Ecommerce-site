import { useContext, useState } from 'react';
import cart_icon from '../../assets/cart-icon.png';

import { ProductItemType } from '../../App';
import CartProduct from './CartProduct';

import shopContext from '../../context';

// type Props = {
//   cartItems: ProductItemType[];
// };

export const Cart = () => {
  const { cartItems } = useContext(shopContext);

  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  const cartItemCount = (items: ProductItemType[]) => {
    return items.reduce((acc: number, item) => acc + item.amount, 0);
  };

  const cartItemTotal = cartItems.reduce(
    (acc: number, item) => acc + item.amount * item.price,
    0,
  );
  return (
    <div className='fixed z-50'>
      {!isExpand ? (
        <button
          className='fixed top-1 right-1 z-10 items-end  bg-black w-16 h-16 p-2 hover:opacity-80'
          onClick={handleClick}
        >
          <img src={cart_icon} alt='cart' />
          <span className='absolute top-10 px-1.5 text-sm font-bold rounded-full bg-yellow-300 sha'>
            {cartItemCount(cartItems)}
          </span>
        </button>
      ) : (
        <div className='flex flex-col fixed top-1 right-1 z-10 text-white w-full md:w-2/5  bg-[#16181c] h-full'>
          <button
            className='flex items-start bg-stone-800 py-2 px-4 w-10 font-extrabold shadow-xl hover:opacity-80'
            onClick={handleClick}
          >
            X
          </button>
          <div className='flex justify-center p-8'>
            <img src={cart_icon} alt='cart' className='w-10 h-12' />
            <h2 className='font-bold text-xl p-2 pl-4'>
              Cart Items {cartItemCount(cartItems)}
            </h2>
          </div>
          {cartItems.length === 0 && (
            <h4 className='p-10 text-lg'>Add some products in the cart!</h4>
          )}
          <div className='overflow-auto w-scrollbar h-2/5 mb-10'>
            {cartItems.map((cartItem: ProductItemType) => (
              <CartProduct cartItem={cartItem} />
            ))}
          </div>

          <div className='inline-block absolute z-10 bottom-0 bg-[#2f323a] shadow-2xl w-full  px-4'>
            <div className='flex justify-between px-2 py-4 text-lg my-4'>
              <h3 className='text-zinc-300'>SUBTOTAL</h3>
              <h1 className='text-2xl text-yellow-500 font-semibold'>
                $ {cartItemTotal.toFixed(2)}
              </h1>
            </div>
            <button className='my-4 p-4 bg-zinc-900 w-full hover:bg-black font-semibold tracking-widest'>
              {' '}
              CHECKOUT{' '}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
