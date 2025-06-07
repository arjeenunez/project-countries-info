import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import CountriesPage from './pages/CountriesPage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={<CountriesPage />}
                />
                <Route
                    path='/country'
                    element={<CountryPage />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
