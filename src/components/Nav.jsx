import React from 'react'
import headerLogo from '../assets/assets/images/header-logo.svg'
import hamburger from '../assets/assets/icons/hamburger.svg'
import { navLinks } from '../constants'

export const Nav = () => {
  return (
    <header className='padding-x py-8 fixed z-20 w-full border-b border-gray-200'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.href} className='font-nontserrat leading-normal text-lg text-slate-grqy'>
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}
