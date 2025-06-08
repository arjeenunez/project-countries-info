import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/region/',
    // baseURL: 'https://restcountries.com/v3.1/name/',
    // https://restcountries.com/v3.1/name/{name}
    withCredentials: true,
});
