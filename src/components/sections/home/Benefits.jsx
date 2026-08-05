import Reveal from '../../animations/Reveal';
import Container from '../../ui/Container';
import CardBenefits from '../../ui/CardBenefits';
import BenefitsList from '../../../mock/BenefitsList';
const Benefits = ( { list } ) => {
    return (
        <Container classNameContainer="w-full min-h-screen flex flex-col items-center justify-center">
            <Reveal>
                <div className='text-center py-1 text-lg w-50 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full mb-15'>
                <h2 >Nuestros Beneficios</h2>
                </div>
            </Reveal>
                {list.map(i => (<CardBenefits key={i.title}  icon={BenefitsList.find((item)=>item.iconName === i.iconName)?.icon} title={i.title} subtitle={i.subtitle} description={i.description} />))}
        </Container>
    );
}
export default Benefits;