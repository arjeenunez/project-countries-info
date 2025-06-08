import React, { createContext, useEffect, useReducer } from 'react';
import { axiosInstance } from '../lib/axios.js';
import reducerFn from '../lib/reducerFn.js';

const StateContext = createContext();
const DispatchContext = createContext();

const defaultState = { keepDownload: false, countries: null, isLoadingCountries: false, isLightMode: true, localKey: 'countries', setToDisplay: 8 };

function StateProvider({ children }) {
    useEffect(() => {
        const localData = localStorage.getItem(defaultState.localKey);
        if (localData) {
            const parsed = JSON.parse(localData);
            if (parsed?.countries) {
                dispatch({ type: 'SET_COUNTRIES', payload: parsed.countries });
                return;
            }
        }
        const fetchData = async () => {
            console.log('Calling API and downloading data');
            dispatch({ type: 'SET_LOADING', payload: true });
            try {
                const res = await axiosInstance.get('europe');
                const res2 = await axiosInstance.get('asia');
                const res3 = await axiosInstance.get('americas');
                const res4 = await axiosInstance.get('africa');
                const res5 = await axiosInstance.get('oceania');
                const arr = [...res.data, ...res2.data, ...res3.data, ...res4.data, ...res5.data];
                dispatch({ type: 'SET_COUNTRIES', payload: arr.data });
                localStorage.setItem(defaultState.localKey, JSON.stringify({ countries: arr }));
            } catch (error) {
                console.log('Error - ', error);
            } finally {
                dispatch({ type: 'SET_LOADING', payload: false });
            }
        };
        fetchData();
    }, []);

    const [state, dispatch] = useReducer(reducerFn, defaultState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export { DispatchContext, StateContext, StateProvider };
