import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ListProduct from "./ListProduct"
const ProductPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <ListProduct />
                <Footer />
            </div>
        </>
    )
}
export default ProductPage