import Reveal from "../animations/Reveal";

const CardBenefits = ( {title, subtitle, description, icon} ) => {
        return (
            <Reveal>
                     <div className='flex flex-col mx-auto w-[80%] color-[#1e1e1e] md:flex-row md:flex-row-reverse sm:w-[70%] md:[70%] xl:w-[60%] bg-[#E5E2E2] rounded-lg mb-10'>
                        <div className='flex flex-col gap-3 text-center text-[#f4f7ee] align-center justify-center bg-[#4a7c93] py-9 px-4 md:px-2 rounded-lg '>
                            <p className='font-quicksand'>Nosotros estamos aquí para:</p>
                            <h3 className='text-xl font-inter font-bold'>{title}</h3>
                        </div>
                        <div className='flex flex-col gap-4 md:flex-row md:items-center md:w-[70%] p-4'>
                            <div className='hidden md:flex justify-center items-center p-2 bg-[#4a7c93] rounded-full text-[#f4f7ee] text-2xl'>
                                {icon}
                            </div>
                            <div className='flex flex-col gap-2'>
                            <div className='text-start text-sm p-2 w-fit border-1 border-[#1e1e1e] rounded-lg'>
                                <p className='font-inter'>{subtitle}</p>
                            </div>
                            <p className='font-quicksand'>
                                {description}
                            </p>
                            </div>
                        </div>
            </div>
            </Reveal>
        );
};
export default CardBenefits;