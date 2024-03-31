import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
const CartItem = () => {
  const [quantity, setQuantity] = useState(1)
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  const handleDecreaseQuantity = () => {
    if (quantity == 1) {
      return
    }
    setQuantity(quantity - 1)
  }
  const handleChangeInput = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity)
    }
  }
  return (
    <div className="flex p-3 border-b">
      <img className="w-32" alt="anh" srcSet="https://cdn0.fahasa.com/media/catalog/product//8/9/8936066694469.jpg" />
      <div className="flex flex-col justify-between ">
        <h3>Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im Lặng Là Trí Tuệ</h3>
        <div className=" font-semibold">113.400 đ <span className=" line-through text-gray-400">189.000 đ</span></div>
      </div>
      <div className="flex items-center mr-5">
        <div className=" border-slate-400 border rounded-lg p-1 flex items-center ml-10">
          <span onClick={handleIncreaseQuantity} className="text-2xl text-gray-400 px-4 cursor-pointer">+</span>
          <input onChange={handleChangeInput} type="text" inputMode="decimal" name="quantity" className="text-center border-none outline-none w-10 font-bold" value={quantity} />
          <span onClick={handleDecreaseQuantity} className="text-2xl text-gray-400 px-4 cursor-pointer">-</span>
        </div>
      </div>
      <div className="flex items-center ml-5">
        <FaRegTrashAlt className=" hover:text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  )
}
export default CartItem