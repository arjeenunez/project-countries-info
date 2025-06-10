const reducerFn = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DOWNLOAD':
            if (state.userDownload === null) return { ...state, userDownload: false };
            return { ...state, userDownload: !state.userDownload };
        case 'UPDATE_LOADING':
            return { ...state, isLoading: action.payload };
        case 'UPDATE_COUNTRIES':
            return { ...state, countries: action.payload };
        case 'UPDATE_COUNTRY':
            return { ...state, country: action.payload };
        case 'UPDATE_DISPLAY':
            return { ...state, setToDisplay: state.setToDisplay + 8 };
        case 'READ_COUNTRIES':
            return { ...state, toDisplay: state.countries?.filter(e => e.name.common.toLowerCase().includes(action.payload.toLowerCase() || '')) };
        case 'UPDATE_LOCALSTORAGE':
            localStorage.setItem(state.localKey, JSON.stringify({ ...state, countries: action.payload1, userDownload: action.payload2, toDisplay: action.payload1 }));
            return state;
        case 'DELETE_LOCALSTORAGE':
            localStorage.removeItem(state.localKey);
            return state;
        default:
            console.log("Can't find dispatch type, please check.");
            return state;
    }
};

export default reducerFn;
