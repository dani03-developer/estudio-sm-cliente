import SplitText from "../animations/SplitText";
const CardTestimony =( {testimony,img, namePerson, profession})=>{
    return(
        <div className='flex flex-col items-center text-center gap-15  text-[#1e1e1e] px-2'>
            <SplitText
                tag='p'
                text={testimony}
                className=' text-2xl font-inter font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl'
            />
            <div className='flex flex-row items-center justify-center gap-3'>
                    <img src={img} className='size-10 rounded-full outline' />
                    <div className='flex flex-col text-start text-sm font-quicksand'>
                        <p className='font-semibold'>{namePerson}</p>
                        <p className=' font-semibold text-gray-500'>{profession}</p>
                    </div>
            </div>
        </div>
    );
};
export default CardTestimony;