import AdminNav from "../../components/AdminSideBar/AdminNav"
import OrderManage from "../../components/AdminMainContent/OrderManage"
const OrderManagePage = () => {
    return (
        <>
            <div className="flex">
                <AdminNav />
                <OrderManage className="w-4/5"/>
            </div>
        </>
    )
}
export default OrderManagePage