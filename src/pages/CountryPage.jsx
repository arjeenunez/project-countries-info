import React, { useContext } from 'react';
import { MoveLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const sample = [
    {
        name: {
            common: 'Belgium',
            official: 'Kingdom of Belgium',
            nativeName: {
                deu: { official: 'KÃ¶nigreich Belgien', common: 'Belgien' },
                fra: { official: 'Royaume de Belgique', common: 'Belgique' },
                nld: { official: 'Koninkrijk BelgiÃ«', common: 'BelgiÃ«' },
            },
        },
        tld: ['.be'],
        cca2: 'BE',
        ccn3: '056',
        cioc: 'BEL',
        independent: true,
        status: 'officially-assigned',
        unMember: true,
        currencies: { EUR: { symbol: 'â‚¬', name: 'Euro' } },
        idd: { root: '+3', suffixes: ['2'] },
        capital: ['Brussels'],
        altSpellings: ['BE', 'BelgiÃ«', 'Belgie', 'Belgien', 'Belgique', 'Kingdom of Belgium', 'Koninkrijk BelgiÃ«', 'Royaume de Belgique', 'KÃ¶nigreich Belgien'],
        region: 'Europe',
        subregion: 'Western Europe',
        languages: { deu: 'German', fra: 'French', nld: 'Dutch' },
        latlng: [50.83333333, 4.0],
        landlocked: false,
        borders: ['FRA', 'DEU', 'LUX', 'NLD'],
        area: 30528.0,
        demonyms: { eng: { f: 'Belgian', m: 'Belgian' }, fra: { f: 'Belge', m: 'Belge' } },
        cca3: 'BEL',
        translations: {
            ara: { official: 'Ù…Ù…Ù„ÙƒØ© Ø¨Ù„Ø¬ÙŠÙƒØ§', common: 'Ø¨Ù„Ø¬ÙŠÙƒØ§' },
            bre: { official: 'Rouantelezh Belgia', common: 'Belgia' },
            ces: { official: 'BelgickÃ© krÃ¡lovstvÃ­', common: 'Belgie' },
            cym: { official: 'Teyrnas Gwlad Belg', common: 'Gwlad Belg' },
            deu: { official: 'KÃ¶nigreich Belgien', common: 'Belgien' },
            est: { official: 'Belgia Kuningriik', common: 'Belgia' },
            fin: { official: 'Belgian kuningaskunta', common: 'Belgia' },
            fra: { official: 'Royaume de Belgique', common: 'Belgique' },
            hrv: { official: 'Kraljevina Belgija', common: 'Belgija' },
            hun: { official: 'Belga KirÃ¡lysÃ¡g', common: 'Belgium' },
            ind: { official: 'Kerajaan Belgia', common: 'Belgia' },
            ita: { official: 'Regno del Belgio', common: 'Belgio' },
            jpn: { official: 'ãƒ™ãƒ«ã‚®ãƒ¼çŽ‹å›½', common: 'ãƒ™ãƒ«ã‚®ãƒ¼' },
            kor: { official: 'ë²¨ê¸°ì— ì™•êµ­', common: 'ë²¨ê¸°ì—' },
            nld: { official: 'Koninkrijk BelgiÃ«', common: 'BelgiÃ«' },
            per: { official: 'Ù¾Ø§Ø¯Ø´Ø§Ù‡ÛŒ Ø¨Ù„Ú˜ÛŒÚ©', common: 'Ø¨Ù„Ú˜ÛŒÚ©' },
            pol: { official: 'KrÃ³lestwo Belgii', common: 'Belgia' },
            por: { official: 'Reino da BÃ©lgica', common: 'BÃ©lgica' },
            rus: { official: 'ÐšÐ¾Ñ€Ð¾Ð»ÐµÐ²ÑÑ‚Ð²Ð¾ Ð‘ÐµÐ»ÑŒÐ³Ð¸Ñ', common: 'Ð‘ÐµÐ»ÑŒÐ³Ð¸Ñ' },
            slk: { official: 'BelgickÃ© krÃ¡Ä¾ovstvo', common: 'Belgicko' },
            spa: { official: 'Reino de BÃ©lgica', common: 'BÃ©lgica' },
            srp: { official: 'ÐšÑ€Ð°Ñ™ÐµÐ²Ð¸Ð½Ð° Ð‘ÐµÐ»Ð³Ð¸Ñ˜Ð°', common: 'Ð‘ÐµÐ»Ð³Ð¸Ñ˜Ð°' },
            swe: { official: 'Konungariket Belgien', common: 'Belgien' },
            tur: { official: 'BelÃ§ika KrallÄ±ÄŸÄ±', common: 'BelÃ§ika' },
            urd: { official: 'Ù…Ù…Ù„Ú©ØªÙ Ø¨Ù„Ø¬Ø¦ÛŒÙ…', common: 'Ø¨Ù„Ø¬Ø¦ÛŒÙ…' },
            zho: { official: 'æ¯”åˆ©æ—¶çŽ‹å›½', common: 'æ¯”åˆ©æ—¶' },
        },
        flag: '\uD83C\uDDE7\uD83C\uDDEA',
        maps: { googleMaps: 'https://goo.gl/maps/UQQzat85TCtPRXAL8', openStreetMaps: 'https://www.openstreetmap.org/relation/52411' },
        population: 11555997,
        gini: { 2018: 27.2 },
        fifa: 'BEL',
        car: { signs: ['B'], side: 'right' },
        timezones: ['UTC+01:00'],
        continents: ['Europe'],
        flags: { png: 'https://flagcdn.com/w320/be.png', svg: 'https://flagcdn.com/be.svg', alt: 'The flag of Belgium is composed of three equal vertical bands of black, yellow and red.' },
        coatOfArms: { png: 'https://mainfacts.com/media/images/coats_of_arms/be.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/be.svg' },
        startOfWeek: 'monday',
        capitalInfo: { latlng: [50.83, 4.33] },
        postalCode: { format: '####', regex: '^(\\d{4})$' },
    },
];

const CountryPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className='country flex flex-col px-7 py-10 md:p-20'>
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
            <div className='md:flex md:justify-between md:items-center'>
                {/* Country flag image */}
                <img
                    src='https://flagcdn.com/w320/be.png' //NOTE: SAMPLE ONLY
                    alt='flag'
                    className='country__img h-full w-full max-w-140 max-h-57.25 mb-11 md:max-h-100 md:mb-0'
                />
                {/* Country details */}
                <div className='w-full md:max-w-144 flex flex-col md:justify-center md:h-fit'>
                    <h1 className='country__header text-[22px] font-extrabold tracking-[-2%] mb-6 md:text-[32px]'>Belgium</h1>
                    <div className='h-69 flex flex-col justify-between mb-10 md:flex-row md:h-fit md:mb-18'>
                        {/* Details 1 */}
                        <ul className='h-37 flex flex-col justify-between'>
                            {new Array(5).fill(0).map((el, i) => (
                                <li
                                    key={i}
                                    className='text-sm font-semibold md:text-[16px]'
                                >
                                    Native Name: <span className='font-light'>Belgie</span>
                                </li>
                            ))}
                        </ul>
                        {/* Details 2 */}
                        <ul className='h-21 flex flex-col justify-between'>
                            {new Array(3).fill(0).map((el, i) => (
                                <li
                                    key={i}
                                    className='text-sm font-semibold md:text-[16px]'
                                >
                                    Languages: <span className='font-light'>Dutch, French, German</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Bordering countries */}
                    <div className='w-full h-17 flex flex-row flex-wrap justify-between gap-y-4 md:h-fit md:justify-start md:items-center'>
                        <h2 className='country__subheader text-[16px] font-semibold mr-4'>Border Countries:</h2>
                        <div className='flex gap-x-2.5'>
                            <a
                                href='#'
                                className='btn btn-primary w-24 h-7 text-sm'
                            >
                                France
                            </a>
                            <a
                                href='#'
                                className='btn btn-primary w-24 h-7 text-sm'
                            >
                                Germany
                            </a>
                            <a
                                href='#'
                                className='btn btn-primary w-24 h-7 text-sm'
                            >
                                Netherlands
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryPage;
