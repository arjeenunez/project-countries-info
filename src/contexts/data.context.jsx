import React, { createContext, useEffect, useReducer } from 'react';
import { axiosInstance } from '../lib/axios.js';
import reducerFn from '../lib/reducerFn.js';

const DataContext = createContext();
const DataDispatchContext = createContext();

const defaultState = { localKey: 'countries', userDownload: false, countries: null, country: null, isLoading: false, setToDisplay: 8 };

function DataProvider({ children }) {
    // REMINDER: UseEffect for state data.
    // 1. Load default data.
    // 2. Check if state exists in local storage upon mount
    // 3. Assign check to state if useris downloading data, and deleting data. So as to prevent browser caching.
    // 4. Provide global state data to components.

    const [state, dispatch] = useReducer(reducerFn, defaultState);

    useEffect(() => {
        const localData = localStorage.getItem(defaultState.localKey);
        if (localData) {
            const parsed = JSON.parse(localData);
            if (parsed?.countries) {
                dispatch({ type: 'UPDATE_COUNTRIES', payload: parsed.countries });
                dispatch({ type: 'UPDATE_USER_DOWNLOAD' });
                return;
            }
            return;
        }
    }, []);

    useEffect(() => {
        const { userDownload, countries } = state;
        console.log(`Currentstate - userDownload(${userDownload}) - countries(${countries !== null})`);
        if (!userDownload && countries) {
            console.log('Delete localStorage');
            dispatch({ type: 'UPDATE_COUNTRIES', payload: null });
            dispatch({ type: 'DELETE_LOCALSTORAGE' });
        }
        if (userDownload && !countries) {
            const fetchData = async () => {
                try {
                    dispatch({ type: 'UPDATE_LOADING', payload: true });
                    const res = await axiosInstance.get('europe');
                    const res2 = await axiosInstance.get('asia');
                    const res3 = await axiosInstance.get('americas');
                    const res4 = await axiosInstance.get('africa');
                    const res5 = await axiosInstance.get('oceania');
                    const arr = [...res.data, ...res2.data, ...res3.data, ...res4.data, ...res5.data];
                    dispatch({ type: 'UPDATE_COUNTRIES', payload: arr });
                    dispatch({ type: 'UPDATE_LOCALSTORAGE', payload1: arr, payload2: true });
                    console.log('Calling API and downloading data - ', localStorage); // NOTE: FOR DEVELOPMENT
                } catch (error) {
                    console.log('Error - ', error);
                } finally {
                    dispatch({ type: 'UPDATE_LOADING', payload: false });
                }
            };
            fetchData();
        }
    }, [state.userDownload]);

    console.log('Inside context - ', state);

    return (
        <DataContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}

export { DataDispatchContext, DataContext, DataProvider };
