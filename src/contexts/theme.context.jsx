import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isLightMode, setIsLightMode] = useState(true);
    const toggleMode = () => setIsLightMode(prevState => !prevState);
    return <ThemeContext.Provider value={{ isLightMode, toggleMode }}>{children}</ThemeContext.Provider>;
}
