import { useEffect, useState } from "react"
import { BsCart3 } from "react-icons/bs";
import ProductDescription from "./ProductDescription";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../../components/utils/BookApiFunction";
import useStore from "../../zustand/cart";
const ProductDetail = () => {
    const [book, setBook] = useState({})
    const [quantity, setQuantity] = useState(1)
    const addToCart = useStore((state) => state.addToCart)
    const navigate = useNavigate()
    let { _id } = useParams()
    useEffect(() => {
        getBookById(parseInt(_id))
            .then((res) => {
                setBook(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
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
                <div className="w-2/5">
                    <img alt="anh" srcSet={book.image} />
                    <div className="mt-10 flex">
                        <button className="py-2 flex-1 mx-2 rounded-lg cursor-pointer border-2 border-red-600 text-red-600 font-semibold">
                            <BsCart3 className="inline mr-2" />
                            <span onClick={() => {
                                addToCart({ book, quantity })
                                navigate('/cart')
                            }}>Thêm vào giỏ hàng</span>
                        </button>
                        <button onClick={() => {
                            addToCart({ book, quantity })
                            navigate('/cart')
                        }} className="py-2 flex-1 mx-2 rounded-lg cursor-pointer text-white bg-red-600 font-semibold">Mua ngay</button>
                    </div>
                </div>
                <div className="flex-1 ml-5">
                    <h3 className="text-2xl mb-2">{book.name}</h3>
                    <div className="mr-64">
                        <p>Tác giả: <span className="font-semibold">{book.author}</span></p>
                        <p>Hình thức bìa: <span className="font-semibold">{book.form}</span></p>
                        <p>Nhà xuất bản: <span className="font-semibold">{book.publisher}</span></p>
                    </div>
                    <div className="flex items-center text-3xl mt-10 font-bold text-red-700 ">{book.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
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
            <ProductDescription book={book} />
        </>
    )
}
export default ProductDetail