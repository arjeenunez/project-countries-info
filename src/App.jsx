import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import CountriesPage from './pages/CountriesPage';
import ThemeContainer from './components/ThemeContainer';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.context';
import { DataProvider } from './contexts/data.context';

function App() {
    return (
        <>
            <ThemeProvider>
                <ThemeContainer>
                    <DataProvider>
                        <Navbar />
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
                    </DataProvider>
                </ThemeContainer>
            </ThemeProvider>
        </>
    );
}

export default App;
