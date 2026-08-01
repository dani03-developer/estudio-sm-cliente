import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import AnswerList from "../../mock/AnswerList";

const AnswerPage = ({ namePage }) => {
    const { id } = useParams();
    const location = useLocation();
    const orderId = location.state?.orderId;
    const data = AnswerList[namePage ?? id] ?? AnswerList['404'];
    const { img, title, description, button, direction } = data;

    return(
        <div className='flex flex-col items-center justify-center gap-4 font-inter text-[#1e1e1e] font-semibold text-center flex-1'>
            <span className='text-[4rem] md:text-[5rem] text-[#C5B9B9]'>{img}</span>
            <h1 className='text-2xl md:text-3xl'>{title}</h1>
            <div className='text-sm sm:text-base flex flex-col w-[90%] md:w-[70%] lg:w-[50%] gap-3'>
                <p className='font-quicksand text-[#7d7b7b]'>{description}</p>
                {orderId ? <p className='font-inter text-[#1e1e1e]'>Número de orden: {orderId}</p>: null}
            </div>

            <Link to={direction}>
                <Button className='bg-[#7CB7DF]/58 text-[#25476D] hover:bg-[#1A3E65] hover:text-[#F7F4EE]'>{button}</Button>
            </Link>
        </div>
    )
}
export default AnswerPage;