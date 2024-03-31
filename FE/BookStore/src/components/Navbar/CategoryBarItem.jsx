const CategoryBarItem = ({ image, title }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer">
            <img className=" w-24" srcSet={image} alt="item" />
            <p>{title}</p>
        </div>
    )
}
export default CategoryBarItem