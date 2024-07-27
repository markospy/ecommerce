import { IcOutlineSearch } from "./svgs/Search"
import { useRef } from "react";

export function Navbar({ price, setPrice, setProduct, handleClick}:
	{ price:number,
		setPrice: (value: number) => void,
	  setProduct: (value: string) => void,
	  handleClick: () => void
	}) {

	const refProductName = useRef(null);
  const refLabelPrice = useRef(null);

	// const handleKeyDown = (e) => e.key === 'Enter' && handleClick();

	// useEffect(() => {
	// 	if (refProductName.current) {
	// 		refProductName.current.addEventListener('keydown', handleKeyDown);
	// 	}
	// 	return () => refProductName.current.removeEventListener('keydown', handleKeyDown);
	// }, [refProductName.current]);

  return (
	<div className="flex w-full flex-col justify-center gap-4 pt-6">
		<div className="mb-4 flex w-full justify-center">
			<div className="relative flex w-1/2">
				<input
					ref={refProductName}
					type="text"
					placeholder="¿Qué estás buscando?"
					onChange={(e) => setProduct(e.target.value)}
					className="block w-full rounded-md border-0 text-gray-900 shadow-md ring-1 ring-inset ring-orange-500 placeholder:font-bold placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
				/>
				<IcOutlineSearch className="absolute right-0 h-10 w-14 cursor-pointer rounded-r-md bg-orange-500 p-2 text-gray-900" onClick={handleClick}/>
			</div>
		</div>

		<div className="flex w-full justify-center gap-2 bg-transparent">
			<div className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-50">
				<label htmlFor="#max-price" className="w-48 font-semibold text-gray-700 drop-shadow-lg">Precio máximo</label>
				<input type="range" id="max-price" min="10" max="1000" step="10" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="h-2 w-full appearance-none rounded-lg bg-orange-500 shadow-md"/>
			</div>
			$
			<div className="relative flex size-fit">
				<input ref={refLabelPrice} type="number" value={price} onChange={(e) => Number(e.target.value)<=1000 && setPrice(Number(e.target.value))} className="block h-7 w-20 rounded-md border-0 font-semibold text-gray-700 shadow-md ring-1 ring-inset ring-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"/>
				<IcOutlineSearch className="absolute -right-2 h-7 w-10 cursor-pointer rounded-r-md bg-orange-500 p-1 text-gray-900" onClick={handleClick}/>
			</div>
		</div>
	</div>
  );
}
