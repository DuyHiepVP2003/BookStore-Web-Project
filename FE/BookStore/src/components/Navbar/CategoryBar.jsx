import CategoryBarItem from "./CategoryBarItem"
import { categoryBarItem } from "../../data/data"
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../utils/CategoryApiFunction";
const CategoryBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories()
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <div className="max-w-screen-xl border-none py-3 my-5 mx-auto border rounded-lg bg-white">
            <h3 className="font-semibold text-2xl  ml-4 border-b pb-2 mb-2 flex items-center">
                <BiCategory className="mr-2 text-[#c92127]" />
                Danh mục sản phẩm
            </h3>
            <div className="flex justify-around">
                {categories.map((item) => (
                    <Link to={`/product_search/${item.name}`}>
                        <CategoryBarItem key={item.id} image={item.parentCategory} title={item.name} />
                    </Link>
                ))}
            </div>
        </div >
    )
}
export default CategoryBar