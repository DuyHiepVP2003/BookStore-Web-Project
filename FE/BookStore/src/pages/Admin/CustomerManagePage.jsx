import CustomerManage from "../../components/AdminMainContent/CustomerManage"
import AdminNav from "../../components/AdminSideBar/AdminNav"
const CustomerManagePage = () => {
    return (
        <>
            <div className="flex">
                <AdminNav/>
                <CustomerManage className="w-4/5" />
            </div>
        </>
    )
}
export default CustomerManagePage