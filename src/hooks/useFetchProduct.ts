import { useState, useEffect } from "react";
import { Product } from '../components/ProductCard';


export const getProducts = async (offset?:number, limit?:number) => {
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


export function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      getProducts()
      .then(products => setProducts(products))
    }, []);

    return [products, setProducts];
  }