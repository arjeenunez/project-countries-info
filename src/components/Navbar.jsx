import React, { useContext } from 'react';
import { MoonIcon, SunIcon, Trash2Icon, DownloadIcon, Loader2Icon } from 'lucide-react';
import Button from './Button';
import { StateContext, DispatchContext } from '../contexts/state.context';
import { ThemeContext } from '../contexts/theme.context';

const Navbar = () => {
    const isLightMode = true; // NOTE: SAMPLE ONLY
    const toggleMode = () => {}; // NOTE: SAMPLE ONLY
    const keepDownload = true; // NOTE: SAMPLE ONLY
    return (
        <div
            data-theme={isLightMode ? 'light' : 'dark'}
            className='navbar h-20 bg-base-300 px-4 text-sm font-extrabold tracking-[-0.6%] md:px-20'
        >
            {/* Logo-link - leftmost component */}
            <div className='navbar-start'>
                <a
                    className='navbar__link btn btn-ghost md:text-2xl'
                    href='#'
                >
                    Where in the world?
                </a>
            </div>
            {/* {Buttons - rightmost component} */}
            <div className='navbar-end'>
                {/* Button for light or dark mode */}
                <button
                    type='button'
                    className='navbar__btn--theme btn text-xs md:btn-md md:text-[16px] mr-4'
                    onClick={toggleMode}
                >
                    {isLightMode ? (
                        <>
                            <SunIcon
                                fill='white'
                                className='navbar__btn--icon size-4 md:size-6 pointer-events-none'
                            />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <MoonIcon
                                fill='white'
                                className='navbar__btn--icon size-4 md:size-6 pointer-events-none'
                            />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Dark Mode</span>
                        </>
                    )}
                </button>
                {/* Button for downloading data and clearing localStorage after */}
                <button
                    type='button'
                    className='navbar__btn--load btn text-xs md:btn-md md:text-[16px]'
                >
                    {keepDownload ? (
                        <>
                            <Trash2Icon className='navbar__btn--icon size-4 md:size-6 pointer-events-none' />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Delete Countries</span>
                        </>
                    ) : (
                        <>
                            <DownloadIcon className='navbar__btn--icon size-4 md:size-6 pointer-events-none' />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Load Countries</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
