import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Account/Login";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CartPage from "./pages/Cart/CartPage";
import CategoryManagePage from "./pages/Admin/CategoryManagePage";
import CustomerManagePage from "./pages/Admin/CustomerManagePage";
import BookManagePage from "./pages/Admin/BookManagePage";
import BookModal from "./components/AdminMainContent/BookModal";
import CustomerDetail from "./pages/Account/CustomerDetail";
import ForgotPassword from "./pages/Account/ForgotPassword";
import ResetPassword from "./pages/Account/ResetPassword";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route >
      <Route path="/login" element={<Login />}></Route >
      <Route path="/forgotPassword/" element={<ForgotPassword />}></Route >
      <Route path="/resetPassword/:id" element={<ResetPassword />}></Route >
      <Route path="/customer" element={<CustomerDetail />}></Route >
      <Route path="/product_search" element={<ProductPage />}></Route >
      <Route path="/product_detail/:_id" element={<ProductDetailPage />}></Route >
      <Route path="/admin" element={<BookManagePage />}></Route>
      <Route path="/admin/Category" element={<CategoryManagePage />}></Route>
      <Route path="/admin/Customer" element={<CustomerManagePage />}></Route>
      <Route path="/admin/Book" element={<BookManagePage />}></Route>
      <Route path="/admin/Book/:_id" element={<BookModal />}></Route>
      <Route path="/admin/Book/addnew" element={<BookModal />}></Route>
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