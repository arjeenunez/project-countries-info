import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';

const ThemeContainer = ({ children }) => {
    const {
        mode: { modes, modeSelect },
    } = useContext(ThemeContext);
    return <div data-theme={modes[modeSelect % 3]}>{children}</div>;
};

export default ThemeContainer;
