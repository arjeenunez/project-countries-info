import React from 'react';

const Card = ({ flag, name, population, region, capital }) => {
    return (
        <div className='card bg-base-300 w-66 h-84 rounded-md border border-black/10 shadow-2xl shadow-black/10'>
            <figure>
                <img
                    src={`${flag}`}
                    alt='country'
                    className='w-full h-40 bg-red-500'
                />
            </figure>
            <div className='card-body p-6'>
                <h2 className='card-title text-lg font-extrabold mb-4'>{name}</h2>
                <ul className='flex flex-col justify-between'>
                    <li className='text-sm font-semibold'>
                        Population: <span className='font-light'>{population}</span>
                    </li>
                    <li className='text-sm font-semibold'>
                        Region: <span className='font-light'>{region}</span>
                    </li>
                    <li className='text-sm font-semibold'>
                        Capital: <span className='font-light'>{capital}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
