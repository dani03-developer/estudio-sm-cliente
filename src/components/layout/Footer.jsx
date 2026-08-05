import { BsInstagram } from 'react-icons/bs';
import Navegation from '../../mock/Navegation';
import { Button } from '../ui/Button';
import {Link, NavLink, useLocation} from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation()
  return (
    <div className={pathname === '/' ? 'pt-28 sm:pt-40' : 'pt-10'}>

         <footer className=' relative border-t bg-[#1e1e1e] text-[#f4f7ee] font-inter items-end justify-end'>
          {pathname === '/' && (
            <img className='absolute w-90  -top-25 left-1/2 -translate-x-1/2 sm:w-120 md:w-150 md:-top-35 xl:w-160 z-10' src="https://i.postimg.cc/LXyV9fx8/Banner-Footer.png" alt="" />
          )}
          {
            pathname === '/' && (
              <Link to='/contacto'><Button className='absolute cursor-pointer z-20 bg-[#25476d] hover:bg-[#25476d] left-1/2 -translate-x-1/2 -top-1 sm:top-[10%] md:top-[12%] xl:top-[20%]'>¡Hablemos!</Button></Link>
            )
         }
        <section 
          className={pathname === '/' ? 'mx-auto pt-15 pb-10  px-6 md:px-5 sm:pt-35 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8':'p-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8'}>
        <section>
          <NavLink to='/'>
            <img src='https://i.postimg.cc/c12jyg6g/Group-33.png' className='h-10 md:h-12 xl:h-13' alt='SM' />
          </NavLink>
        </section>
        <section className='hidden lg:block'>
          <ul className='flex gap-10 mb-0 text-[#f4f7ee]'>
            {Navegation.map((item) => (
              <li key={item.name}>
                <NavLink to={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>

        <section className='hidden lg:flex gap-4 text-xl'>
          <a href='https://www.instagram.com/estudiointegralcontable.sm/' >
          <BsInstagram className=' cursor-pointer xl:text-2xl' />
          </a>
        </section>

        <section className='lg:hidden grid grid-cols-2'>
          <ul className='list-none'>
            {Navegation.slice(0, 2).map((item) => (
              <li key={item.name} className='mb-2'>
                <NavLink to={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className='list-none'>
            {Navegation.slice(2).map((item) => (
              <li key={item.name} className='mb-2'>
                <NavLink to={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className='flex gap-2 text-lg'>
              <a href='https://www.instagram.com/estudiointegralcontable.sm/' >
                 <BsInstagram />
              </a>
            </li>
          </ul>
        </section>

      </section>
    </footer>
    </div>
  )
}

export default Footer;