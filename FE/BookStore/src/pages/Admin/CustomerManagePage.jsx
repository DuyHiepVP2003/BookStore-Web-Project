import SideBar from "../../components/AdminSideBar/SideBar"
import { LuLayoutDashboard } from "react-icons/lu"
import SideBarItem from "../../components/AdminSideBar/SideBarItem"
import CustomerManage from "../../components/AdminMainContent/CustomerManage"
const CustomerManagePage = () => {
    return (
        <>
            <div className="flex">
                <SideBar className="w-1/5">
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Book" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Category" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Customer" />
                </SideBar>
                <CustomerManage className="w-4/5" />
            </div>
        </>
    )
}
export default CustomerManagePage