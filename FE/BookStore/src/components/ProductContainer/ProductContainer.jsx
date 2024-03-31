import Product from "./Product"

const ProductContainer = () => {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-4">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}
export default ProductContainer