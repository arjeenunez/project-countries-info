import React from 'react';

const Card = () => {
    return (
        <div className='card bg-base-300 w-66 h-84 rounded-md'>
            <figure>
                <img
                    src='...'
                    alt='country'
                    className='w-full h-40 bg-red-500'
                />
            </figure>
            <div className='card-body p-6'>
                <h2 className='card-title text-lg font-extrabold mb-4'>Belgium</h2>
                <ul className='flex flex-col justify-between'>
                    <li className='text-sm font-semibold'>
                        Population: <span className='font-light'>81,000,000</span>
                    </li>
                    <li className='text-sm font-semibold'>
                        Region: <span className='font-light'>Europe</span>
                    </li>
                    <li className='text-sm font-semibold'>
                        Capital: <span className='font-light'>Idunno</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
