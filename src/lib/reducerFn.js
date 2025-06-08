const reducerFn = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoadingCountries: action.payload };
        case 'SET_COUNTRIES':
            return { ...state, countries: action.payload };
        case 'TOGGLE_THEME':
            return { ...state, isLightMode: !state.isLightMode };
        case 'SET_DISPLAY':
            return { ...state, setToDisplay: state.setToDisplay + 8 };
        default:
            return state;
    }
};

export default reducerFn;
