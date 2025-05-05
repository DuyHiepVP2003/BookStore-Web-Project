const SideBar = ({ children }) => {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className="font-bold text-xl text-red-600">Admin Manage</div>
                </div>
                <div className="flex-1 px-3">{children}</div>
            </div>
        </div>
    )
}
export default SideBar