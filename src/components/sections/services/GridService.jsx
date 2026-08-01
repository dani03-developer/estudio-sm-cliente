
const GridService = ( {title, description, className, list, card} ) => {
    return (
        <div className='flex flex-col justify-center items-center text-center font-quicksand text-[#1e1e1e] gap-6 xl:mx-15 '>
            <h2 className='font-bold font-inter font-bold text-3xl sm:text-4xl'>{title}</h2>
            <p className='mx-auto text-base w-[90%] sm:w-[70%] max-w-2xl font-quicksand text-center font-base md:text-lg'>{description}</p>
            <div className={`grid text-start pb-10 pt-5 ${className}`}>
                {list.map((service, index) => card(service, index))}
            </div>
        </div>
    );
};
export default GridService;