const CheckBoxSearch = ({ title, items, filter, listProduct, setListProduct }) => {
    const handleSearchByPrice = (range) => {
        const filterBook = listProduct.filter(book => {
            const price = parseFloat(book.price)
            return price > range[0] && price <= range[1]
        })
        filter ? setListProduct(filterBook.filter(book => book.category.name === filter)) : setListProduct(filterBook)
        setListProduct(filterBook)
    }
    return (
        <div className="border-b py-2 px-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="px-2 py-2">
                {
                    items.map(item => (
                        <div onClick={()=>{
                            handleSearchByPrice(item.range)
                        }}>
                            <label className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">{item.label}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default CheckBoxSearch