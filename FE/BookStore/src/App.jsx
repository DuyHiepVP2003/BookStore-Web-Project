import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Account/Login";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CartPage from "./pages/Cart/CartPage";
import CategoryManagePage from "./pages/Admin/CategoryManagePage";
import CustomerManagePage from "./pages/Admin/CustomerManagePage";
import BookManagePage from "./pages/Admin/BookManagePage";
import OrderManagePage from "./pages/Admin/OrderManagePage";
import BookModal from "./components/AdminMainContent/BookModal";
import CustomerDetail from "./pages/Account/CustomerDetail";
import ForgotPassword from "./pages/Account/ForgotPassword";
import ResetPassword from "./pages/Account/ResetPassword";
import Payment from "./pages/Payment/Payment";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/404/NotFound";
import OrderModal from "./components/AdminMainContent/OrderModal";
import SuccessPage from "./pages/Notification/SuccessPage";
import SuccessRegister from "./pages/Notification/SuccessRegister";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route >
      <Route path="/notfoundpage" element={<NotFound />}></Route >
      <Route path="/login" element={<Login />}></Route >
      <Route path="/forgotPassword/" element={<ForgotPassword />}></Route >
      <Route path="/resetPassword/:id" element={<ResetPassword />}></Route >
      <Route path="/verify" element={<SuccessPage />}></Route >
      <Route path="/registerSuccess" element={<SuccessRegister />}></Route >
      <Route path="/customer" element={<CustomerDetail />}></Route >
      <Route path="/payment" element={<Payment />}></Route >
      <Route path="/product_search" element={<ProductPage />}></Route >
      <Route path="/product_search/:filter" element={<ProductPage />}></Route >
      <Route path="/product_detail/:_id" element={<ProductDetailPage />}></Route >
      <Route path="/admin" element={<ProtectedRoute><BookManagePage /></ProtectedRoute>}></Route>
      <Route path="/admin/Category" element={<ProtectedRoute><CategoryManagePage /></ProtectedRoute>}></Route>
      <Route path="/admin/Customer" element={<ProtectedRoute><CustomerManagePage /></ProtectedRoute>}></Route>
      <Route path="/admin/Order" element={<ProtectedRoute><OrderManagePage /></ProtectedRoute>}></Route>
      <Route path="/admin/Order/:_id" element={<ProtectedRoute><OrderModal /></ProtectedRoute>}></Route>
      <Route path="/admin/Book" element={<ProtectedRoute><BookManagePage /></ProtectedRoute>}></Route>
      <Route path="/admin/Book/:_id" element={<ProtectedRoute><BookModal /></ProtectedRoute>}></Route>
      <Route path="/admin/Book/addnew" element={<ProtectedRoute><BookModal /></ProtectedRoute>}></Route>
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