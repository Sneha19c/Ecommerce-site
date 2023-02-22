import { useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/cart/Cart';
import { SingleProduct } from './components/Product/SingleProduct';

export type ProductItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

function App() {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState<ProductItemType[]>(
    [] as ProductItemType[],
  );

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setProducts(json);
      });
  }, []);

  const handleAddToCart = (productItem: ProductItemType) => {
    setCartItems((prevCart) => {
      const isItemInCart = prevCart.find(
        (product) => product.id === productItem.id,
      );
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === productItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }
      // First time the item is added
      return [...prevCart, { ...productItem, amount: 1 }];
    });
  };

  const increase = (productItem: ProductItemType) => {
    setCartItems((prevCart) => {
      const isItemInCart = prevCart.find(
        (product) => product.id === productItem.id,
      );
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === productItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }
      // First time the item is added
      return [...prevCart, { ...productItem, amount: 1 }];
    });
  };

  const decrease = (productItem: ProductItemType) => {
    setCartItems((prevCart) => {
      const isItemInCart = prevCart.find(
        (product) => product.id === productItem.id,
      );
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === productItem.id && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item,
        );
      }
      // First time the item is added
      return [...prevCart, { ...productItem, amount: 1 }];
    });
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(
      cartItems.filter((productItem) => productItem.id !== productId),
    );
  };

  return (
    <div className='App'>
      <Cart
        cartItems={cartItems}
        increase={increase}
        decrease={decrease}
        handleRemoveItem={handleRemoveItem}
      />
      <h1 className=' text-4xl font-extrabold mt-10 text-red-500'>
        Shopping Cart
      </h1>
      <div className='flex justify-center'>
        <div className=' w-[90%] flex justify-center flex-wrap h-full my-32 gap-16'>
          {products.map((product: ProductItemType) => (
            <SingleProduct
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
