import { useEffect, useRef, useState } from 'react'
import "./burger.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Burger = () => {
    const mRef = useRef();
    const linkClass = 'cursor-pointer link-underlined py-4 w-fit h-14';
    const [check, setCheck] = useState(false);
    const mobile_menu_ref = useRef(null);
    const background_ref = useRef(null);

    function Toggling() {
        mRef.current.classList.toggle('is-active');
        mobile_menu_ref.current.classList.toggle('is-active');
        background_ref.current.classList.toggle('is-active');

        if (mRef.current.classList.contains('is-active') && background_ref.current.classList.contains('is-active') && mobile_menu_ref.current.classList.contains('is-active')) {
            setCheck(true)
        }
    }

    useEffect(() => {
        const mobile_menu = mobile_menu_ref.current;
        const background = background_ref.current;
        if (check) {
            mobile_menu.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };

            background.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
        }
    }, [check]);

    return (<>
        <nav className=' bg-[#306fb6] flex flex-row justify-between px-5  items-center text-white text-xl py-4 shift  sticky top-0 w-full indexing '>
            <div className='w-36 py-1'>
                <img className='w-full' src='./logo.png' alt='Logo' />
            </div>
            <div className='flex gap-3'>
                <button id='hamburger1' className="hamburger px-[6px]" ref={mRef} onClick={Toggling}>
                    <div className="bar">
                    </div>
                </button>
            </div>
        </nav>
        <div className="background_blur bg-black opacity-40" ref={background_ref}></div>
        <div className="mobile-nav bg-[#306fb6] opacity-90" ref={mobile_menu_ref}>
            <div className='flex flex-col justify-center items-center w-full text-lg max-[1708px]:text-sm gap-[40px] font-semibold'>
                <ul className='text-center text-white text-xl flex flex-col justify-center items-center'>
                    <Link to="/" className={linkClass}>
                        Home
                        <FontAwesomeIcon icon={faHome} size="sm" className="mx-2 text-grey" />
                    </Link>
                    <Link to="/Search" className={linkClass}>
                        Search
                        <FontAwesomeIcon icon={faSearch} size="sm" className="mx-2 text-grey" />
                    </Link>
                </ul>
            </div>
        </div>
    </>)
}

export default Burger
