import Product from "../../components/ProductContainer/Product"
import CheckBoxSearch from "./CheckBoxSearch"
import { getAllBooks } from "../../components/utils/BookApiFunction"
import { useState, useEffect } from "react"
import { getAllCategories } from "../../components/utils/CategoryApiFunction"
import { useNavigate, useParams } from "react-router-dom"
const ListProduct = () => {
    const [books, setBooks] = useState([])
    const [listProduct, setListProduct] = useState([])
    const [categories, setCategories] = useState([])
    const { filter } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getAllBooks()
            .then((res) => {
                setBooks(res.data)
                filter ? setListProduct(res.data.filter(book => book.category.name === filter)) : setListProduct(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
        getAllCategories()
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [filter])
    const listSearch = [{
        name: "price",
        title: "Giá",
        items: [
            { label: "0đ - 150,000đ", range: [0, 150000] },
            { label: "150,000đ - 300,000đ", range: [150000, 300000] },
            { label: "300,000đ - 500,000đ", range: [300000, 500000] },
            { label: "500,000đ - 700,000đ", range: [500000, 700000] },
            { label: "700,000đ trở lên", range: [700000, Infinity] }
        ]
    },
    ]
    const handleSearchByCategory = (e) => {
        navigate(`/product_search/${e.target.textContent}`)
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-5 flex ">
            <div className="bg-white shadow-lg w-1/5 mr-5">
                <div className="border-b py-2 px-3">
                    <h3 className="text-xl font-semibold">Nhóm sản phẩm</h3>
                    <ul className="px-2 py-2">
                        {categories.map(category => (
                            <li
                                onClick={handleSearchByCategory}
                                key={category.id}
                                className={`${filter === category.name ? 'text-[#F7941E]' : 'text-gray-700'}  hover:text-[#F7941E] cursor-pointer`}>{category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {
                    listSearch.map((item, index) => (
                        <CheckBoxSearch listProduct={books} setListProduct={setListProduct} title={item.title} items={item.items} filter={filter} />
                    ))
                }

            </div>
            <div className="w-4/5 h-min grid grid-cols-4 gap-4">
                {
                    listProduct.map(book => (
                        <Product book={book} />
                    ))
                }
            </div>
        </div>
    )
}
export default ListProduct