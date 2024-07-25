import { useState } from "react";
import { Navbar } from './components/NavBar';
import { ProductCard} from './components/ProductCard';
import { useFetchProducts } from './hooks/useFetchProduct';


function App() {
  const [priceMax, setPriceMax] = useState<number>(1000);
  const [productName, setProductName] = useState<string>('');


  const products = useFetchProducts(priceMax, productName);




  return (
    <div className='flex flex-col gap-16 bg-gray-100 dark:bg-gray-800'>
      <Navbar
        price={priceMax}
        setPrice={setPriceMax}
        setProduct={setProductName}
      />
      <div className='flex flex-wrap justify-center gap-3'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default App;
