export default function AddCart(id: number) {
  return (
		<a
			className="text-base font-medium text-gray-900 hover:cursor-pointer hover:text-orange-500 focus:text-orange-500"
      onClick={(e,) => {alert(`Producto ${id} agregado al carrito.`)
        e.preventDefault();
      }}
    >
        Añadir al carrito
    </a>
  )
}