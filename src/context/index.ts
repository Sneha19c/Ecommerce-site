import { createContext } from 'react';
import { ProductItemType } from '../App';

type stateType = {
  products: ProductItemType[];
  cartItems: ProductItemType[];
  handleAddToCart: (productItem: ProductItemType) => void;
  increase: (productItem: ProductItemType) => void;
  decrease: (productItem: ProductItemType) => void;
  handleRemoveItem: (productId: number) => void;
};

const shopContext = createContext<stateType>({
  products: [],
  cartItems: [],
  handleAddToCart() {},
  increase() {},
  decrease() {},
  handleRemoveItem() {},
});

export default shopContext;
