import React, { Component, useContext } from 'react';
import { SearchIcon } from 'lucide-react';
import Card from '../components/Card';
import useInput from '../hooks/useInput.hook.jsx';
import { StateContext, DispatchContext } from '../contexts/state.context.jsx';
import { ThemeContext } from '../contexts/theme.context.jsx';
import { Link } from 'react-router-dom';

const CountriesPage = () => {
    const { isLightMode } = useContext(ThemeContext);
    const { countries, setToDisplay } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const [inputValue, handleChangeInputValue] = useInput('');
    const handleLoadMore = () => {
        dispatch({ type: 'SET_DISPLAY' });
    };
    return (
        <div
            data-theme={isLightMode ? 'light' : 'dark'}
            className='px-4 py-6 md:px-20'
        >
            <div className='flex flex-wrap gap-y-10 mb-8 justify-between md:mb-12'>
                <label className='input w-full max-w-120'>
                    <SearchIcon />
                    <input
                        type='search'
                        className='grow'
                        placeholder='Search'
                        value={inputValue}
                        onChange={e => handleChangeInputValue(e.target.value)}
                    />
                    <kbd className='kbd kbd-sm'>⌘</kbd>
                    <kbd className='kbd kbd-sm'>K</kbd>
                </label>
                <select
                    defaultValue='Filter by Region'
                    className='select w-50'
                >
                    <option disabled={true}>Filter by Region</option>
                    <option value={'africa'}>Africa</option>
                    <option value={'americas'}>America</option>
                    <option value={'asia'}>Asia</option>
                    <option value={'europe'}>Europe</option>
                    <option value={'oceania'}>Oceania</option>
                </select>
            </div>
            <div className='flex flex-wrap justify-center gap-y-10 md:justify-between md:gap-y-19 mb-10'>
                {countries?.slice(0, setToDisplay).map((country, i) => (
                    <Link
                        to={'/country'}
                        key={i}
                    >
                        <Card
                            flag={country.flags.png}
                            name={country.name.common}
                            population={Intl.NumberFormat(navigator.language, { style: 'decimal', useGrouping: true }).format(country.population)}
                            region={country.region}
                            capital={country.capital}
                        />
                    </Link>
                ))}
            </div>
            <div className='text-center'>
                <button
                    type='button'
                    className='btn btn-primary w-full md:w-60'
                    onClick={handleLoadMore}
                >
                    Load more
                </button>
            </div>
        </div>
    );
};

export default CountriesPage;
