import Product from "../../components/ProductContainer/Product"
import CheckBoxSearch from "./CheckBoxSearch"

const ListProduct = () => {
    const listSearch = [{
        name: "price",
        title: "Giá",
        items: [
            "0đ - 150,000đ",
            "150,000đ - 300,000đ",
            "300,000đ - 500,000đ",
            "500,000đ - 700,000đ",
            "700,000đ trở lên"
        ]
    }, {
        name: "genres",
        title: "Genres",
        items: [
            "Comedy",
            "Shonen",
            "Adventure",
            "Drama",
            "Action",
            "Fantasy",
            "Sci Fi"
        ]
    }
    ]
    return (
        <div className="max-w-screen-xl mx-auto mt-5 flex ">
            <div className="bg-white shadow-lg w-1/5 mr-5">
                <div className="border-b py-2 px-3">
                    <h3 className="text-xl font-semibold">Nhóm sản phẩm</h3>
                    <ul className="px-2 py-2">
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Sách Tiếng Việt</li>
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Văn phòng phẩm - Dụng cụ học sinh</li>
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Sách nước ngoài</li>
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Đồ chơi</li>
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Bách hóa tổng hợp</li>
                        <li className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">Lưu niệm</li>
                    </ul>
                </div>
                {
                    listSearch.map(item => (
                        <CheckBoxSearch title={item.title} items={item.items} name={item.name}/>
                    ))
                }

            </div>
            <div className="w-4/5 grid grid-cols-4 gap-4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
export default ListProduct