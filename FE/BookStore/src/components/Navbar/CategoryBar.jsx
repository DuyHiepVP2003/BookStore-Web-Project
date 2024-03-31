import CategoryBarItem from "./CategoryBarItem"
import { categoryBarItem } from "../../data/data"
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
const CategoryBar = () => {
    return (
        <div className="max-w-screen-xl border-none py-3 my-5 mx-auto border rounded-lg bg-white">
            <h3 className="font-semibold text-2xl  ml-4 border-b pb-2 mb-2 flex items-center">
                <BiCategory className="mr-2 text-[#c92127]" />
                Danh mục sản phẩm
            </h3>
            <div className="flex justify-around">
                {categoryBarItem.map((item, index) => (
                    <Link to="/product_search">
                        <CategoryBarItem key={index} image={item.img} title={item.title} />
                    </Link>
                ))}
            </div>
        </div >
    )
}
export default CategoryBar