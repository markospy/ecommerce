import { useState } from "react";
import { Navbar } from './components/NavBar';
import { ProductCard, Product } from './components/ProductCard';
import { useFetchProducts, getProducts } from './hooks/useFetchProduct';


function App() {
  const [priceMax, setPriceMax] = useState<number>(1000);
  const [productName, setProductName] = useState<string>('');


  const [products, setProducts] = useFetchProducts();


  const handleFilter = () => {
    async function fetchProducts() {
      try {
        let products = await getProducts()
        if (priceMax) {
          products = products.filter((product: Product) => product.price <= priceMax);
        }
        if (productName) {
          products = productName ? products.filter((product: Product) => product.title.toLowerCase().includes(productName.toLowerCase())) : products;
        }
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }


  return (
    <div className='flex flex-col gap-16 bg-gray-100 dark:bg-gray-800'>
      <Navbar
        price={priceMax}
        setPrice={setPriceMax}
        setProduct={setProductName}
        handleClick={handleFilter}
      />
      <div className='flex flex-wrap justify-center gap-3'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default App;
