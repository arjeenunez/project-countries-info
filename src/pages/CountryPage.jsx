import React, { useContext } from 'react';
import { MoveLeftIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../contexts/data.context';
import Listitem from '../components/Listitem';
import { Link } from 'react-router-dom';

const CountryPage = () => {
    const { countries } = useContext(DataContext);
    const params = useParams();

    const arrayBuild = obj => {
        if (!obj) return obj;
        let result = [];
        for (let key in obj) {
            result.push(obj[`${key}`]);
        }
        return result;
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    const country = countries?.find(el => el.name.common === params.name);
    const countryName = country?.name.common;
    const countryRegion = country?.region || '';
    const countryFlag = country?.flags.png || '...';
    const countryTld = country?.tld;
    const countrySubregion = country?.subregion;
    const countryPopulation = country?.population || 0;
    const countryLanguages = arrayBuild(country?.languages)?.join(', ');
    const countryNativeName = arrayBuild(country?.name.nativeName)?.at(0).common;
    const countryCurrencies = arrayBuild(country?.currencies)?.at(0).name;
    const countryBorders = country?.borders?.map(el => countries?.find(e => e.cca3 === el).name.common) || [];

    return (
        <div className='country flex flex-col px-7 py-10 md:p-15'>
            {/* Back button */}
            <button
                type='button'
                className='country__btn btn btn-primary w-26 h-8 font-light text-sm mb-16 md:text-[16px] md:h-10 md:mb-20'
                onClick={handleClick}
            >
                <MoveLeftIcon />
                Back
            </button>
            {/* Country description */}
            {!country ? (
                <span className='text-xl md:text-4xl'>Can't find the country, maybe it doesn't exist :&lt;</span>
            ) : (
                <div className='md:flex md:justify-between md:items-center'>
                    {/* Country flag image */}
                    <img
                        src={`${countryFlag}`} //NOTE: SAMPLE ONLY
                        alt='flag'
                        className='country__img h-full w-full max-w-140 max-h-57.25 mb-11 md:max-h-100 md:mb-0 border border-black/20'
                    />
                    {/* Country details */}
                    <div className='w-full md:max-w-144 flex flex-col md:justify-center md:h-fit'>
                        <h1 className='country__header text-[22px] font-extrabold tracking-[-2%] mb-6 md:text-[32px]'>{countryName}</h1>
                        <div className='h-69 flex flex-col justify-between mb-10 md:flex-row md:h-fit md:mb-18'>
                            {/* Details 1 */}
                            <ul className='h-37 flex flex-col justify-between'>
                                <Listitem
                                    label={'Native Name: '}
                                    text={countryNativeName}
                                />
                                <Listitem
                                    label={'Population: '}
                                    text={Intl.NumberFormat(navigator.language, { type: 'decimal', useGrouping: true }).format(countryPopulation)}
                                ></Listitem>
                                <Listitem
                                    label={'Region: '}
                                    text={countryRegion}
                                ></Listitem>
                                <Listitem
                                    label={'Sub-region: '}
                                    text={countrySubregion}
                                ></Listitem>
                            </ul>
                            {/* Details 2 */}
                            <ul className='h-21 flex flex-col justify-between'>
                                <Listitem
                                    label={'Top Level Domain: '}
                                    text={countryTld}
                                />
                                <Listitem
                                    label={'Currencies: '}
                                    text={countryCurrencies}
                                />
                                <Listitem
                                    label={'Languages: '}
                                    text={countryLanguages}
                                />
                            </ul>
                        </div>
                        {/* Bordering countries */}
                        <div className='w-full h-17 flex flex-row flex-wrap justify-between gap-y-4 md:h-fit md:justify-start md:items-center'>
                            <h2 className='country__subheader text-[16px] font-semibold mr-4'>Border Countries:</h2>
                            <div className='flex flex-row flex-wrap gap-2.5'>
                                {countryBorders?.map((country, i) => (
                                    <Link
                                        to={`/${country}`}
                                        key={i}
                                        className='btn btn-primary w-26 h-10 text-xs'
                                    >
                                        {country}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryPage;
