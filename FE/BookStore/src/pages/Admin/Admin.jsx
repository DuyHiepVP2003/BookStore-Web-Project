import { useState } from "react";
import MainContent from "../../components/AdminMainContent/MainContent";
import SideBar from "../../components/AdminSideBar/SideBar"
import SideBarItem from "../../components/AdminSideBar/SideBarItem"
import { LuLayoutDashboard } from "react-icons/lu";
const Admin = () => {
    const [mainContent, setMainContent] = useState('Author')
    return (
        <>
            <div className="flex">
                <SideBar className="w-1/5">
                    <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Author" />
                    {/* <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Book" /> */}
                    <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Category" />
                    <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Customer" />
                    <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Publisher" />
                    {/* <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Order" />
                    <SideBarItem setMainContent={setMainContent} icon={<LuLayoutDashboard size={20} />} text="Billing" /> */}
                </SideBar>
                <MainContent mainContent={mainContent} className="w-4/5" />
            </div>
        </>
    )
}
export default Admin