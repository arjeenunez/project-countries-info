import { SearchIcon } from 'lucide-react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const CountriesPage = () => {
    const countries = new Array(26).fill({ flags: { png: '...' }, name: { common: 'Sample Name' }, population: 10000, region: 'Sample Region', capital: 'Sample Capital' });
    return (
        <div className='px-4 py-6 md:px-20'>
            <div className='flex flex-wrap gap-y-10 mb-8 justify-between md:mb-12'>
                <label className='input w-full max-w-120'>
                    <SearchIcon />
                    <input
                        type='search'
                        className='grow'
                        placeholder='Search'
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
                {countries?.slice(0, 8).map((country, i) => (
                    <Link
                        to={`/${country.name.common}`}
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
                >
                    Load more
                </button>
            </div>
        </div>
    );
};

export default CountriesPage;
