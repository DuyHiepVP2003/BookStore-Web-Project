import { Link } from "react-router-dom"

const Product = ({ book }) => {
    return (
        <Link to={`/product_detail/${book.id}`} className="px-2 bg-white border rounded-md overflow-hidden border-none hover:shadow-lg">
            <img className="px-2 py-3 mb-2" alt="anh" srcSet={book.image} />
            <div className=" text-md font-medium">
                <p>{book.name}</p>
            </div>
            <p className="mb-5 text-red-600 font-bold">{book.price}đ</p>
        </Link>
    )
}
export default Product