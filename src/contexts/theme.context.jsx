import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Setup the mode. Auto on default.
    const [mode, setMode] = useState({
        modes: ['', 'light', 'dark'],
        modeSelect: 0,
    });
    const toggleMode = () => setMode(prevMode => ({ ...prevMode, modeSelect: prevMode.modeSelect + 1 }));

    return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>;
}
