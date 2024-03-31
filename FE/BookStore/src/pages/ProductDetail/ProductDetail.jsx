import { useState } from "react"
import { BsCart3 } from "react-icons/bs";
import ProductDescription from "./ProductDescription";
const ProductDetail = () => {
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
        <>
            <div className="max-w-screen-xl mx-auto flex bg-white mt-7 p-4 rounded-xl">
                <div className="w-1/3">
                    <img alt="anh" srcSet="https://cdn0.fahasa.com/media/catalog/product/9/7/9786047764655.jpg" />
                    <div className="mt-10 flex">
                        <button className="py-2 flex-1 mx-2 rounded-lg cursor-pointer border-2 border-red-600 text-red-600 font-semibold">
                            <BsCart3 className="inline mr-2" />
                            <span>Thêm vào giỏ hàng</span>
                        </button>
                        <button className="py-2 flex-1 mx-2 rounded-lg cursor-pointer text-white bg-red-600 font-semibold">Mua ngay</button>
                    </div>
                </div>
                <div className="flex-1 ml-5">
                    <h3 className="text-2xl mb-2">Chuyện Kể Cho Tương Lai - Bìa Cứng</h3>
                    <div className="flex">
                        <div className="mr-64">
                            <p>Nhà cung cấp: <span className="font-semibold">KI54226</span></p>
                            <p>Nhà xuất bản: <span className="font-semibold">Cengage</span></p>
                        </div>
                        <div>
                            <p>Tác giả: <span className="font-semibold">John Hughes</span></p>
                            <p>Hình thức bìa: <span className="font-semibold">Bìa cứng</span></p>
                        </div>
                    </div>
                    <div className="flex items-center text-3xl mt-10 font-bold text-red-700 ">247.000 đ
                        <span className="text-xl font-normal text-black ml-3 line-through">260.000 đ</span>
                    </div>
                    <div className="flex mt-10 items-center">
                        Số lượng:
                        <div className=" border-slate-400 border rounded-lg p-1 flex items-center ml-10">
                            <span onClick={handleIncreaseQuantity} className="text-2xl text-gray-400 px-4 cursor-pointer">+</span>
                            <input onChange={handleChangeInput} type="text" inputMode="decimal" name="quantity" className="text-center border-none outline-none w-10 font-bold" value={quantity} />
                            <span onClick={handleDecreaseQuantity} className="text-2xl text-gray-400 px-4 cursor-pointer">-</span>
                        </div>
                    </div>
                </div>
            </div>
            <ProductDescription />
        </>
    )
}
export default ProductDetail