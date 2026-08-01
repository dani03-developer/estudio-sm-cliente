import Reveal from "../../animations/Reveal";
import SplitText from "../../animations/SplitText";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
const OurTeam =( {list} )=>{
    return(
        <div className='mx-auto flex max-w-screen-xl flex-col gap-16  justify-center items-center text-center text-[#1e1e1e]'>
            <Reveal>
                <div className='text-center text-lg w-30 py-1 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full'>
                <p>Equipo</p>
                </div>
            </Reveal>
            <SplitText
                tag='h2'
                text='Nuestro equipo, tu respaldo contable.'
                className='mt-2 text-3xl font-inter font-bold tracking-tight text-balance text-[#1e1e1e] sm:text-4xl'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {list.map((member, index) => (
                    <div key={index} className='flex relative flex-col w-70 items-center text-start gap-4 rounded-lg md:w-60 lg:w-70'>
                        <img src={member.photo} alt={member.name} className='object-cover' />
                        <div className='absolute flex flex-col items-start p-10 place-content-between h-full md:p-7 lg:p-10 rounded-lg w-full'>
                            <div className='flex flex-col text-[#f4f7ee]'>
                                <p className='text-xl font-bold font-inter md:text-md lg:text-xl xl:text-2xl'>{member.name}</p>
                                <p className='font-quicksand md:text-sm lg:text-base'>{member.esp}</p>
                                <p className='font-quicksand font-bold md:text-sm lg:text-base'>{member.mat}</p>
                            </div>
                            <div className='flex gap-2 mt-2 justify-center text-[#25476D]'>
                                <a href={member.linkedIn} target="_blank">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                                <a href={member.instagram} target="_blank">
                                    <FaInstagram className='text-3xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OurTeam;