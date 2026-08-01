import SplitText from "../../animations/SplitText";
const HeroUs =() =>{
    return(
        <div
         className='flex flex-col justify-center items-center relative min-h-screen text-[#f7f4ee] bg-cover bg-center sm:bg-[position:unset] bg-[url("https://i.postimg.cc/KzJyxdfn/Group-59.png")]'>
            <div className='flex flex-row gap-20 w-full h-fit justify-center items-center text-center'>
                <SplitText text="¿QUIÉNES SOMOS?" className='font-inter text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'/>
                <img className='hidden sm:flex sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[32rem]' src="https://i.postimg.cc/fTsRDYSb/Group-33.png" alt="Logo de SM Estudio Contable" />
            </div>

        </div>
    );
};
export default HeroUs;