const CheckBoxSearch = ({ title, items, name }) => {
    return (
        <div className="border-b py-2 px-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="px-2 py-2">
                {
                    items.map(item => (
                        <div>
                            <input type="checkbox" name={name} className="mr-2"/>
                            <label className=" text-gray-700 hover:text-[#F7941E] cursor-pointer">{item}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default CheckBoxSearch