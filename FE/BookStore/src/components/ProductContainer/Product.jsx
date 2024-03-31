import { Link } from "react-router-dom"

const Product = () => {
    return (
        <Link to='/product_detail' className="px-2 bg-white border rounded-md overflow-hidden border-none hover:shadow-lg">
            <img className="px-2 py-3 mb-2" alt="anh" srcSet="https://cdn0.fahasa.com/media/catalog/product/8/9/8935325006289.jpg" />
            <p className=" text-md font-medium">
                <p>Tô bình yên vẽ hạnh phúc</p>
            </p>
            <p className="mb-5 text-red-600 font-bold">66.880đ</p>
        </Link>
    )
}
export default Product