import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='navbar h-20 bg-base-300 px-4 text-sm font-extrabold tracking-[-0.6%] md:px-20'>
            <div className='navbar-start'>
                <a
                    className='navbar__link btn btn-ghost md:text-2xl'
                    href='#'
                >
                    Where in the world?
                </a>
            </div>
            <div className='navbar-end'>
                <button className='btn text-xs md:btn-lg md:text-[16px]'>
                    <MoonIcon
                        fill='white'
                        className='navbar__btn--icon size-4 md:size-6'
                    />
                    <span className='navbar__btn--text font-semibold'>Dark Mode</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
