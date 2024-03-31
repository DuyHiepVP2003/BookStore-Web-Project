import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ProductDetail from "./ProductDetail"
const ProductDetailPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <ProductDetail />
            <Footer />
        </div>
    )
}
export default ProductDetailPage