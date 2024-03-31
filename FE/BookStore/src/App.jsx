import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Account/Login";
import Admin from "./pages/Admin/Admin";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CartPage from "./pages/Cart/CartPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route >
      <Route path="/login" element={<Login />}></Route >
      <Route path="/product_search" element={<ProductPage />}></Route >
      <Route path="/product_detail" element={<ProductDetailPage />}></Route >
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Route>
  )
)

export default function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}