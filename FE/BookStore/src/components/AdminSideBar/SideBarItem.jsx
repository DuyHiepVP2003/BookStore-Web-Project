const SideBarItem = ({ icon, text, setMainContent }) => {
    return (
        <div onClick={() => { setMainContent(text) }} className="flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors hover:bg-orange-500 hover:text-white">
            {icon}
            <span className="w-52 ml-3">{text}</span>
        </div>
    )
}
export default SideBarItem