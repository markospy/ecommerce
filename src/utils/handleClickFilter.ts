import { Product } from '../components/ProductCard';
import { getProducts } from '../hooks/useFetchProduct';


export const handleFilter = (price: number, productName: string, setProducts: (value:string) => void) => {
    async function fetchProducts() {
      try {
        let productsFetch = await getProducts()
        if (price) {
          productsFetch = productsFetch.filter((product: Product) => product.price <= price);
        }
        if (productName) {
          productsFetch = productsFetch.filter((product: Product) => product.title.toLowerCase().includes(productName.toLowerCase()));
        }
        setProducts(productsFetch);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }