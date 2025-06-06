import React from 'react';
import { SearchIcon } from 'lucide-react';
import Card from '../components/Card';

const Countries = () => {
    return (
        <div className='px-4 py-6 md:px-20'>
            <div className='flex flex-wrap gap-y-10 mb-8 justify-between md:mb-12'>
                <label class='input w-full max-w-120'>
                    <SearchIcon />
                    <input
                        type='search'
                        class='grow'
                        placeholder='Search'
                    />
                    <kbd class='kbd kbd-sm'>⌘</kbd>
                    <kbd class='kbd kbd-sm'>K</kbd>
                </label>
                <select
                    defaultValue='Filter by Region'
                    className='select w-50'
                >
                    <option disabled={true}>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
            <div className='flex flex-wrap justify-center gap-y-10 md:justify-between md:gap-y-19'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Countries;
