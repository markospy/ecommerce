import { useEffect, useState } from "react";


const getCategories = async () => {
	try {
			const response = await fetch('https://fakestoreapi.com/products/categories');
			if (!response.ok) {
				throw new Error(`Error fetching products: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error(error);
			return [];
		}
}

export function useFetchCategories():string[] {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then(categories => setCategories(categories))
	}, [])

	return categories;
}