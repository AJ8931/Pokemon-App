import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import Burger from './burger';
import './navbar.css';

const NavBar = () => {
    const [toggle, setToggle] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setToggle(false);
            } else {
                setToggle(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const fixedNav = document.getElementById('Fixed');
            if (!fixedNav) return;
            if (window.pageYOffset > 50) {
                fixedNav.style.background = '#306fb6';
            } else {
                fixedNav.style.background = 'transparent';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClassName = (to) => {
        const isActive = location.pathname === to;
        return `cursor-pointer font-bold text-lg text-yellow-300 link link-underline link-underline-black pb-2 hover:text-green ${isActive ? 'active' : ''}`;
    };

    return (
        <>
            {toggle ? (
                <nav id="Fixed" className="bg-transparent flex flex-row justify-between gap-[40px] px-14 items-center text-white text-xl py-2 fixed top-0 w-full z-50 transition-all duration-150 ease-in-out">
                    <div className="w-36 min-w-[140px]">
                        <img className="w-full" src="./logo.png" alt="Logo" />
                    </div>
                    <div className="flex flex-row justify-end w-3/6 items-center text-lg max-[1708px]:text-sm gap-[25px] min-w-[510px] font-medium lg:gap-[40px] lg:font-semibold lg:min-w-[605px] text-grey">
                        <Link to="/" className={getLinkClassName('/')}>
                            Home
                            <FontAwesomeIcon icon={faHome} size="sm" className="mx-2 text-grey" />
                        </Link>
                        <Link to="/Search" className={getLinkClassName('/Search')}>
                            Search
                            <FontAwesomeIcon icon={faSearch} size="sm" className="mx-2 text-grey" />
                        </Link>
                    </div>
                </nav>
            ) : (
                <Burger />
            )}
        </>
    );
};

export default NavBar;
