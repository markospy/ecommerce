import { Navbar } from './components/NavBar';
import { ProductCard} from './components/ProductCard';
import { useFetchProducts } from './hooks/useFetchProduct';


function App() {
  const products = useFetchProducts();

  function handleSearch(value: string) {
    products.filter(product => {product.title.includes(value)})
  };

  console.log(products)

  return (
    <div className='flex flex-col gap-16 bg-gray-100 dark:bg-gray-800'>
      <Navbar handleClick={handleSearch}/>
      <div className='flex flex-wrap justify-center gap-3'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default App;
