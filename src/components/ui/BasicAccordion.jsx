import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@/components/animate-ui/components/headless/accordion';

export const BasicAccordion = ({
  keepRendered = false,
  showArrow = true,
  list
}) => {
  return (
    <Accordion className=' w-full'>
      {list.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionButton className='font-quicksand font-semibold sm:text-lg hover:text-[#004EBA]' showArrow={showArrow}>{item.title}</AccordionButton>
          <AccordionPanel className='xl:text-base' keepRendered={keepRendered}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};