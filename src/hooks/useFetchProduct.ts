import { useState, useEffect } from "react";
import { Product } from '../components/ProductCard';


export function useFetchProducts(priceFilter: number, productFilter: string) {
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async (offset?:number, limit?:number) => {
        const url = new URL('https://fakestoreapi.com/products');
        if (offset) url.searchParams.append('offset', String(offset));
        if (limit) url.searchParams.append('limit', String(limit))
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error fetching products: ${response.status}`);
          }
          return await response.json();
        } catch (error) {
          console.error(error);
          return [];
        }
      };

    useEffect(() => {
      getProducts()
      .then(products => setProducts(products))
    }, []);

    useEffect(() => {
      async function fetchProducts() {
        try {
          let products = await getProducts()
          if (priceFilter) {
            products = products.filter((product: Product) => product.price <= priceFilter);
          }
          if (productFilter) {
            products = products.filter((product: Product) => product.title.toLowerCase().includes(productFilter.toLowerCase()));
          }
          setProducts(products);
        } catch (error) {
          console.error(error);
        }
      }
      fetchProducts();
    }, [priceFilter, productFilter])


    return products;
  }