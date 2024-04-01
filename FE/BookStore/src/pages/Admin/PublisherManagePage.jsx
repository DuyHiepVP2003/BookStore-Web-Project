import SideBar from "../../components/AdminSideBar/SideBar"
import { LuLayoutDashboard } from "react-icons/lu"
import SideBarItem from "../../components/AdminSideBar/SideBarItem"
import PublisherManage from "../../components/AdminMainContent/PublisherManage"
const PublisherManagePage = () => {
    return (
        <>
            <div className="flex">
                <SideBar className="w-1/5">
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Author" />
                    {/* <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Book" /> */}
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Category" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Customer" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Publisher" />
                    {/* <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Order" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Billing" /> */}
                </SideBar>
                <PublisherManage className="w-4/5" />
            </div>
        </>
    )
}
export default PublisherManagePage