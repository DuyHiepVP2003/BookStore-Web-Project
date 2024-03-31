import Footer from "../../components/Footer/Footer"
import CategoryBar from "../../components/Navbar/CategoryBar"
import Navbar from "../../components/Navbar/Navbar"
import ProductContainer from "../../components/ProductContainer/ProductContainer"

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <CategoryBar />
        <ProductContainer />
        <Footer />
      </div>
    </>
  )
}
export default Home