import { useContext } from 'react';
import { MoonIcon, SunIcon, Trash2Icon, DownloadIcon, Loader2Icon, SunMoonIcon } from 'lucide-react';
import { ThemeContext } from '../contexts/theme.context';
import { DataContext, DataDispatchContext } from '../contexts/data.context';

const Navbar = () => {
    const {
        mode: { modeSelect },
        toggleMode,
    } = useContext(ThemeContext);
    const { userDownload, isLoading } = useContext(DataContext);
    const dispatch = useContext(DataDispatchContext);
    const handleClick = () => {
        dispatch({ type: 'UPDATE_USER_DOWNLOAD' });
    };

    return (
        <div className='navbar h-20 bg-base-300 px-4 text-sm font-extrabold tracking-[-0.6%] md:px-20'>
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
                    {modeSelect % 3 === 0 ? (
                        <>
                            <SunMoonIcon
                                fill='white'
                                className='navbar__btn--icon size-4 md:size-6 pointer-events-none'
                            />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Auto</span>
                        </>
                    ) : modeSelect % 3 === 1 ? (
                        <>
                            <SunIcon className='navbar__btn--icon size-4 md:size-6 pointer-events-none' />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Light</span>
                        </>
                    ) : (
                        <>
                            <MoonIcon
                                fill='white'
                                className='navbar__btn--icon size-4 md:size-6 pointer-events-none'
                            />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Dark</span>
                        </>
                    )}
                </button>
                {/* Button for downloading data and clearing localStorage after */}
                <button
                    type='button'
                    className='navbar__btn--load btn text-xs md:btn-md md:text-[16px]'
                    onClick={handleClick}
                >
                    {isLoading ? (
                        <Loader2Icon className='animate-spin' />
                    ) : userDownload ? (
                        <>
                            <Trash2Icon className='navbar__btn--icon size-4 md:size-6 pointer-events-none' />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Delete data</span>
                        </>
                    ) : (
                        <>
                            <DownloadIcon className='navbar__btn--icon size-4 md:size-6 pointer-events-none' />
                            <span className='navbar__btn--text hidden font-semibold md:block pointer-events-none'>Download data</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
