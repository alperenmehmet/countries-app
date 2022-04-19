import React, { useCallback, useContext, useEffect, useState } from 'react';
import { URL_ALL_COUNTRIES, URL_COUNTRY } from './constants/api';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [dropDownValue, setDropDownValue] = useState('All Regions');

  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch(
        searchTerm ? `${URL_COUNTRY}${searchTerm}` : `${URL_ALL_COUNTRIES}`
      );
      const data = await response.json();
      setCountries(data);
      setFilteredCountry(data);
    } catch (err) {
      console.log(err);
    }
  }, [searchTerm]);

  const filterCountryByRegion = (region) => {
    if (region === 'All Regions') {
      setCountries(filteredCountry);
      return;
    }
    const newCountries = filteredCountry?.filter(
      (country) => country.region == region
    );
    setCountries(newCountries);
  };

  const filteredRegion = [
    'All Regions',
    ...new Set(filteredCountry?.map((country) => country.region)),
  ];

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        searchTerm,
        setSearchTerm,
        filterCountryByRegion,
        filteredCountry,
        setFilteredCountry,
        dropDownValue,
        setDropDownValue,
        filteredRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
