import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import Navegation from '../../mock/Navegation';
import CartWidget from './CartWidget';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [openCategory, setOpenCategory] = useState(null)
  return (
    <Disclosure
      as="nav"
      className={pathname === '/' || pathname === '/nosotros' ? "absolute top-0 inset-x-0 z-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 font-quicksand lg:pt-4 " : "relative top-0 inset-x-0 z-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 font-quicksand lg:pt-4 "}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className={pathname === '/' || pathname === '/nosotros' ? "group  relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#374151] " : "group  relative inline-flex items-center justify-center rounded-md p-2 text-[#1e1e1e] hover:bg-[#374151] hover:text-white"}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Menu principal</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:flex-none sm:justify-start">
            <div className="flex shrink-0 items-center">
              <NavLink to='/'>
                <img
                  alt="Your Company"
                  src={pathname === '/' || pathname === '/nosotros' ? 'https://i.postimg.cc/HsBCbZd2/Group-29.png' : 'https://i.postimg.cc/NFJfyyZt/Group-31.png'}
                  className="h-8 lg:h-10"
                />
              </NavLink>
            </div>
          </div>

          <div className="hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:flex">
            <div className="flex space-x-4">
              {Navegation.map((item) => (
                <div key={item.name} className="group relative">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? pathname === '/' || pathname === '/nosotros' ? 'text-white font-bold' : 'text-[#1e1e1e] font-bold'
                        : pathname === '/' || pathname === '/nosotros' ? 'text-gray-300 font-medium  hover:bg-white/5' : 'text-[#1e1e1e] font-medium hover:bg-[#1e1e1e]/5',
                          'block rounded-md px-3 py-2 text-sm lg:text-base'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.categories && (
                    <div className="invisible absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-md bg-[#25476D] py-1 shadow-lg ring-1 ring-black/5">
                        {item.categories.map((category) => (
                          <NavLink
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10"
                          >
                            {category.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className={pathname === '/' || pathname === '/nosotros' ? 'relative rounded-full p-1 text-white':'relative rounded-full p-1 text-[#1e1e1e]'}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Ver Carrito</span>
              <CartWidget />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden absolute w-full z-50">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-[#1e1e1e]">
          {Navegation.map((item) => (
            <div key={item.name}>
              <div className="flex items-center">
                <DisclosureButton
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'text-white' : 'text-white hover:bg-white/5',
                      'flex-1 rounded-md px-3 py-2 text-base font-medium',
                    )
                  }
                >
                  {item.name}
                </DisclosureButton>
                {item.categories && (
                  <button
                    type="button"
                    onClick={() => setOpenCategory(openCategory === item.name ? null : item.name)}
                    className="rounded-md p-2 text-white hover:bg-white/5"
                  >
                    <span className="sr-only">Mostrar categorías de {item.name}</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={classNames(openCategory === item.name ? 'rotate-180' : '', 'size-5 transition-transform')}
                    />
                  </button>
                )}
              </div>
              {item.categories && openCategory === item.name && (
                <div className="space-y-1 pl-4">
                  {item.categories.map((category) => (
                    <DisclosureButton
                      key={category.name}
                      as={NavLink}
                      to={category.href}
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                          'block rounded-md px-3 py-2 text-sm font-medium',
                        )
                      }
                    >
                      {category.name}
                    </DisclosureButton>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
