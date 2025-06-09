import React from 'react';

const Listitem = ({ label, text = '' }) => {
    return (
        <li className='text-sm font-semibold md:text-[16px]'>
            {label}
            <span className='font-light'>{text}</span>
        </li>
    );
};

export default Listitem;
