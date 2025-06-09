import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import CountriesPage from './pages/CountriesPage';
import { Routes, Route } from 'react-router-dom';
import { StateProvider } from './contexts/state.context';
import { ThemeProvider } from './contexts/theme.context';
import React from 'react';

function App() {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <StateProvider>
                    <Routes>
                        <Route
                            path='/'
                            element={<CountriesPage />}
                        />
                        <Route
                            path='/:id'
                            element={<CountryPage />}
                        />
                    </Routes>
                </StateProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
