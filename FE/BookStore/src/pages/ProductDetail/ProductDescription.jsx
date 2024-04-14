const ProductDescription = ({ book }) => {
    return (
        <div className="max-w-screen-xl mx-auto bg-white mt-10 rounded-lg p-5">
            <h3 className="text-xl font-semibold">Thông tin sản phẩm</h3>
            <ul>
                <li><span className="min-w-80 inline-block">Tác giả</span> <span>{book.author}</span></li>
                <li><span className="min-w-80 inline-block">NXB</span> <span>{book.publisher}</span></li>
                <li><span className="min-w-80 inline-block">Năm XB</span> <span>{book.publicYear}</span></li>
                <li><span className="min-w-80 inline-block">Ngôn Ngữ </span> <span>{book.language}</span></li>
                <li><span className="min-w-80 inline-block">Trọng lượng (gr)</span> <span>{book.weight}</span></li>
                <li><span className="min-w-80 inline-block">Số trang</span> <span>{book.pageNumber}</span></li>
                <li><span className="min-w-80 inline-block">Hình thức</span> <span>{book.form}</span></li>
            </ul>
        </div>
    )
}
export default ProductDescription