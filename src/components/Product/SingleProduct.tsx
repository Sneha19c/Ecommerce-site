import React from 'react';
import { ProductItemType } from '../../App';

type Props = {
  product: ProductItemType;
  handleAddToCart: (productItem: ProductItemType) => void;
};

export const SingleProduct = ({ product, handleAddToCart }: Props) => {
  return (
    <div className='product w-52 h-[30rem] flex justify-center flex-col'>
      <img
        src={`${product.image}`}
        alt='product'
        className=' bg-zinc-400 h-64'
      />
      <p className=' text-center truncate relative px-5 h-14 my-5'>
        {product.title}
      </p>
      <p className='my-2 font-bold text-lg text-center h-10'>
        ${product.price}
      </p>
      <button
        className='my-2 px-10 py-4 bg-black text-white border-4 hover:bg-yellow-400 hover:text-black'
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
