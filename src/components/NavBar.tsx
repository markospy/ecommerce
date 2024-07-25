import { IcOutlineSearch } from "./svgs/Search"
import { useRef} from "react";

export function Navbar({ price, setPrice, setProduct}:
	{ price:number,
	  setPrice: (value: number) => void,
	  setProduct: (value: string) => void
	}) {

  const refSearch = useRef<string>('');
  const refLabelPrice = useRef(null);

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-2">
			<div className="flex h-1/2 w-10/12 items-center justify-start pt-6">
				<img src="/shopee.svg" alt="Logo de la tienda" className="size-24 w-1/12" />
				<div className="relative flex w-11/12 justify-center">
					<IcOutlineSearch className="absolute right-64 h-10 w-14 cursor-pointer rounded-r-md bg-orange-500 p-2 text-gray-900" onClick={() =>  setProduct(refSearch.current)}/>
					<input
						type="text"
						placeholder="¿Qué estás buscando?"
						onChange={(e) => refSearch.current = e.target.value}
						className="block w-1/2 rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-orange-500 placeholder:font-bold placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="flex w-full items-center justify-center gap-2 bg-transparent">
				<div className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-50">
					<label htmlFor="#max-price" className="ml-4 w-48 font-semibold text-gray-700 drop-shadow-lg">Precio máximo</label>
					<input type="range" id="max-price" min="10" max="1000" step="10" value={price} onChange={(e) => {setPrice(Number(e.target.value))}} className="h-2 w-full appearance-none rounded-lg bg-orange-500 shadow-md"/>
				</div>
				$
				<input ref={refLabelPrice} type="number" value={price} onChange={(e) => { Number(e.target.value)<=1000 && setPrice(Number(e.target.value))}} className="block h-7 w-20 rounded-md border-0 font-semibold text-gray-700 shadow-md ring-1 ring-inset ring-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"/>
			</div>
    </div>
  );
}
