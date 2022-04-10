import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/countries-list/CountriesList';
import { SingleCountry } from './pages/single-country-page/SingleCountry';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/:name' element={<SingleCountry />} />
      </Routes>
    </>
  );
}
