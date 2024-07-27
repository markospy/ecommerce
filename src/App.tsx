import { useState } from "react";
import { Navbar } from './components/NavBar';
import { ProductCard } from './components/ProductCard';
import { useFetchProducts } from './hooks/useFetchProduct';
import { handleFilter } from "./utils/handleClickFilter";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const [priceMax, setPriceMax] = useState<number>(1000);
  const [productName, setProductName] = useState<string>('');
  const [products, setProducts] = useFetchProducts();

  const categories:string[] = useFetchCategories();

  return (
    <div className='flex flex-col gap-16 bg-gray-100 dark:bg-gray-800'>
      <Navbar
        price={priceMax}
        setPrice={setPriceMax}
        setProduct={setProductName}
        handleClick={() => handleFilter(priceMax, productName, setProducts)}
      />
      <div className="flex justify-center gap-10">
        {categories && categories.map(category => <button className="rounded-md border-b-4 border-orange-300 px-2 hover:border-orange-500 hover:text-orange-500">{category}</button> )}
      </div>

      <div className='flex flex-wrap justify-center gap-3'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default App;
