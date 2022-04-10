import { Flex, Box } from '@chakra-ui/react';
import { useGlobalContext } from '../../context';
import ContinentFilter from '../continent-filter/ContinentFilter';
import { CountryCard } from '../country-card/CountryCard';
import { SearchCountry } from '../search-country/SearchCountry';

export function CountriesList() {
  const { countries } = useGlobalContext();
  return (
    <div className='countries'>
      <Flex className='section-center' direction='row'>
        <SearchCountry />
        <ContinentFilter />
      </Flex>
      <div className='section-center countries-grid'>
        {countries.map((country, index) => {
          return <CountryCard key={index} {...country} />;
        })}
      </div>
    </div>
  );
}
