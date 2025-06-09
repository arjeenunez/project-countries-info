import { SunIcon } from 'lucide-react';
import React from 'react';

const Button = ({ decision, choiceData1, choiceData2 }) => {
    return (
        <button
            type='button'
            className='navbar__btn--theme btn text-xs md:btn-md md:text-[16px]'
            // onClick={toggleMode}
        >
            {decision ? (
                <>
                    <SunIcon
                        fill='white'
                        className='navbar__btn--icon size-4 md:size-6'
                    />
                    <span className='navbar__btn--text hidden font-semibold md:block'>{choiceData1.text}</span>
                </>
            ) : (
                <>
                    <MoonIcon
                        fill='white'
                        className='navbar__btn--icon size-4 md:size-6'
                    />
                    <span className='navbar__btn--text hidden font-semibold md:block'>Dark Mode</span>
                </>
            )}
        </button>
    );
};
export default Button;
