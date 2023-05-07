import { useState } from 'react'
import Burger from './burger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [Toggle, setToggle] = useState()
    "load resize".split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            if (window.innerWidth < 768) {
                setToggle(false);
            } else {
                setToggle(true);
            }
        })
    });
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            if (document.getElementById("Fixed")) { document.getElementById("Fixed").style.background = "rgb(154 52 18 / var(--tw-text-opacity))"; }
        } else {
            if (document.getElementById("Fixed")) { document.getElementById("Fixed").style.background = "transparent"; }
        }
    })
    return (
        <>
            {Toggle
                ?
                <nav id="Fixed" className='bg-transparent flex flex-row justify-between gap-[40px] px-14 items-center text-white text-xl py-2 fixed top-0 w-full z-50 transition-all duration-150 ease-in-out'>
                    <div className='w-36 min-w-[140px]'>
                        <img className='w-full' src='./logo.png' alt='Logo' />
                    </div>
                    <ul className='flex flex-row justify-end w-3/6 items-center text-lg max-[1708px]:text-sm gap-[25px] min-w-[510px] font-medium lg:gap-[40px] lg:font-semibold lg:min-w-[605px] text-grey'>
                        <li className='cursor-pointer font-bold text-lg text-yellow-300 link link-underline link-underline-black pb-2 hover:text-green active' >
                            <Link to="/">
                                Home
                            </Link>
                            <FontAwesomeIcon icon={faHome} size="sm" className='mx-2 text-grey' />
                        </li>
                        <li className='cursor-pointer font-bold text-lg text-yellow-300 link link-underline link-underline-black pb-2 hover:text-green' >
                            <Link to="/Search">
                                Search
                            </Link>
                            <FontAwesomeIcon icon={faSearch} size="sm" className='mx-2 text-grey' />
                        </li>
                    </ul>
                </nav>
                :
                <Burger />

            }
        </>
    )
}

export default NavBar