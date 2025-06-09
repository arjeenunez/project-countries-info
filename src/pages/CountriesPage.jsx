import React, { useContext, useState } from 'react';
import { SearchIcon, Loader2Icon, Loader } from 'lucide-react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { DataContext, DataDispatchContext } from '../contexts/data.context';

const CountriesPage = () => {
    const { countries, setToDisplay, isLoading } = useContext(DataContext);
    const [inputValue, setInputValue] = useState('');
    let countriesDisplay = countries;
    const handleChangeInputValue = e => {
        setInputValue(prevState => e.target.value);
        countriesDisplay = countries?.filter(el => el.name.common.toLowerCase().includes(e.target.value));
        console.log(countriesDisplay);
    };
    const dispatch = useContext(DataDispatchContext);
    const handleClickLoadMore = () => {
        dispatch({ type: 'UPDATE_DISPLAY' });
    };
    console.log(inputValue);
    return (
        <div className='min-h-dvh px-4 py-6 md:px-20'>
            <div className='flex flex-wrap gap-y-10 mb-8 justify-between md:mb-12'>
                <label className='input w-full max-w-120'>
                    <SearchIcon />
                    <input
                        type='search'
                        className='grow:'
                        placeholder='Search'
                        disabled={countries ? false : true}
                        value={inputValue}
                        onChange={handleChangeInputValue}
                    />
                    <kbd className='kbd kbd-sm'>⌘</kbd>
                    <kbd className='kbd kbd-sm'>K</kbd>
                </label>
                <select
                    defaultValue='Filter by Region'
                    className='select w-50'
                    disabled={countries ? false : true}
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
                {isLoading ? (
                    <Loader2Icon className='size-30 text-center animate-spin w-full' />
                ) : !countries ? (
                    <p className='w-80 text-center italic text-gray-400 md:w-full'>Nothing to display. Download and cache from the API. Disabled input and buttons.</p>
                ) : (
                    countriesDisplay?.slice(0, setToDisplay).map((country, i) => (
                        <Link
                            to={`/${country.name.common}`}
                            key={i}
                            data={country}
                        >
                            <Card
                                flag={country.flags.png}
                                name={country.name.common}
                                population={Intl.NumberFormat(navigator.language, { style: 'decimal', useGrouping: true }).format(country.population)}
                                region={country.region}
                                capital={country.capital}
                                data={country}
                            />
                        </Link>
                    ))
                )}
            </div>
            <div className='text-center'>
                <button
                    type='button'
                    className='btn btn-primary w-full md:w-60'
                    onClick={handleClickLoadMore}
                    disabled={countries ? false : true}
                >
                    Load more
                </button>
            </div>
        </div>
    );
};

export default CountriesPage;
