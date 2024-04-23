import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import useStore from "../../zustand/cart";
const CartItem = ({ book, itemQuantity }) => {
  const removeFromCart = useStore((state) => state.removeFromCart)
  const addOneItem = useStore((state) => state.addOneItem)
  const removeOneItem = useStore((state) => state.removeOneItem)
  const [quantity, setQuantity] = useState(itemQuantity)
  useEffect(() => {
    setQuantity(itemQuantity)
  }, [itemQuantity])
  const handleChangeInput = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity)
    }
  }
  return (
    <div className="flex p-3 border-b">
      <img className="w-32" alt="anh" srcSet={book.image} />
      <div className="flex flex-col justify-between flex-1">
        <h3>{book.name}</h3>
        <div className="text-red-600 font-semibold">{book.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
      </div>
      <div className="flex items-center mr-5">
        <div className=" border-slate-400 border rounded-lg p-1 flex items-center ml-10">
          <span onClick={() => addOneItem({ book, quantity })} className="text-2xl text-gray-400 px-4 cursor-pointer">+</span>
          <input onChange={handleChangeInput} type="text" inputMode="decimal" name="quantity" className="text-center border-none outline-none w-10 font-bold" value={quantity} />
          <span onClick={() => {
            quantity > 1 ? removeOneItem({ book, quantity }) : removeFromCart(book.id)
          }} className="text-2xl text-gray-400 px-4 cursor-pointer">-</span>
        </div>
      </div>
      <div onClick={() => removeFromCart(book.id)} className="flex items-center ml-5">
        <FaRegTrashAlt className=" hover:text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  )
}
export default CartItem