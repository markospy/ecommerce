
"use client";

import { Score } from "./Score";
import AddCart from "./AddCart";

type Rate = {
  rate: number;
  count:number
}

export interface Product {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
  rating: Rate
}

export const ProductCard = (props: Product):JSX.Element => {
  return (
    <div className="flex w-72 flex-col justify-between rounded-xl bg-white px-6 pb-6 pt-2 align-top shadow-xl dark:bg-gray-500">
			<div className="h-72">
        <img src={props.image} alt={props.title} className="mx-auto max-h-72" />
      </div>
      <a href="#" className="mt-2">
        <h5 className="text-base font-semibold tracking-tight text-gray-900 hover:text-orange-500 dark:text-white">
            {props.title}
        </h5>
      </a>
        {Score(props.rating.rate)}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">${props.price}</span>
        {AddCart(props.id)}
      </div>
    </div>
  )
}