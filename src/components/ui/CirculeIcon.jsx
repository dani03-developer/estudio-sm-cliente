const CirculeIcon = ({ icon, className }) => {
    return(
        <div className={`flex w-fit p-2 rounded-full text-3xl ${className}`}>
            {icon}
        </div>
    );
};
export default CirculeIcon;