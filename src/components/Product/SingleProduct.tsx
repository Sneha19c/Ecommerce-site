import React from 'react';

type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export const SingleProduct = ({ title, price, img }: Props) => {
  return (
    <div className='product w-52 h-[30rem] flex justify-center flex-col'>
      <img src={`${img}`} alt='product' className=' bg-zinc-400 h-64' />
      <p className=' text-center truncate relative px-5 h-14 my-5'>{title}</p>
      <p className='my-2 font-bold text-lg text-center h-10'>${price}</p>
      <button className='my-2 px-10 py-4 bg-black text-white border-4 hover:bg-yellow-400 hover:text-black'>
        Add to Cart
      </button>
    </div>
  );
};

