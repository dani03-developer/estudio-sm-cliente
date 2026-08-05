import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from './Button';
import { Link } from 'react-router-dom';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CardPackages =( {id, featured, title, description, link, features, forceblue = false} )=>{
    return(
        <div
            key={id}
            className={classNames(
              forceblue || featured ? 'relative bg-gray-800 flex-1' : 'bg-white/2.5 sm:mx-8 lg:mx-0 flex-1',
              featured
                ? ''
                : id === 0
                  ? 'rounded-t-3xl  lg:rounded-bl-3xl flex-1'
                  : 'rounded-tr-3xl flex-1',
              'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10 flex-1',
            )}
          >
                <h3
                    id={id}
                    className={classNames(featured ? 'text-[#2187CD]-400 font-inter' : 'font-inter text-[#2187CD]', 'text-[#2187CD] font-semibold')}
                >
                {title}
                </h3>
            <p className="mt-4 font-inter flex items-baseline gap-x-2">
              <span
                className={classNames(
                  featured ? 'text-white ' : 'text-white',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                Mensual
              </span>
            </p>
            <p className={classNames(featured ? 'text-gray-300 font-quicksand' : 'text-gray-300 font-quicksand', 'mt-6 text-base/7')}>
              {description}
            </p>
            <ul
              role="list"
              className={classNames(
                featured ? 'text-gray-300 font-quicksand' : 'text-gray-300 font-quicksand',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(featured ? 'text-[#2187CD]' : 'text-[#2187CD]', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
              <Link to='/contacto'><Button className='mt-8 bg-[#4A7C9E]/58 text-[#f7f4ee] hover:bg-[#4A7C9E]'>Empezar ahora</Button></Link>
          </div>
    );
}
export default CardPackages;