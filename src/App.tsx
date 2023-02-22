import './App.css';
import { useEffect, useState } from 'react';
import { Cart } from './components/cart/Cart';
import { SingleProduct } from './components/Product/SingleProduct'

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="App">
      <Cart/>
      <h1 className=' text-4xl font-extrabold mt-10 text-red-500'>Shopping Cart</h1>
      <div className='flex justify-center'>
        <div className=' w-[90%] flex justify-center flex-wrap h-full my-32 gap-16'>
          {products.map((product: ProductType) => (
            <SingleProduct
              title={product.title}
              price={product.price}
              img={product.image}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default App;
