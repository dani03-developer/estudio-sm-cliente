const BasicCard = ( {children, className})=>{
    return(
        <div className={`flex flex-col border rounded-lg p-6 justify-center items-center w-fit font-quicksand text-[#1e1e1e] ${className}`}>
            {children}
        </div>
    );
};
export default BasicCard;